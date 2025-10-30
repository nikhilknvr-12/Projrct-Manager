import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImageUrl: { type: String, default: 'https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg' },
  roles: { type: String, enum:['admin','user'], default: ['user'] },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;