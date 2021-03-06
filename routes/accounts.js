const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accounts');

router.get('/accounts', accountsController.index);
router.get('/accounts/:id', accountsController.show);
router.post('/accounts', accountsController.create);
router.put('/accounts/:id', accountsController.update);
router.delete('/accounts/:id', accountsController.destroy);


module.exports = router;
