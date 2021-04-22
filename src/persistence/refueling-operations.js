const sql = require('sql-template-strings');
const db = require('./db');

module.exports = {
  async create(gas_station_id, car_id, fuel_capacity) {
    await db.query(sql`
    INSERT INTO refueling_operations (gas_station_id, car_id, fuel_capacity)
      VALUES (${gas_station_id}, ${car_id}, ${fuel_capacity});
    `);
    return gas_station_id
  },
  async find(id) {
    const {rows} = await db.query(sql`
    SELECT * FROM refueling_operations WHERE id = ${id} LIMIT 1;
    `);
    if (rows.length !== 1) {
      return null;
    }

    const result = rows[0];
    return result;
  },
  async getAll() {
    const {rows} = await db.query(sql`
    SELECT * FROM refueling_operations;
    `);

    const result = rows;
    return result;
  },
};