export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['x8Jf8Ho6umqD2R5iIhyNag==','pfcqX52KIJdyzhjXESUovw==']),
  },
});
