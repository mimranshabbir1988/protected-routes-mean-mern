const mongoose = require("mongoose");
var colors = require('colors');

const dbConnection = async() =>{
  try {
    let conn = await mongoose.connect('mongodb://0.0.0.0:27017/ecommerce-db')
    console.log(`Database connected on ${conn.connection.host} host..!`.bgYellow.red)
  } catch (error) {
      console.log(`Error in connection ${error}`)
  }
}
module.exports = dbConnection;