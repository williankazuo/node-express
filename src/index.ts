import express from 'express';

const app = express();
app.use(express.json());
app.get('/health-check', (req, res) => {
    res.send('UP');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});