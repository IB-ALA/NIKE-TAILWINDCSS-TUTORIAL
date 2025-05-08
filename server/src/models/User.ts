import { Document, model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  verificationToken?: string;
  isVerified: boolean;
  resetPasswordToken?: string;
  resetPasswordTokenExpiry?: Date;
}

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, "Please provide name"],
    unique: false,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: String,
  resetPasswordTokenExpiry: Date,
});

// hash passwword before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default model<User>("User", userSchema);
