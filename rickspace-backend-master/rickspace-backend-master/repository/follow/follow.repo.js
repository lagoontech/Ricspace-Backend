const logger = require('../../utils/logger');
const prisma = require('../../utils/prisma-client');

const followRepo = async (req) => {
  try {
    const { authorId, postId, followerId } = req.query;

    let getUserId;
    if (!followerId) {
      getUserId = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });
    }

    let dbResponse;

    if (typeof getUserId == 'object' && !Array.isArray(getUserId)) {
      const { authorId: followerId } = getUserId;
      dbResponse = await prisma.followers.create({
        data: {
          authorId: authorId,
          followerId: followerId,
        },
      });
    } else {
      dbResponse = await prisma.followers.create({
        data: {
          authorId: authorId,
          followerId: followerId,
        },
      });
    }

    return dbResponse;
  } catch (error) {
    throw new Error(`error from get-post-service ${error.message}`);
  }
};

module.exports = followRepo;
