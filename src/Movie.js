import React from "react";
import PropTypes from "prop-types";

// 만약에 component가 state가 필요하지 않다면 class가 아니라 function을 사용해 줘야 한다.

function Movie({id, year, title, summary, poster}) {
    return <div>
        <h5>{title}</h5>
        <img src={poster} />
        </div>
}

Movie.propTypes = {
    id: PropTypes.number,
    year: PropTypes.number,
    title: PropTypes.string,
    summary: PropTypes.string,
    poster: PropTypes.string,
};

export default Movie;