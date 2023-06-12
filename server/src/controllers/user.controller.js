import { sendNewUserCredentials } from '../emails/index.js';
import { User } from '../models/user.model.js';
import randomString from '../utils/randomString.js';
import { hashPassword } from './auth.controller.js';

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: 'Can not find user with provided id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: user,
  });
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: 'Can not find user with provided id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: user,
  });
};

const createNewUser = async (req, res) => {
  const { name, email, phone, role } = req.body;

  const randomPassword = randomString(48);
  const hashedPassword = await hashPassword(randomPassword);

  const user = await User.create({
    name,
    email,
    phone,
    role,
    password: hashedPassword,
  });

  sendNewUserCredentials({
    email,
    password: randomPassword,
    name,
  });

  res.status(201).json({
    status: 'success',
    message:
      'The account has been created. An email with credentials has been sent to user mailbox',
    data: user,
  });
};

const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    pagination: {
      returnedResults: users.length,
    },
    data: users,
  });
};

const userController = { getUsers, createNewUser, getUserById, updateUser };

export default userController;
