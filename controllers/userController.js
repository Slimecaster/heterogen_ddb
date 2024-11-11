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

// Henter alle users og viser dem
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('index', { accounts: users });
    } catch (err) {
        console.error("Fejl ved hentning af user:", err);
        res.status(500).send("Fejl ved hentning af user.");
    }
};

// Opdaterer en user
exports.updateUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, {
            username: req.body.username,
            password: req.body.password
        });
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved opdatering af user:", err);
        res.status(500).send("Fejl ved opdatering af user.");
    }
};


// Sletter en user
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved sletning af user:", err);
        res.status(500).send("Fejl ved sletning af user.");
    }
};


