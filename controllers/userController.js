const User=require('../models/model');

exports.createUser= async (req, res) => {
    try{
        const newUser = new User({
           username: req.body.username,
           password: req.body.password
        });
    }catch(err){
        console.error("Fejl ved tilføjelse af user:",err);
        res.status(500).send("Fejl ved tilføjelse af user.")
    }
};


