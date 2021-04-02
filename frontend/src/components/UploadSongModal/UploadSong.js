import React, { useState } from 'react';
import { addOneSong } from '../../store/songs';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UploadSong.css';

const UploadSong = ({ setShowModal }) => {
    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [newFile, setNewFile] = useState(null);
    const [errors, setErrors] = useState([]);
    const [load, setLoad] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(addOneSong({ name, artist, album, newFile }))
            .then(() =>{
                setName('');
                setArtist('');
                setAlbum('');
                setNewFile(null);
                setLoad(false);
                history.push('/');
                setShowModal(false);
            })
            .catch(async (res) => {
                const data = await res.json();
                console.log(data)
                if (data && data.title) {
                    setErrors(['Invalid Form Data']);
                };
            })
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setNewFile(file);
    };
    
 
    return (
        <>
            { load && <div className='load-screen'>Loading...</div>}
        <form className='upload-form' onSubmit={handleSubmit}>
            <ul>
                {errors}
            </ul>
                <input
                    type="text"
                    className='upload-input inpt'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text"
                    className='upload-input inpt'
                    placeholder='Artist'
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <input
                    type="text"
                    className='upload-input inpt'
                    placeholder='Album'
                    value={album}
                    onChange={(e) => setAlbum(e.target.value)}
                />
            <label id='upload-label' className='btn green'>
                Browse
                <input className='upload-file' type='file' onChange={updateFile} />
            </label>
            <button onClick={() => setLoad(true)} className='upload-btn btn blue' type="submit">Upload Song</button>
        </form>
        </>
    )
}

export default UploadSong;
