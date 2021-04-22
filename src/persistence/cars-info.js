const sql = require('sql-template-strings');
const db = require('./db');

module.exports = {
  async create(brand, number) {
    await db.query(sql`
    INSERT INTO cars_info (brand, number)
      VALUES (${brand}, ${number});
    `);
    return brand
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
//   async delete(id) {
//     await db.query(sql`
//     DELETE FROM sessions WHERE id = ${id};
//     `);
//   }
};