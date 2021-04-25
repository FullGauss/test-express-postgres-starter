require('dotenv').config();

module.exports = {
  SESSION_SECRET: process.env.SESSION_SECRET || 'super-secret',
  CORS_CONFIG: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:8081',
    credentials: true,
    methods: [ 'GET', 'POST', 'PUT' , 'UPDATE' , 'OPTIONS' ]
  }
};
