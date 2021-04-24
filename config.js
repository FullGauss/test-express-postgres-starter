module.exports = {
  SESSION_SECRET: process.env.SESSION_SECRET || 'super-secret',
  CORS_CONFIG: {
    origin: process.env.CORS_ORIGIN || 'localhost:3000',
    credentials: true,
    methods: [ 'GET', 'POST', 'PUT' , 'UPDATE' , 'OPTIONS' ]
  }
};
