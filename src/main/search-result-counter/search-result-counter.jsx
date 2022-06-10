import './search-result-counter.scss'

export function SearchResultCounter(props) {
    return (
        <div className={"search-result-counter " + props.className}>
            <span className={"search-result-counter__amount"}>{props.counter}</span>
            <span className={"search-result-counter__description"}> movies found</span>
        </div>
    );
}
