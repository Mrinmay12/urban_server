import mongoose from "mongoose";
const Schema = mongoose.Schema
const userSchema = new Schema({
 
    email: {
        type: String
    },
    password: { type: String },
    user_id:{type:String},
    username:{type:String},
     otp:{type:String},


}, {
    timestamps: true
})

const User = mongoose.model("users_details", userSchema)
export default User
