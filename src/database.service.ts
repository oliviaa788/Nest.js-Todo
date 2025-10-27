import { Injectable } from '@nestjs/common';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

@Injectable()
export class DatabaseService {
  private db: any;

  async onModuleInit() {
    this.db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database,
    });

    await this.db.exec(`
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT 0
      )
    `);

    console.log('Connected to SQLite database and ensured todos table exists.');
  }

  getDb() {
    return this.db;
  }
}
