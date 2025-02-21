const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

// Load the universities data from JSON file
let data;
fs.readFile('UK_Universities.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    data = JSON.parse(jsonString);
});

// Route to get the list of colleges
app.get('/colleges', (req, res) => {
    const colleges = data.map(college => college.name);
    res.json({ Colleges: colleges });
});

// Route to get colleges by name
app.get('/colleges/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const colleges = data.filter(college => college.name.toLowerCase().includes(name)).map(college => college.name);
    res.json({ Colleges: colleges });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
