const db = require('../persistence/db');

module.exports.up = async function (next) {
  const client = await db.connect();

  await client.query(`
  CREATE TABLE IF NOT EXISTS gas_stations (
    id serial PRIMARY KEY,
    name text,
    address text
  );
  `);

  await client.query(`
  INSERT INTO gas_stations (name, address) 
  VALUES
  ('Лукойл', 'ул Герцена, 61А'),
  ('Роснефть', 'просп. Фрунзе, 115Б'),
  ('Газпромнефть', 'ул. Яковлева, 65Б'),
  ('Татнефть', 'Шегарский тракт, 9')
  ('Томскавтотранс', 'Академический просп., 26');
  `);

  await client.release(true);

  next()
}

module.exports.down = async function (next) {
  const client = await db.connect();

  await client.query(`
  DROP TABLE gas_stations;
  `);

  next()
}
