const { Pool } = require('pg');

const pool = new Pool({
  host: 'timescaledb',   // nome do serviço no docker-compose
  user: 'postgres',
  password: 'postgres',
  database: 'sensores',
  port: 5432,
});

module.exports = pool;