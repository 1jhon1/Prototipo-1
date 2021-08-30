const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.li);
router.get('/tabla', customerController.list);
router.get('/registro', customerController.l);
router.post('/registro', customerController.registro);
router.post('/registro', customerController.registro);
router.post('/add', customerController.save);
router.get('/login', customerController.user);
router.post('/login', customerController.user);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);





module.exports = router;

