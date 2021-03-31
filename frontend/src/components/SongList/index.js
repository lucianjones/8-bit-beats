import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SongList.css';

import { getSongs } from '../../store/songs';

const SongList = () => {
    const dispatch = useDispatch();

    const songs = useSelector(state => {
        if (!state.songs) return null;
        return state.songs.songs;
    });

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch]);

    return (
        <div className='song-div'>
            {songs.map((song) => (
                <NavLink exact to={`/songs/${song.id}`} key={song.id} className='song-list cont'>
                 {song.name} - {song.Album.name} - {song.Artist.name}
             </NavLink>
         ))}
        </div>
    )
}

export default SongList;
