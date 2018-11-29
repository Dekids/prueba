const express = require('express');

let SessionsController =  require('../controllers/sessions');
let router = express.Router();


router.route('/sessions').post(SessionsController.create)
                        .delete(SessionsController.destroy);
module.exports = router;
