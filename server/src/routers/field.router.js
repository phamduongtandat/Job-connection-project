import express from 'express';
import fieldController from '../controllers/field.controller.js';
import requireLogin from '../middleware/requireLogin.js';
import requireRole from '../middleware/requireRole.js';
import validateReqBody from '../middleware/validateReqBody.js';
import fieldSchema from '../validation/field.schema.js';
const fieldRouter = express.Router();


fieldRouter.get('/', fieldController.getFields);

// admin only router
fieldRouter.use(requireLogin());
fieldRouter.use(requireRole('admin'));



fieldRouter.post(
    '/',
    validateReqBody(fieldSchema),
    fieldController.createField,
);

fieldRouter.put(
    '/:id',
    validateReqBody(fieldSchema),
    fieldController.updateField,
);



export default fieldRouter;