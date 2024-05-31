const express = require('express');
const axios = require('axios');
const cors = require('cors');
const Parser = require('rss-parser');

const parser = new Parser()
const app = express();
const PORT = 3001;



app.use(cors());

app.get('/news', async (req, res) => {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(400).send('Keyword is required');
  }

  try {
    const response = await axios.get(
      `https://news.google.com/rss/search?q=${encodeURIComponent(keyword)}&hl=tr-TR&gl=TR&ceid=TR:tr`
    );
    const feed = await parser.parseString(response.data);
    res.send(feed);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
