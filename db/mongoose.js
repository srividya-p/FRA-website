const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

var Attendance = mongoose.model('Attendance',
    mongoose.Schema({}, { strict: false }), 'Lecture1')

var Status = mongoose.model('Status',
    mongoose.Schema({}, { strict: false }), 'Status')

console.log("Connected to Database!")

module.exports = {
    Attendance,
    Status
}
