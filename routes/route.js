const { signup, login } = require('../controller/controller');




const router = require('express').Router();

router.post('/user/signup',signup);
router.post('/user/login',  login)


module.exports = router;

