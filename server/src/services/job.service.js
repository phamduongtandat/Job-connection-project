import mongoose from 'mongoose';
import { Job } from '../models/job.model.js';

const getAppliedJobsByUserId = async (userID) => {
  const result = await Job.find({
    'candidateList.user': new mongoose.Types.ObjectId(userID),
  });

  if (!result) {
    return {
      code: 200,
      status: 'success',
      message: `Sorry!! No job applied by ${userID}`,
    };
  }

  return {
    code: 200,
    status: 'success',
    pagination: {
      returnedResults: result.length,
    },
    data: result,
  };
};

const jobService = { getAppliedJobsByUserId };

export default jobService;
