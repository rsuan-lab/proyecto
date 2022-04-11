const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/search/:id', customerController.search);
module.exports = router;

