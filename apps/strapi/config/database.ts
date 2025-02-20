import path from 'path';

export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection: {
      filename: path.join(
        __dirname,
        '..', '..',
        env('DATABASE_FILENAME', 'database/data.db')
      ),
    },
    useNullAsDefault: true,
  },
});