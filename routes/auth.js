const router = require('express').Router()

router.get('/signup', (req,res,next) => {
	const config = {
		title: 'Sign up',
		action: '/signup',
		button: 'Sign up'
	}
	res.render('auth/form', config) //info dinámica en auth/form
})

router.get('/login', (req,res, next) => {
	const config = {
		title: 'Log in',
		action: '/login',
		button: 'Log in'
	}
	res.render('auth/form', config)
})

module.exports = router