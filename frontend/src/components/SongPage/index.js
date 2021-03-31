import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getOneSong } from '../../store/songs';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './SongPage.css'
import play from './play.svg'

const SongPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams()

    const { song } = useSelector(state => {
        if(!state.songs.song) return {};
        console.log(state.songs.song)
        return state.songs.song
    })

    useEffect(() => {
        dispatch(getOneSong(id))
    }, [dispatch, id]);

    const Player = () => (
        <AudioPlayer
          src={song?.url}
          onPlay={e => console.log("onPlay")}
          customIcons= {
             { play: play}
          }
        />
    );

    return (
        <div className="song-page">
            <h2 className='song-title'>~ {song?.name} ~</h2>
            <div className='song-artist'>** {song?.Artist.name} **</div>
            <div className='song-album'>- {song?.Album.name} -</div>     
            <Player />
        </div>
    )
}

export default SongPage;