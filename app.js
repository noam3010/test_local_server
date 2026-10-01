const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req,res) => {
    res.send("MAIN page");
});

app.get('/about', (req,res) => {
    res.send("this is the about page");
});

app.get('/api/time', (req, res) => {
    res.json({
        time: new Date().toLocaleTimeString()
    });
});

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'Noam';
    //res.json(`Hi ${name}, welcome to our page!`);
    res.json({greeting: 'Hello, ' + name + '!'});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});