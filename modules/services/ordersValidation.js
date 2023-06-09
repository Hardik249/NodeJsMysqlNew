console.log('ordersValidation')
const Joi = require('joi');
// const repo = require('../models/users.js')

exports.ordersValidation = async (req, res, next) => {
	// console.log(req);
	// console.log(req.body);
	// console.log(req.params);
	const schema = Joi.object({
	    addressId: Joi.number()
	    	.integer()
	    	.required(),
	    // userId: Joi.number()
	    // 	.integer()
	    // 	.required(),
	    firstName: Joi.string()
	        // .alphanum()
	        // .min(3)
	        .max(255)
	        .messages({ "string.max": '"firstName" must max to 255 chars long' })
	        .required(),
	    lastName: Joi.string()
	        // .alphanum()
	        // .min(3)
	        .max(255)
	        .messages({ "string.max": '"lastName" must max to 255 chars long' })
	        .required(),
	    contact: Joi.string()
	        // .min(10)
	        // .max(10)
	        .length(10)
	        .messages({ "string.length": '"contact" must be 10 characters long' })
	    	.required(),
	    total: Joi.number()
	    	.integer()
	    	.required(),
	})
	    // .with('username', 'birth_year')
	    // .xor('password', 'access_token')
	    // .with('password', 'repeat_password');


	// schema.validate({ username: 'abc', birth_year: 1994 });
	schema.validate(req);
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
		// console.error(error)
		// console.error(error.details)
		// console.error(`register Validation error: ${error.details.map(x => x.path).join(', ')}`)
		return res.status(200).json({
			status: 'order Validation Fail',
			// message: error
			// message: `Validation error: ${error.details.map(x => x.message).join(', ')}`,
			message: error.details.map(x => x.message).join(', '),
			path: error.details.map(x => x.path).join(', '),
			// path: `register Validation error: ${error.details.map(x => x.path).join(', ')}`,
		});
	}

}

