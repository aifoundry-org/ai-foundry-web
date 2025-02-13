export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4ZePjR+NhSsw9MjWq/mbgw=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 't5MQFsM5SP70TFBaO6WW/A=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
