const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

// static routes
// serve react build files in production
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // serve the frontend's index.html file at the root route
    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}

// add a xsrf token in development
if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.json({});
    });
}

module.exports = router;
