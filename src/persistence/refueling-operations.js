const sql = require('sql-template-strings');
const db = require('./db');

module.exports = {
  async create(gasStationId, carId, fuelCapacity) {
    await db.query(sql`
    INSERT INTO refueling_operations (gas_station_id, car_id, fuel_capacity)
      VALUES (${gasStationId}, ${carId}, ${fuelCapacity});
    `);
    return gasStationId
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
    SELECT gas_station_id, car_id, fuel_capacity, brand as car_brand, 
    number as car_number, name as station_name, address as station_address
    FROM refueling_operations LEFT JOIN gas_stations
    ON refueling_operations.gas_station_id = gas_stations.id
    LEFT JOIN cars_info ON refueling_operations.car_id = cars_info.id;
    `);
    const result = rows;
    return result;
  },
};