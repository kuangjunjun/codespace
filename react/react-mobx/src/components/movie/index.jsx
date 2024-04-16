import React from 'react';
import { useStore, observer } from '../../store' 

import { useEffect } from 'react';

const Movie = () => {
    const { movieStore } = useStore();

    useEffect(() => {
        movieStore.setMovieList();
    }, []);

    return (
        <div>
            {movieStore.movieList.map(item => (
                <li key={item.id}>{item.nm} -- {item.star}</li>
            ))}
        </div>
    );
};

export default observer(Movie);