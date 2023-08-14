const app = require('./app');
const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
