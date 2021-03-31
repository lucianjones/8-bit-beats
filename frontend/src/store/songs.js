import { csrfFetch } from './csrf';

const LOAD = 'songs/getSongs';
const GET_ONE = 'songs/getOneSong';
const ADD_SONG = 'songs/addSong';

const load = songs => ({
    type: LOAD,
    songs
});

const getOne = song => ({
    type: GET_ONE,
    song
})

const addSong = song => ({
    type: ADD_SONG,
    payload: song
})

export const getSongs = () => async dispatch => {
    const response = await csrfFetch('/api/songs');

    if (response.ok) {
        const { songs } = await response.json();
        dispatch(load(songs));
    }
};

export const getOneSong = (id) => async dispatch => {
    const response = await csrfFetch(`/api/songs/${id}`);

    if (response.ok) {
        const song = await response.json();
        dispatch(getOne(song));
    }
}

export const addOneSong = (song) => async dispatch => {
    const { name, artist, album, newFile } = song;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('artist', artist);
    formData.append('album', album);
    formData.append('newFile', newFile);

    const response = await csrfFetch('/api/songs/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    });

    const data = await response.json();
    dispatch(addSong(data.song))
}

const initialState = { songs: [] };


const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            return {
                ...state,
                songs: action.songs,
            }
        }
        case GET_ONE:{
            return { 
                ...state,
                song: action.song,  
            }
        }
        case ADD_SONG: {
            return {
                ...state,
                song: action.payload
            }
        }
        
        default:
            return state;
    }
    
}

export default songReducer;
