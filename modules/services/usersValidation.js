console.log('uservalidation')
const Joi = require('joi');
const repo = require('../models/users.js')
exports.registerValidation = async (req, res, next) => {
// console.log(req)

	const schema = Joi.object({
	    name: Joi.string()
	        .alphanum()
	        .min(3)
	        .max(30)
	        .required(),

	    password: Joi.string()
	        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
	        .required(),

	    // repeat_password: Joi.ref('password'),
	        // .required(),

	    password_confirmation: Joi.any()
			.valid(Joi.ref('password'))
			.required(),

	    // access_token: [
	    //     Joi.string(),
	    //     Joi.number()
	    // ],

	    // birth_year: Joi.number()
	    //     .integer()
	    //     .min(1900)
	    //     .max(2013),

	    email: Joi.string()
	        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
	        .required(),

	    contact: Joi.string()
	        // .min(10)
	        // .max(10)
	        .length(10)
	    	.required(),
	})
	    // .with('username', 'birth_year')
	    // .xor('password', 'access_token')
	    // .with('password', 'repeat_password');


	// schema.validate({ username: 'abc', birth_year: 1994 });
	schema.validate(req.body);
	// schema.validate({req.body});
	// -> { value: { username: 'abc', birth_year: 1994 } }

	schema.validate({});
	// -> { value: {}, error: '"username" is required' }

	// Also -

	try {
	    // const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
	    const value = await schema.validateAsync(req.body);
		next();
	    // const value = await schema.validateAsync({req.body});
	}
	catch (error) {
		// console.error(error.details)
		// console.error(`register Validation error: ${error.details.map(x => x.path).join(', ')}`)
		return res.status(200).json({
			status: 'register Validation Fail',
			// message: error
			// message: `Validation error: ${error.details.map(x => x.message).join(', ')}`,
			message: error.details.map(x => x.message).join(', '),
			path: error.details.map(x => x.path).join(', '),
			// path: `register Validation error: ${error.details.map(x => x.path).join(', ')}`,
		});
	}

}


exports.loginValidation = async (req, res, next) => {
		// console.log('login loginValidation')
	const joiSchema = Joi.object({
		email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
		password: Joi.string().required(),
	})

	try {
	    // const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
	    const value = await joiSchema.validateAsync(req.body);
		next();
	    // const value = await schema.validateAsync({req.body});
	}
	catch (error) {
		// console.error(error.details)
		// console.error(`login Validation error: ${error.details.map(x => x.path).join(', ')}`)
		return res.status(200).json({
			status: 'login Validation Fail',
			// message: error,
			// message: `login Validation error: ${error.details.map(x => x.message).join(', ')}`,
			message: error.details.map(x => x.message).join(', '),
			path: error.details.map(x => x.path).join(', '),
			// path: `login Validation error: ${error.details.map(x => x.path).join(', ')}`,
		});
	}

}
