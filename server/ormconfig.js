module.exports = {
  type: 'mysql',
  host: '127.0.0.1',
  username:'root',
  password: '123456',
  database: 'test',
  port: 3307,
  charset: 'utf8',
  driver: 'mysql',
  synchronize: process.env.NODE_ENV !== 'production',
  entities: ['dist/**/*entity.{ts,js}'],
  migrations: ['dist/migrations/*.{ts,js}'],
  logging: process.env.NODE_ENV !== 'production'? 'all': 'error',
  migrations: ["migration/*.ts"],
  cli: {
    migrationsDir: "migration"
  },
  connectTimeout: 30000,
  acquireTimeout: 30000
};
