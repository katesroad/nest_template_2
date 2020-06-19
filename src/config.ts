/**
 * Document:
 * >1. https://docs.nestjs.com/techniques/configuration
 * >2. https://www.youtube.com/watch?v=dZd9tZe5w3M
 */
export const config = () => ({
  postgres: {
    type: 'postgres',
    host: process.env['pg.host'],
    port: process.env['pg.port'],
    username: process.env['pg.username'],
    password: process.env['pg.password'],
    database: process.env['pg.database'],
    synchronize: false,
    entities: ['dist/entities/*.entity.js'],
  },
  redis: {
    host: process.env['redis.host'],
    port: process.env['redis.port'],
  },
  elastic: {
    host: process.env['elastic.host'],
    port: process.env['elastic.port'],
  },
  app: {
    port: +process.env['app.port'],
  },
});
