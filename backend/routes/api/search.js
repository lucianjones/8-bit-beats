const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const Fuse = require('fuse.js');


const router = express.Router();


router.get('/', asyncHandler(async function (req, res) {
    const { name } = req.query
    const songs = await db.Song.findAll({ include: [db.Artist, db.Album] });
    const options = {
        includeScore: true,
        // equivalent to `keys: [['author', 'tags', 'value']]`
        keys: ['name', 'Album.name', 'Artist.name']
    }

    const fuse = new Fuse(songs, options)
    const result = fuse.search(name)
    console.log(result)

    res.json({ songs: [result] });
}))

module.exports = router;
