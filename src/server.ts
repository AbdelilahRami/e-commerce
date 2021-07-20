import {app} from './app'
import * as http from 'http';

const sqlite3 = require("sqlite3").verbose();
const path = require("path");

/**
 * Get port from environment and store in Express.
 */

const db_name = path.resolve(__dirname, "prisma", "DATABASE.db");
const db = new sqlite3.Database(db_name, (err: any) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'DATABASE.db");
});
let port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.js.
 */
let server = http.createServer(app);
server.listen(port);


