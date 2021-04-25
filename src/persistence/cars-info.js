const sql = require('sql-template-strings');
const db = require('./db');

module.exports = {
  async create(brand, number) {
    const {rows} = await db.query(sql`
    INSERT INTO cars_info (brand, number)
      VALUES (${brand}, ${number})
      RETURNING *;
    `);
    const result = rows[0];
    return result
  },
  async find(id) {
    const {rows} = await db.query(sql`
    SELECT * FROM cars_info WHERE id = ${id} LIMIT 1;
    `);
    if (rows.length !== 1) {
      return null;
    }

    const result = rows[0];
    return result;
  },
  async getAll() {
    const {rows} = await db.query(sql`
    SELECT * FROM cars_info;
    `);

    const result = rows;
    return result;
  },
  async update(id, brand, number) {
    const {rows} = await db.query(sql`
    UPDATE cars_info
      SET brand = ${brand},
      number = ${number}
      WHERE id = ${id}
    RETURNING *;
    `);
    const result = rows[0];
    return result
  },
};