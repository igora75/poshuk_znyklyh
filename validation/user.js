import Joi from "joi";

const schema = Joi.object({
	name: Joi.string()
		.min(2)
		.max(255)
		.required(),
	surname: Joi.string()
		.min(2)
		.max(255)
		.required(),
	midname: Joi.string()
		.min(2)
		.max(255),
	city: Joi.string()
		.min(2)
		.max(30)
		.required(),
	region: Joi.string()
		.min(2)
		.max(255),
	birth_year: Joi.number()
		.integer()
		.min(2)
		.max(4),
	description: Joi.string()
		.min(2)
		.max(255),
	add_time: Joi.string()
		.min(2)
		.max(255)
		.required(),
	picture: Joi.string()
		.min(2)
		.max(255)
		.required()
})

export default schema