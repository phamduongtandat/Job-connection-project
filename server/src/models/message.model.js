import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
  },
  content: {
    type: String,
    required: true,
  },
  isLastMessage: {
    type: Boolean,
    default: true,
  },
  messageType: {
    type: String,
    enum: ['support', 'business'],
    required: true,
  },
});

messageSchema.index({
  createdAt: -1,
});

const Message = mongoose.model('message', messageSchema);

export { Message };
