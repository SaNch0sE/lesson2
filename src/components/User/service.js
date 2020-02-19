const UserModel = require('./model');
const v = require('./validation.js')
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
        const data = v.val({email: req.email, fullName: req.fullName});
        if(!data.error) {return await UserModel.create(data.value);} else {
            throw data.error;
        }
    },
    /**
     * @exports
     * @method remove
     * @param {req}
     * @summary create new user
     * @returns Promise<UserModel[]>
     */
    async remove(req) {
        const data = v.val({email: req.email, fullName: req.fullName});
        if(!data.error) {return UserModel.findOneAndRemove(data.value);}
        else {throw data.error;}
        //return await UserModel.remove({});
    }
};
