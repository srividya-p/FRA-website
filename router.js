var express = require('express');
const {Attendance, Status} = require('./db/mongoose')
var router = express.Router();

// Dashboard
router.get('/', (req, res)=> {
    res.locals = {  title: 'Face Rec Attendance' };
    res.render('Dashboard/dashboard');
})

//Attendance Records
router.get('/view-records', async (req, res) => {
    try{
        let records = await Attendance.find()
        let status = await Status.find()
        res.locals = {  title: 'Attendance Records' };
        res.render('Attendance/view_records', {records: JSON.parse(JSON.stringify(records)), 
            status: JSON.parse(JSON.stringify(status))});
        
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

router.get('/update', async (req, res) =>{
    try{
        await Attendance.updateMany({}, {'$set':{'attendance' : 'absent'}})
        await Status.updateMany({}, {'$set':{'status' : 'No Students Present!'}})
        res.redirect('/view-records')

    } catch(err) {
        console.log(err)
        res.status(400).send(err)
    }
})

module.exports = router;