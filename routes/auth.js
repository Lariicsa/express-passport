const router = require('express').Router()
const User = require('../models/User')

router.get('/signup', (req,res,next) => {
	const config = {
		title: 'Sign up',
		action: '/signup',
		button: 'Sign up'
	}
	res.render('auth/form', config) //info dinámica en auth/form
})

//manejo de creación de usuarios
router.post('/signup', async (req,res, next) => {
	const user = await User.register({ ...req.body }, req.body.password) //thnks to PLM
	console.log(user)
	res.redirect('/login')
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