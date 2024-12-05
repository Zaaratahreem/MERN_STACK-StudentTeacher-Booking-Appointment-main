app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});
const cors = require('cors');
app.use(cors());
