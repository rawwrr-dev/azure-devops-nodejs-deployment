const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Cloud-Based Application Deployment on Microsoft Azure</h1>
        <h2>DevOps Internship Project</h2>
        <p>Successfully deployed using Node.js, Docker, Jenkins, Nginx, and Microsoft Azure Virtual Machines.</p>
    `);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});