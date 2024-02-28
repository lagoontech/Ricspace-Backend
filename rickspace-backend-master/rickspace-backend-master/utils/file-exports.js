const signUpApi = require('../routes/signup/signup.route');
const loginApi = require('../routes/login/login.route');
const otpRoute = require('../routes/otp/otp.route');
const postRoute = require('../routes/file-upload/file-upload.route');
const getAllPostRoute = require('../routes/get-posts/get-all-posts');
const restPasswordRoute = require('../routes/reset-password/reset-password.route');
const followRoute = require('../routes/follow/follow.route');
const unFollowRoute = require('../routes/un-follow/un-follow.route');
const likeRoute = require('../routes/like/like.route');
const disLikeRoute = require('../routes/dis-like/dis-like.route');
const commentsRoute = require('../routes/comments/comments.route');
const allUsersRoute = require('../routes/all-users/all-users.route');
const savePostRoute = require('../routes/save-post/save-post-route');

module.exports = {
  signUpApi,
  loginApi,
  otpRoute,
  postRoute,
  getAllPostRoute,
  restPasswordRoute,
  followRoute,
  unFollowRoute,
  likeRoute,
  disLikeRoute,
  commentsRoute,
  allUsersRoute,
  savePostRoute,
};
