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
        return UserModel.find({});
    },
    /**
     * @exports
     * @method find
     * @param {req}
     * @summary get one user
     * @returns Promise<UserModel[]>
     */
    async find(req) {
        const data = v.val({email: req.email});
        if(!data.error) {return UserModel.find(data.value);} else {
            throw data.error;
        }
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
        if(!data.error) {return UserModel.create(data.value);} else {
            throw data.error;
        }
    },
    /**
     * @exports
     * @method update
     * @param {req}
     * @summary update user info
     * @returns Promise<UserModel[]>
     */
    async update(req) {
        const data = v.val({email: req.email, fullName: req.fullName});
        if(!data.error) {return UserModel.updateOne({email: data.value.email}, {fullName: data.value.fullName});} else {
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
        const data = v.val({email: req.email});
        if(!data.error) {return UserModel.deleteOne(data.value);}
        else {
            throw data.error;
        }
        // return await UserModel.remove({});
    }
};
