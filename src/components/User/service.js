const UserModel = require('./model');

module.exports = {
    /**
     * @exports
     * @method findAll
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    async findAll() {
        return await UserModel.find({});
    },
    /**
     * @exports
     * @method create
     * @param {req}
     * @summary create new user
     * @returns Promise<UserModel[]>
     */
    async create(req) {
        return await UserModel.create({email: req.email, password: req.password});
    },
    /**
     * @exports
     * @method remove
     * @param {req}
     * @summary create new user
     * @returns Promise<UserModel[]>
     */
    async remove(req) {
        return await UserModel.findOneAndRemove({email: req.email});
    }
};
