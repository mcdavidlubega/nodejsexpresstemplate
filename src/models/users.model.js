import mongoose from "mongose";

const userSchema = new mongoose.Schema({
    userName: { type: String, minLength: 5, maxLength: 50, lowercase: true },
    email: { type: String, unique: true },
    password: { type: String, minLength: 6, maxLength: 50 },
    role: { type: String, default: "user", enum: ["admin", "user"] },
});

export default mongoose.model("User", userSchema);
