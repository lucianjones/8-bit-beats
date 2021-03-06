const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const searchRouter = require('./search.js');
const songsRouter = require('./songs.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/search', searchRouter);
router.use('/songs', songsRouter);

module.exports = router;


// ----------------------------------------  tests ------------------------------------------
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         }
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));
//
// router.get('/restore-user', restoreUser, (req, res) => res.json(req.user));
//
// router.get('/require-auth', requireAuth, (req, res) => res.json(req.user));
// router.post('/test', function (req, res) {
//     res.json({ requestBody: req.body });
// });
