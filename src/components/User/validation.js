const Joi = require('@hapi/joi');

const schema = Joi.object({
    fullName: Joi.string()
        .pattern(/^[a-zA-Z]+\s+[a-zA-Z]+$/)
        .min(3)
        .max(30)
        .required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
}).with('email', 'fullName');

function val(req) {
    try {
        const data = schema.validate(req);
        return data;
    }
    catch (err) {console.error(err);}
}

module.exports = {val}