import express from 'express';
const app = express();

// read on npm cors and vite proxy
// // 2nd way of Enable CORS for all routes
// // 1st way to use /api/jokes instead of /jokes
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

app.get('/', (req, res) => {
    res.send('Server is ready!');
})

// generate a list of five jokes form ChatGpt
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "Math Problem",
          content: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
        },
        {
          id: 2,
          title: "Coding Struggle",
          content: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
          id: 3,
          title: "Database Humor",
          content: "Why did the SQL query break up with the database? Too many relationships."
        },
        {
          id: 4,
          title: "Networking Joke",
          content: "Why did the computer go to therapy? It had too many connection issues."
        },
        {
          id: 5,
          title: "Frontend Fun",
          content: "Why do CSS selectors avoid arguments? They just want to keep things in order."
        }
    ]

    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app is running on localhost://${port}`)
})