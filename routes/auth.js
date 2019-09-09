const router = require('express').Router()

router.ger('/signup', (req,res,next) => {
	res.render('auth/form')
})

router.get('7login', (req,res, next) => {
	res.render('auth/form')
})

module.exports = router