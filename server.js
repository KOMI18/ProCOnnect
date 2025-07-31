const server = require('./app');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on port ${port}`);
});