module.exports = {
  enabled: true,
  origin: [
    'http://localhost:3000', // URL de Next.js
    'http://127.0.0.1:3000',
  ],
  headers: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
};
