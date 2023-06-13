import mongoose from "mongoose";
const candidateSchema = new mongoose.Schema({
  no: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  submissionDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["sent", "confirmed", "rejected"],
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
});
const recruitmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    deadlineDate: {
      type: Date,
      required: true,
    },
    field: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "field",
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    workLocation: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    numberApplicants: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    status: {
      type: String,
      enum: ["opened", "closed", "outofdate", "addtional", "removed"],
      required: true,
    },
    candidateList: {
      type: [candidateSchema],
    },
  },
  {
    timestamps: true,
  }
);
const Recruitment = mongoose.model("recruitment", recruitmentSchema);

export { Recruitment };
