import { Job } from "../models/job.model.js";

const getJobList = async (req, res) => {
  const jobs = await Job.find();
  res.status(200).json({
    status: "success",
    data: jobs,
  });
};
const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (job) {
    res.json(job);
  } else {
    return res.status(404).json({
      status: "fail",
      message: "Job not Found",
    });
  }
};
const removeJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (job) {
    job.status = "removed";
    await job.save();
    res.status(201).json({
      status: "success",
      messeage: "Job removed !",
    });
  } else {
    return res.status(404).json({
      status: "fail",
      message: "Job not Found",
    });
  }
};
const adminController = {
  getJobList,
  getJobById,
  removeJobById,
};

export default adminController;
