const express = require("express");
const router  = express.Router();
const Vehicle = require('../../model/Vehicles');

router.get("/",(req,res) => res.send('Vehicles Route'));

router.post("/",async (req,res) => {
    try{
        var chassisNumber = req.body.chassisNumber;

        let vehicle = await Vehicle.findOne({ chassisNumber });
        if(vehicle){
            res.status(400).json({ errors : [ { msg : 'Bu şase numarası ile araç bulunuyor! Kayıt işlemi geçerli değil.' } ]});
        }
        vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.send(vehicle);
    }
    catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;