import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

/*이번 케이스는 state가 필요한 것이 아니니 function component로 간다 */
function Movie({ year, title, summary, poster }) {
    return <div class="movies__movie">
        <img src={poster} alt={title} title={title} />
        <div class="movie__data">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
        </div>
    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;