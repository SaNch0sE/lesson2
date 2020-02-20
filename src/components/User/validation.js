const Joi = require('@hapi/joi');

const schema = Joi.object({
    fullName: Joi.string()
        .pattern(/^[a-zA-Z]+\s+[a-zA-Z]+$/)
        .min(3)
        .max(30),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
}).or('email', 'fullName');

function val(req) {
    try {
        const data = schema.validate(req);
        return data;
    } catch (err) { return console.error(err); }
}

module.exports = { val };
