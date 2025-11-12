export async function onRequestPost(context) {
  // Handle CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await context.request.json();
    const { name, email, company, industry, message, hearAboutUs } = body;

    // Validate required fields
    if (!name || !email || !industry || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }

    const notionApiKey = context.env.NOTION_API_KEY;
    const databaseId = context.env.NOTION_DATABASE_ID;

    // Create page in Notion database using fetch
    const notionResponse = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionApiKey}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          'Full Name': {
            rich_text: [{ text: { content: name } }]
          },
          'Please share your email': {
            email: email
          },
          'Company': {
            rich_text: [{ text: { content: company || '' } }]
          },
          'What industry is your Company focused on?': {
            multi_select: [{ name: industry }]
          },
          'Tell us a little bit about what you are looking for!': {
            rich_text: [{ text: { content: message } }]
          },
          'How did you hear about us?': {
            multi_select: hearAboutUs && hearAboutUs.length > 0
              ? hearAboutUs.map(item => ({ name: item }))
              : []
          },
          'Submission time': {
            date: { start: new Date().toISOString() }
          }
        }
      })
    });

    if (!notionResponse.ok) {
      const errorData = await notionResponse.text();
      console.error('Notion API error:', errorData);
      return new Response(
        JSON.stringify({ error: 'Failed to submit to Notion', details: errorData }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );

  } catch (error) {
    console.error('Error submitting to Notion:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit form', details: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
