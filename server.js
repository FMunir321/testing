const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Serverless backend working ✅');
});
app.get('/api', (req, res) => {
    res.send('the backend API working fineeeeeee22 ✅');
});
console.log("Environment12:", process.env.NODE_ENV || 'development');

if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Local server running at http://localhost:${PORT}`);
    });
}

const serverless = require('serverless-http');
module.exports = serverless(app);