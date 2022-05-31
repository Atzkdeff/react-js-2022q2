import { PureComponent } from 'react';

import './search-form.css'

export class SearchForm extends PureComponent {
    render() {
        return (
            <div className="search-form">
                <input placeholder={"What do you want to watch?"}/> <button>Search</button>
            </div>
        );
    }
}
