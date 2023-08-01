const Joi = require('joi');

exports.reviewsValidation = async (req, res, next) => {
	const schema = Joi.object({
	    // productId: Joi.array()
	    // 	// .integer()
	    // 	.required(),
	    // userId: Joi.number()
	    // 	.integer()
	    // 	.required(),
	    review: Joi.string()
	        // .alphanum()
	        // .min(3)
	        .max(255)
	        .messages({ "string.max": '"review" must max to 255 chars long' })
	        .required(),
	    status: Joi.string()
	        // .alphanum()
	        // .min(3)
	        .max(255)
	        .messages({ "string.max": '"status" must max to 255 chars long' })
	        .required(),
	    // image: Joi.string()
	    //     .alphanum()
	    //     // .min(3)
	    //     .max(255)
	    //     .messages({ "string.max": '"image" must max to 255 chars long' })
	    //     .required(),
	})
// _parsedOriginalUrl
	// schema.validate(req.body);
// console.log(req.files);
	// schema.validate({});
// console.log(await schema.validateAsync(req.body));
	try {
	    // const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
	    const value = await schema.validateAsync(req.body);
		next();
	    // const value = await schema.validateAsync({req.body});
	}
	catch (error) {
		// console.error(error)
		// console.error('eo', error._original)
		// console.error(error.details)
		// console.error(`register Validation error: ${error.details.map(x => x.path).join(', ')}`)
		return res.status(200).json({
			status: 'reviews Validation Fail',
			// message: error
			// message: `Validation error: ${error.details.map(x => x.message).join(', ')}`,
			message: error.details.map(x => x.message).join(', '),
			path: error.details.map(x => x.path).join(', '),
			// path: `register Validation error: ${error.details.map(x => x.path).join(', ')}`,
		});
	}

}



exports.reviewStatusValidation = async (req, res, next) => {
	const schema = Joi.object({
	    status: Joi.string()
	        // .alphanum()
	        // .min(3)
	        .max(255)
	        .messages({ "string.max": '"status" must max to 255 chars long' })
	        .required(),
	})

	schema.validate(req.body);

	schema.validate({});

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
			status: 'reviews Validation Fail',
			// message: error
			// message: `Validation error: ${error.details.map(x => x.message).join(', ')}`,
			message: error.details.map(x => x.message).join(', '),
			path: error.details.map(x => x.path).join(', '),
			// path: `register Validation error: ${error.details.map(x => x.path).join(', ')}`,
		});
	}

}
