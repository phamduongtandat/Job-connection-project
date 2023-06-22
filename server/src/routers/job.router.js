import express from 'express';
import requireLogin from '../middleware/requireLogin.js';
import jobController from './../controllers/job.controller.js';
const jobRouter = express.Router();


jobRouter.get('/applied-by/:userID', jobController.getAppliedJobsByUserId)

export default jobRouter