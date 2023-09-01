let express = require('express');
let router = express.Router();

let userController = require('./controllers/userController');

router.get('/', (req,res) => res.redirect('/user/add'));

router.get('/user', userController.imcList);
//router.get('/user/show/:iduser', userController.userShow)
//router.get('/user/remove/:iduser', userController.userRemove);
router.get('/user/add', userController.imcFormAdd);
router.post('/user/new', userController.imcNew);
//router.get('/user/update/:iduser', userController.userUpdate);

module.exports = router;