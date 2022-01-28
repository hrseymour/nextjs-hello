const { Pool, Client } = require('pg')

export default function handler(req, res) {

  const pool = new Pool({
    host: 'localhost',
    database: 'test',
    user: 'postgres',
    password: '1234',
    port: 5432,
  })

  pool.query("SELECT * from moose", (err, db_res) => {
    return res.status(200).json(db_res.rows);
    pool.end();
  });

}

