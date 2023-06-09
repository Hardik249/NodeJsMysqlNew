console.log('orderDetailsValidation')
const Joi = require('joi');
// const repo = require('../models/users.js')

exports.orderDetailsValidation = async (req, res, next) => {
	// console.log(req);
	// console.log(req.body);
	// console.log(req.params);
	const schema = Joi.object({
	    quantity: Joi.array()
	    	.required(),
	    price: Joi.array()
	    	.required(),
	    totalPrice: Joi.number(),
	    	// .required(),
	    totalAmount: Joi.number(),
	    	// .integer()
	    	// .required(),
	    // productId: Joi.number()
	    // 	.integer()
	    // 	.required(),
	    // userId: Joi.number()
	    // 	.integer()
	    // 	.required(),
	    productId: Joi.array()
	    	// .integer()
	    	.required(),
	    orderId: Joi.number()
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
			status: 'orderDetails Validation Fail',
			// message: error
			// message: `Validation error: ${error.details.map(x => x.message).join(', ')}`,
			message: error.details.map(x => x.message).join(', '),
			path: error.details.map(x => x.path).join(', '),
			// path: `register Validation error: ${error.details.map(x => x.path).join(', ')}`,
		});
	}

}

