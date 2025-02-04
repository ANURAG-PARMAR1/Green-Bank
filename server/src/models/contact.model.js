import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    username: {
      type: String,
      unique: true,
      trim: true,
    },
    phone: {
      type: Number,
      unique: true,
      require: true,
    },
    accountNumber: {
      type: Number,
      unique: true,
      require: true,
    },
    imageUrl: {
      type: String,
      unique: true,
      trim: true,
    },
    noOfTransaction: {
      type: Number,
      unique: true,
      require: true,
    },
    transaction: {
        type: Array,
        default: [],
    }
  },
  { timestamps: true }
);

export const Contact = mongoose.model('Contact', contactSchema);