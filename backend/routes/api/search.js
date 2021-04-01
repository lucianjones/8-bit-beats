const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const Fuse = require('fuse.js');


const router = express.Router();


router.get('/', asyncHandler(async function (req, res) {
    const { name } = req.query
    const songs = await db.Song.findAll({ include: [db.Artist, db.Album] });
    const options = {
        limit: 8,
        threshold: .4,
        includeScore: true,
        keys: [{ name: 'name', weight: 2 }, 'Album.name', 'Artist.name']
    }

    const fuse = new Fuse(songs, options)
    const result = fuse.search(name)
    console.log(result)

    res.json({ songs: [result] });
}))

module.exports = router;
