import { object, string } from 'yup';
import { email, name, phone } from './auth.schema.js';

const role = string()
  .oneOf(['admin', 'user'], 'User role must be admin')
  .required();

const createNewUserSchema = object({
  name: name.required(),
  email: email.required(),
  phone: phone.required(),
  role: role.required(),
});

const updateUserByIdSchema = object({
  name: name.required(),
  phone: phone.required(),
  role: role.required(),
});

export { createNewUserSchema, updateUserByIdSchema };
