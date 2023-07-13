import jobService from "../services/job.service.js"
import { Job } from "../models/job.model.js";
const getAppliedJobsByUserId = async (req, res) => {
  const { userID } = req.params

  const {
    page,
    pageSize,
    skip = 0,
    limit = 10,
  } = req.query;

  const { code, ...data } = await jobService.getAppliedJobsByUserId(userID, page, pageSize, skip, limit)

  res.status(code).json(data);

}






const getJobList = async (req, res) => {
  const {
    page,
    pageSize,
    skip = 0,
    limit = 10,
    filter = {},
  } = req.query;

  const matchingResults = await Job.countDocuments(filter);
  const totalPages = Math.ceil(matchingResults / limit);

  const jobs = await Job.find(filter).skip(skip)
    .limit(limit).select("-status -candidateList ");
  res.status(200).json({
    status: 'success',
    pagination: {
      matchingResults,
      totalPages,
      currentPage: page,
      pageSize: limit,
      returnedResults: jobs.length,
    },
    data: jobs,
  });
};



const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id).select(
    "-status -postedBy -candidateList "
  );
  if (job) {
    res.json(job);
  } else {
    res.status(404);
    throw new Error("Job Not Found");
  }
};
const createNewJob = async (req, res) => {
  const job = await Job.create({
    ...req.body,
    postedBy: req.user._id,
    status: "opened",
  });
  res.status(201).json({
    status: "success",
    message: "Your job has been created.",
    data: req.body,
  });
  //ERROR
};
const updateCurrentJob = async (req, res) => {
  //Kiem tra postedBy === current user id
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select("-status -postedBy");
  if (job) {
    return res.status(200).json({
      status: "success",
      message: "Your job has been updated",
      data: job,
    });
  } else {
    //ERROR
  }
};

const applyJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  //Truong hop da apply job!!!
  if (job) {
    job.candidateList.push({
      ...req.body,
      status: "awaiting",
      name: req.user.name,
      user: req.user._id,
    });
    await job.save();
    res.status(201).json({
      status: "success",
      message: "Your CV has been applied",
    });
  } else {
    res.status(404);
    throw new Error("Job Not Found");
  }
};
const getCandidateList = async (req, res) => {
  const job = await Job.findById(req.params.id).select("-status -postedBy");
  if (job) {
    if (job.candidateList.length > 0) {
      res.status(201).json({
        status: "success",
        data: job.candidateList,
      });
    } else {
      res.status(201).json({
        status: "success",
        message: "No candidate has applied yet",
      });
    }
  } else {
    res.status(404);
    throw new Error("Job Not Found");
  }
};
const handleApplication = async (req, res) => {
  const job = await Job.findById(req.params.id).select("-status -postedBy");
  const indexOfCandidate = job.candidateList.findIndex(
    (e) => e._id.toString() === req.params.index
  );
  job.candidateList[indexOfCandidate].status = req.body.status;
  await job.save();
  res.status(201).json({
    status: "success",
  });
};
const getJobWithFilter = async (req, res) => {
  const { title, position, field, sort } = req.query;

  try {
    const searchConditions = {};

    // Add conditions for each field if they exist in the query parameters
    //LOOP for query
    if (title) {
      searchConditions.title = { $regex: title, $options: "i" };
    }
    if (position) {
      searchConditions.position = { $regex: position, $options: "i" };
    }
    if (field) {
      searchConditions.field = { $regex: field, $options: "i" };
    }
    if (sort) {
      if (sort === "new") {
        const results = await Job.find(searchConditions)
          .select("-status -postedBy -candidateList ")
          .sort({ createdAt: -1 });
        return res.json(results);
      } else if (sort === "most-expired") {
        const results = await Job.find(searchConditions)
          .select("-status -postedBy -candidateList ")
          .sort({ deadlineDate: -1 });
        return res.json(results);
      }
    } else {
      const results = await Job.find(searchConditions).select(
        "-status -postedBy -candidateList "
      );
      res.json(results);
    }
    // Query the database using the search conditions
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
const jobController = {
  getJobList,
  createNewJob,
  updateCurrentJob,
  getJobById,
  applyJobById,
  getCandidateList,
  handleApplication,
  getJobWithFilter,
  getAppliedJobsByUserId
};
export default jobController;
