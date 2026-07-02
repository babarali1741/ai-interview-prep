const mongoose = require('mongoose')


const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [ true, "token is required to be added in blacklist" ]
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 1 din baad mongodb khud is document ko delete kar dega (TTL index) — token bhi 1 din mein expire hota hai isliye
    }
}, {
    timestamps: true
})

const tokenBlacklistModel = mongoose.model("blacklistTokens", blacklistTokenSchema)


module.exports = tokenBlacklistModel