import express from 'express';
import requireLogin from '../middleware/requireLogin.js';
import jobController from '../controllers/job.controller.js';
import validateReqBody from "../middleware/validateReqBody.js";
import { createJobSchema, updateJobSchema } from "../validation/job.schema.js";
import requireTypeAccount from "../middleware/requireTypeAccount.js";
import parseReqQuery from './../middleware/parseReqQuery.js'
import checkUserID from './../middleware/checkUserID.js';
import {
  candidateSchema,
  statusOfApplication,
} from "../validation/candidate.schema.js";


const jobRouter = express.Router();
jobRouter.get('/applied-by/:userID', requireLogin(), parseReqQuery(), jobController.getAppliedJobsByUserId)
//get all job
jobRouter.get("/", parseReqQuery(), jobController.getJobList);
//get job with search filter
jobRouter.get("/search", jobController.getJobWithFilter);
//get job by id
jobRouter.get("/:id", checkUserID(), jobController.getJobById);
//get candidateList of current job(only for bussiness acount)
jobRouter.get(
  "/:id/candidate-list",
  requireLogin(),
  requireTypeAccount("business"),
  jobController.getCandidateList
);
//create new job
jobRouter.post(
  "/",
  requireLogin(),
  requireTypeAccount("business"),
  validateReqBody(createJobSchema),
  jobController.createNewJob
);
//apply job for personal
jobRouter.post(
  "/:id/applied",
  requireLogin(),
  requireTypeAccount("personal"),
  validateReqBody(candidateSchema),
  jobController.applyJobById
);
//update job by id
jobRouter.put(
  "/:id",
  requireLogin(),
  requireTypeAccount("business"),
  validateReqBody(updateJobSchema),
  jobController.updateCurrentJob
);
//Aprrove or Refuse Application
jobRouter.put(
  "/:id/candidate-list/:index",
  requireLogin(),
  requireTypeAccount("business"),
  validateReqBody(statusOfApplication),
  jobController.handleApplication
);

export default jobRouter;
