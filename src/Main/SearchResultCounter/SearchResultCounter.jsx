import PropTypes from "prop-types";

import "./SearchResultCounter.scss";

export function SearchResultCounter(props) {
  return (
    <div className={"search-result-counter " + props.className}>
      <span className={"search-result-counter__amount"}>{props.counter}</span>
      <span className={"search-result-counter__description"}>
        {" "}
        movies found
      </span>
    </div>
  );
}

SearchResultCounter.propTypes = {
  counter: PropTypes.number.isRequired,
};
