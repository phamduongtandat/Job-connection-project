import express from 'express';
import searchController from '../controllers/search.controller.js';
import requireLogin from '../middleware/requireLogin.js';
import requireRole from '../middleware/requireRole.js';
const searchRouter = express.Router();

searchRouter.use(requireLogin());

searchRouter.get('/fields', requireRole('admin'), searchController.searchFields)
searchRouter.get('/jobs', searchController.searchJobs)

export default searchRouter;