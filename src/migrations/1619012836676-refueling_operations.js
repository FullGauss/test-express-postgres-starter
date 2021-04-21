const db = require('../persistence/db');

module.exports.up = async function (next) {
  const client = await db.connect();

  await client.query(`
  CREATE TABLE IF NOT EXISTS refueling_operations (
    gas_station_id int,
    car_id int,
    fuel_capacity int,
    FOREIGN KEY (gas_station_id) REFERENCES gas_stations(id) ON DELETE SET NULL ON UPDATE SET NULL,
    FOREIGN KEY (car_id) REFERENCES cars_info(id) ON DELETE SET NULL ON UPDATE SET NULL
  );
  `);

  // await client.query(`
  // INSERT INTO refueling_operations (gas_station_id, car_id, fuel_capacity) 
  // VALUES
  // (0, 1, 10),
  // (1, 2, 15),
  // (2, 3, 20),
  // (3, 4, 25),
  // (4, 0, 30);
  // `);

  await client.release(true);

  next()
}

module.exports.down = async function (next) {
  const client = await db.connect();

  await client.query(`
  DROP TABLE refueling_operations;
  `);

  next()
}
