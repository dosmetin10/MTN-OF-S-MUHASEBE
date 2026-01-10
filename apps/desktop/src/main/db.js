const { app } = require('electron');
const path = require('path');
const fs = require('fs');
let Database;

try {
  Database = require('better-sqlite3');
} catch (err) {
  // better-sqlite3 may not be available in container; surface friendly error later
  Database = null;
}

function getDbPath() {
  const dir = app.getPath('userData');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, 'mtn_ofs.db');
}

function initDatabase(encryptionKey) {
  const dbPath = getDbPath();
  if (!Database) {
    throw new Error('better-sqlite3 not installed; run npm install with native build support.');
  }
  const db = new Database(dbPath);

  // If using SQLCipher, PRAGMA key could be applied here. Placeholder:
  if (encryptionKey) {
    try {
      db.pragma(`key = \"${encryptionKey}\"`);
    } catch (e) {
      // ignore if not SQLCipher build
    }
  }

  // Create essential tables if not exist
  db.prepare(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  ).run();

  db.prepare(
    `CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    )`
  ).run();

  return db;
}

module.exports = { initDatabase, getDbPath };
