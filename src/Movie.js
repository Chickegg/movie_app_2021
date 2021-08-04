import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// 만약에 component가 state가 필요하지 않다면 class가 아니라 function을 사용해 줘야 한다.

function Movie({id, year, title, summary, poster, genres}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres_genre">
                        {genre}
                    </li>
                ))}
            </ul>
            <p className="movie_summary">{summary}</p>
            {console.log(genres)}
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number,
    year: PropTypes.number,
    title: PropTypes.string,
    summary: PropTypes.string,
    poster: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;