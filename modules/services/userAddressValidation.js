console.log('userAddressValidation')
const Joi = require('joi');
// const repo = require('../models/users.js')

exports.userAddressValidation = async (req, res, next) => {
	// console.log(req);
	// console.log(req.body);
	// console.log(req.params);
	const schema = Joi.object({
	    address: Joi.string()
	        // .alphanum()
	        // .min(3)
	        .max(255)
	        .messages({ "string.max": '"address" must max to 255 chars long' })
	        .required(),
	    country: Joi.string()
	        // .alphanum()
	        // .min(3)
	        .max(255)
	        .messages({ "string.max": '"country" must max to 255 chars long' })
	        .required(),
	    state: Joi.string()
	        // .alphanum()
	        // .min(3)
	        .max(255)
	        .messages({ "string.max": '"state" must max to 255 chars long' })
	        .required(),
	    city: Joi.string()
	        // .alphanum()
	        // .min(3)
	        .max(255)
	        .messages({ "string.max": '"address" must max to 255 chars long' })
	        .required(),
	    zip: Joi.number()
	    	.integer()
	    	.required(),
	    // userId: Joi.number()
	    // 	.integer()
	    // 	.required(),
	    // zip: Joi.string()
	    //     .alphanum()
	    //     // .min(3)
	    //     // .max(255)
	    //     // .messages({ "string.max": '"zip" must max to 255 chars long' })
	    //     .required(),
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
	    // const value1 = await schema.validateAsync(req.body);
	    // const value2 = await schema.validateAsync(req.params);
	    // const value = await schema.validateAsync({});
	    // const value = await schema.validateAsync(req);
	    const value = await schema.validateAsync(req.body);
		next();
	}
	catch (error) {
		// console.error(error)
		// console.error(error.details)
		// console.error(`register Validation error: ${error.details.map(x => x.path).join(', ')}`)
		return res.status(200).json({
			status: 'address Validation Fail',
			// message: error
			// message: `Validation error: ${error.details.map(x => x.message).join(', ')}`,
			message: error.details.map(x => x.message).join(', '),
			path: error.details.map(x => x.path).join(', '),
			// path: `register Validation error: ${error.details.map(x => x.path).join(', ')}`,
		});
	}

}

