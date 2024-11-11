const Account=require('../models/model');


exports.createAccount = (req, res) => {
    try{
        const newAccount = new Account({
            name: req.body.name,
            email: req.body.email
        });
    }catch(err){
        console.error("Fejl ved tilføjelse af account:",err);
        res.status(500).send("Fejl ved tilføjelse af account.")
    }
};