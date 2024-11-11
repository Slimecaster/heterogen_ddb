const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const accountController = require('../controllers/accountController');
const User = require('../models/model');

// Route to render form for editing an existing film
router.get('/user/:id/update', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('edit', { user });
    } catch (err) {
        console.error("Fejl ved hentning af user:", err);
        res.status(500).send("Fejl ved hentning af user.");
    }
});

router.get('/', userController.getAllUsers);
router.post('/user', userController.createUser);
router.post('/user/:id/update', userController.updateUser);
router.post('/user/:id/delete', userController.deleteUser);

// Route to render form for editing an existing film
router.get('/account/:id/update', async (req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        res.render('edit', { account });
    } catch (err) {
        console.error("Fejl ved hentning af account:", err);
        res.status(500).send("Fejl ved hentning af account.");
    }
});

router.get('/', accountController.getAllAccounts);
router.post('/account', accountController.createAccount);
router.post('/account/:id/update', accountController.updateAccount);
router.post('/account/:id/delete', accountController.deleteAccount);


module.exports = router;