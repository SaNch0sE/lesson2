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
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function find(req, res, next) {
    try {
        const users = await UserService.find(req.query);

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function create(req, res, next) {
    try {
        const user = await UserService.create(req.query);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function update(req, res, next) {
    try {
        const user = await UserService.update(req.query);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
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
    update,
    remove,
    find
}