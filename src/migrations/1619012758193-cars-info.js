const db = require('../persistence/db');

module.exports.up = async function (next) {
  const client = await db.connect();

  await client.query(`
  CREATE TABLE IF NOT EXISTS cars_info (
    id serial PRIMARY KEY,
    brand text,
    number text UNIQUE
  );
  `);

  await client.query(`
  INSERT INTO cars_info (brand, number) 
  VALUES
  ('Hyundai Accent', 'А352АА'),
  ('Mercedes-Benz', 'С222ТА'),
  ('Skoda Superb', 'Н900ОР'),
  ('Daewoo Matiz', 'В755ВЕ'),
  ('Chevrolet Silverado', 'Р111УХ');
  `);

  await client.release(true);

  next()
}

module.exports.down = async function (next) {
  const client = await db.connect();

  await client.query(`
  DROP TABLE cars_info;
  `);

  next()
}
