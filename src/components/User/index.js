const UserService = require('./service');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
    try {
        const users = await UserService.findAll();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

async function create(req, res, next) {
    try {
        const user = await UserService.create(req.query);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

async function remove(req, res, next) {
    try {
        const user = await UserService.remove(req.query);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAll,
    create,
    remove
}