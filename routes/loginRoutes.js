const express = require('express')
const router = express.Router()
const {registerController, loginController} = require ('../controllers/login')

router.post('/', loginController)
router.post('/registro', registerController)

module.exports = router