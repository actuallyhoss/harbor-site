import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, industry, message, hearAboutUs } = req.body;

    if (!name || !email || !industry || !message) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      return res.status(500).json({
        error: 'Server configuration error'
      });
    }

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Full Name': {
          rich_text: [{ text: { content: name } }],
        },
        'Please share your email': {
          email: email,
        },
        'Company': {
          rich_text: [{ text: { content: company || '' } }],
        },
        'What industry is your Company focused on?': {
          multi_select: [{ name: industry }],
        },
        'Tell us a little bit about what you are looking for!': {
          rich_text: [{ text: { content: message } }],
        },
        'How did you hear about us?': {
          multi_select: (hearAboutUs && hearAboutUs.length > 0)
            ? hearAboutUs.map(item => ({ name: item }))
            : [],
        },
        'Submission time': {
          date: { start: new Date().toISOString() },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully'
    });

  } catch (error) {
    return res.status(500).json({
      error: 'Failed to submit form. Please try again later.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
