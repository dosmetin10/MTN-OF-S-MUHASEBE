const bcrypt = (() => {
  try {
    return require('bcrypt');
  } catch (e) {
    return null;
  }
})();

const { initDatabase } = require('./db');
const logger = require('./logger');

let db;

function ensureDb() {
  if (!db) {
    db = initDatabase();
  }
}

async function createUser(username, password, role = 'user') {
  ensureDb();
  if (!bcrypt) throw new Error('bcrypt not installed');
  const hash = await bcrypt.hash(password, 10);
  try {
    const stmt = db.prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)');
    const info = stmt.run(username, hash, role);
    logger.info(`Created user ${username}`);
    return info.lastInsertRowid;
  } catch (err) {
    logger.error(`createUser error: ${err.message}`);
    throw err;
  }
}

async function verifyUser(username, password) {
  ensureDb();
  if (!bcrypt) throw new Error('bcrypt not installed');
  const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  if (!row) return null;
  const ok = await bcrypt.compare(password, row.password);
  if (ok) {
    return { id: row.id, username: row.username, role: row.role };
  }
  return null;
}

module.exports = { createUser, verifyUser };
