import React, { useState, useEffect, useRef } from 'react';
import { csrfFetch } from '../../store/csrf';


export default function SearchBar () {
    const [query, setQuery] = useState('');
    const [songs, setSongs] = useState([]);
    const focusSearch = useRef(null);

    useEffect(() => {focusSearch.current.focus()}, []);

    const getSongs = async (query) => {
        const results = await csrfFetch(`api/search?name=${query}`);
        const songsData = await results.json();
        return songsData;
    }

    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        let currentQuery = true;
        const controller = new AbortController();

        const loadSongs = async () => {
            if (!query) return setSongs([]);

            await sleep(350);
            if (currentQuery) {
                const { songs } = await getSongs(query, controller);
                setSongs(songs);
            }
        }
        loadSongs();
        
        return () => {
            currentQuery = false;
            controller.abort();
        }
    }, [query])

    const [showSearch, setShowSearch] = useState(true);

    const closeSearch = () => {
        if (!showSearch) return;
        setShowSearch(false)
    }
   
    // useEffect(() =>{
    //     if (!showSearch) return;

    //     const closeSearch = () => {
    //         setShowSearch(false)
    //     }
    //     document.addEventListener('click', closeSearch)
        
    //     return () => document.removeEventListener("click", closeSearch);
    // }, [showSearch]);

    // need to work on closing search!!
    return (
       <div id="search-div">
            <input 
                id="search-bar"
                value={query}
                placeholder={"Search for a song..."}
                ref={focusSearch}
                onChange={(e) => setQuery(e.target.value)}
                className="nes-input"
            />
            <button onClick={closeSearch} id='search-button'>x</button>
            {showSearch && (
            <ul id="search-results">
                {songs.map((song, index) => {
                    return (
                        <li key={index} className="nes-container is-rounded" >{song.name}</li>
                    )})}
            </ul>
            )}
        </div>
    );
}

