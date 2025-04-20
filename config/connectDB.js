const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017/todolist";
const connectDB = async () => {
    try {
        //Create connection to MongoDB
        await mongoose.connect(uri);
        console.info("Mongoose connected to DB successfuly");
    }catch (err) {
        console.error(err.message);
        console.info("failedto connect to DB");
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB();