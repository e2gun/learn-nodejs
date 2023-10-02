const express = require("express");
const router  = express.Router();
const Customer = require('../../model/Customers');

router.post("/",async (req,res) => {
    try{
        var identityNumber = req.body.identityNumber;

        let customer = await Customer.findOne({ identityNumber });
        if(customer){
            res.status(400).json({ errors : [ { msg : 'Bu T.C. Kimlik numarası ile müşteri içeriyor' } ]});
        }
        customer = new Customer(req.body);
        await customer.save();
        res.send(customer);
    } catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;
