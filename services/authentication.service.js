const MongoDB = require("./mongodb.service")
const mongoConfig = require("../config")

const userRegister = async (user) => {
    try {
        let userObject = {
            username: user?.username,
            email: user?.email,
            password: user?.password
        };
        let savedUser = await MongoDB.db
            .collection(mongoConfig.collections.USERS)
            .insertOne(userObject);
        console.log(savedUser)
    } catch (error) {
        console.log(error)

    }
}

module.exports = { userRegister }