import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { csrfFetch } from '../../store/csrf';
import './SearchBar.css'


export default function SearchBar () {
    const [query, setQuery] = useState('');
    const [songs, setSongs] = useState([]);
    const focusSearch = useRef(null);

    useEffect(() => {focusSearch.current.focus()}, []);

    const getSongs = async (query) => {
        const results = await csrfFetch(`/api/search?name=${query}`);
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
                setSongs(songs[0]);
            }
        }
        loadSongs();
        
        return () => {
            currentQuery = false;
            controller.abort();
        }
    }, [query])

    const [showSearch, setShowSearch] = useState(false);

    const closeSearch = () => {
        if (!showSearch) return;
        setQuery('')
        setShowSearch(false)
    }
   
    const doubleCall = e => {
        setQuery(e.target.value)
        setShowSearch(true)
        if (!e.target.value) {
            setShowSearch(false)
        }
    }

    return (
       <div id="search-div">
            <input 
                id="search-bar"
                value={query}
                placeholder={"Search for a song..."}
                ref={focusSearch}
                onChange={(e) => doubleCall(e)}
                className="inpt"
            />
            {showSearch && (
            <div id="search-results">
                <button onClick={closeSearch} id='search-button' className="btn red">X</button>
                {songs.map((arr) => {
                    return (
                        <NavLink exact to={`/songs/${arr.item.id}`} onClick={closeSearch} key={arr.item.name}>{arr.item.name}</NavLink>
                    )})}
            </div>
            )}
        </div>
    );
}

