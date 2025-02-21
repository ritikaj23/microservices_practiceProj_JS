const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

let data;
// Load the universities data from JSON file
fs.readFile('UK_Universities.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    data = JSON.parse(jsonString);
});

// Route to get websites for a specific college
app.get('/websites/:name', (req, res) => {
    const name = req.params.name;
    const webpages = [];
    const college = data.find(college => college.name === name);
    if (college) {
        webpages.push(...college.web_pages);
    }
    res.json({ Webpages: webpages });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
