import { object, string } from 'yup';
import { email, name, phone } from './auth.schema.js';

const role = string().oneOf(['admin'], 'User role must be admin').required();

const createNewUserSchema = object({
  name: name.required(),
  email: email.required(),
  phone: phone.required(),
  role: role.required(),
  account_type: string().oneOf(['admin', 'account_type must be admin']),
});

const updateUserByIdSchema = object({
  name: name.required(),
  phone: phone.required(),
  role: role.required(),
});

export { createNewUserSchema, updateUserByIdSchema };
