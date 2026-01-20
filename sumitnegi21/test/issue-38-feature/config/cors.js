module.exports = {
  origin: 'https://stage.abc.com',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200
};