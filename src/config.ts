let mongoose = require('mongoose');
require('dotenv').config()

const server = process.env.MONGOSERVER; // REPLACE WITH YOUR DB SERVER
const database = 'my_database';      // REPLACE WITH YOUR DB NAME

export default class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch((err: any) => {
         console.error('Database connection error',err)
       })
  }
}

// module.exports = new Database()