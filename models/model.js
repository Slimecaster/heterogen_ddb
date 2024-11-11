const mongoose =require ('mongoose')

const passuserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})


const accountSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true }
})


module.exports = mongoose.model('User', passuserSchema)
module.exports = mongoose.model('Account', accountSchema)
