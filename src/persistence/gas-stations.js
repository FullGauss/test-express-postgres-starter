const sql = require('sql-template-strings');
const db = require('./db');

module.exports = {
  async create(name, address) {
    const {rows} = await db.query(sql`
    INSERT INTO gas_stations (name, address)
      VALUES (${name}, ${address})
      RETURNING *;
    `);
    const result = rows[0];
    return result
  },
  async find(id) {
    const {rows} = await db.query(sql`
    SELECT * FROM gas_stations WHERE id = ${id} LIMIT 1;
    `);
    if (rows.length !== 1) {
      return null;
    }

    const result = rows[0];
    return result;
  },
  async getAll() {
    const {rows} = await db.query(sql`
    SELECT * FROM gas_stations;
    `);

    const result = rows;
    return result;
  },
  async update(id, name, address) {
    const {rows} = await db.query(sql`
    UPDATE gas_stations
      SET name = ${name},
      address = ${address}
      WHERE id = ${id}
    RETURNING *;
    `);
    const result = rows[0];
    return result
  },
};