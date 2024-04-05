const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://User:123@cluster0.mcxliib.mongodb.net/Youtube_db?retryWrites=true&w=majority&appName=Cluster0')
const connect = ()=>{
      return  mongoose.connect('mongodb+srv://User:123@cluster0.mcxliib.mongodb.net/Youtube_db?retryWrites=true&w=majority&appName=Cluster0')
}

module.exports = connect;