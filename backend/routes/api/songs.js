const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { requireAuth } = require('../../utils/auth')
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')


const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const songs = await db.Song.findAll({ include: [db.Artist, db.Album] });
    res.json({ songs });
}));

router.get('/:id', asyncHandler(async function (req, res) {
    const { id } = req.params;
    const song = await db.Song.findByPk(id, {  include: [db.Artist, db.Album] });
    console.log(song);
    res.json({ song });
}))

router.post('/upload', requireAuth, singleMulterUpload('newFile'), asyncHandler(async (req, res) => {
    const { name, artist, album } = req.body;
    console.log(req.file)
    const artistId = await db.Artist.findOrCreate({raw: true, where: { name: artist}})
    const albumId = await db.Album.findOrCreate({where: { name: album}, defaults: {artistId: artistId[0].id}})
    const url = await singlePublicFileUpload(req.file);

    const newSong = await db.Song.create({
        name,
        artistId: artistId[0].id,
        albumId: albumId[0].id,
        url
    })
    return res.json({ newSong })
}))

module.exports = router;
