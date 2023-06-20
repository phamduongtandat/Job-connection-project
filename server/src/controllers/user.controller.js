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
  const body = req.body;

  if (body.role === 'admin') {
    body.account_type = 'admin';
  }

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

const updateUserStatus = async (req, res) => {
  const { status } = req.body;
  const id = req.params.id;
  const user = await User.findById(id);

  if (!user)
    return res.status(404).json({
      status: 'fail',
      message: 'Can not find user with provided id',
    });

  if (user.role === 'admin' && status === 'blocked')
    return res.status(403).json({
      status: 'fail',
      message: 'You can not block admin user',
    });

  await User.findByIdAndUpdate(id, { status });

  res.status(200).json({
    status: 'success',
    message: 'The user has been blocked',
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
  const {
    fields,
    page,
    pageSize,
    skip = 0,
    limit = 10,
    sort,
    filter = {},
  } = req.query;
  const matchingResults = await User.countDocuments(filter);
  const totalPages = Math.ceil(matchingResults / limit);

  const users = await User.find(filter)
    .skip(skip)
    .limit(limit)
    .select(fields)
    .sort(sort);

  res.status(200).json({
    status: 'success',
    pagination: {
      matchingResults,
      returnedResults: users.length,
      totalPages,
      currentPage: page,
      pageSize: limit,
    },
    data: users,
  });
};

const userController = {
  getUsers,
  createNewUser,
  getUserById,
  updateUser,
  updateUserStatus,
};

export default userController;
