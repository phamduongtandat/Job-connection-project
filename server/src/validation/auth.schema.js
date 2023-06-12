import { array, object, ref, string } from 'yup';

// ============ schema properties

export const email = string().email().max(100).required();
export const phone = string().matches(
  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
  'Please provide valid phone number',
);

const name = string().max(100);
const address = string().max(200);
const fields = array().of(string().length(24).required());
const overview = string().max(1000);
const account_type = string().oneOf(['personal', 'business']).required();

const password = string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%#*?&]{8,}$/,
    'password should contain at least 1 uppercase, 1 lowercase, 1 number & 1 special character (@$!%*?&)  ',
  )
  .min(8, 'password need to be at least 8 character')
  .max(100)
  .required();

// ============= schemas
const registerUserSchema = object({
  email,
  password,
  confirmPassword: string()
    .oneOf([ref('password')], 'password are not the same')
    .label('confirm password'),
  account_type,
});

const signInSchema = object({
  email,
  password,
});

const updateCurrentUserSchema = object({
  name,
  phone,
  address,
  fields,
  overview,
});

const updatePasswordSchema = object({
  oldPassword: password,
  newPassword: password,
  newPasswordConfirm: string()
    .oneOf([ref('newPassword')], 'new password confirm is not correct')
    .required(),
});

const createResetPasswordTokenSchema = object({
  email,
});

const resetPasswordWithTokenSchema = object({
  newPassword: password.label('new password'),
  confirmPassword: string()
    .oneOf([ref('newPassword')], 'password are not the same')
    .required(),
});

export {
  registerUserSchema,
  updateCurrentUserSchema,
  updatePasswordSchema,
  signInSchema,
  createResetPasswordTokenSchema,
  resetPasswordWithTokenSchema,
};
