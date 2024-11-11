const Account=require('../models/model');

//Tilføjer en ny account
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

// Henter alle accounts og viser dem
exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.render('index', { accounts });
    } catch (err) {
        console.error("Fejl ved hentning af account:", err);
        res.status(500).send("Fejl ved hentning af account.");
    }
};

// Opdaterer en account
exports.updateAccount = async (req, res) => {
    try {
        await Account.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email
        });
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved opdatering af account:", err);
        res.status(500).send("Fejl ved opdatering af account.");
    }
};


// Sletter en account
exports.deleteAccount = async (req, res) => {
    try {
        await Account.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved sletning af account:", err);
        res.status(500).send("Fejl ved sletning af account.");
    }
};
