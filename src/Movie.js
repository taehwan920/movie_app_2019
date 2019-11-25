import React from "react";
import PropTypes from "prop-types";

/*이번 케이스는 state가 필요한 것이 아니니 function component로 간다 */
function Movie(id, year, title, summary, poster) {
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;