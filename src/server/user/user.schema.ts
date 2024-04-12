import { Schema } from 'mongoose';

export const userSchema = new Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});
