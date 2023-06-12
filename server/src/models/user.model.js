import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    account_type: {
      type: String,
      enum: ['personal', 'business'],
      default: 'personal',
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'blocked'],
    },
    phone: {
      type: String,
    },
    fields: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'field',
    },
    address: {
      type: String,
    },
    overview: {
      type: String,
    },
    passwordChangedAt: Date,
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
        if (ret.role === 'user') delete ret.role;
        delete ret.password;
      },
    },
    timestamps: true,
  },
);

const User = mongoose.model('user', schema);

export { User };
