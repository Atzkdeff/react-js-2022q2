import { PureComponent } from 'react';
import {Button, Input, InputGroup} from 'reactstrap';

export class SearchForm extends PureComponent {
    render() {
        return (
            <div className="search-form">
                <InputGroup>
                    <Input placeholder={"What do you want to watch?"}/>
                    <Button color="primary" size="lg">SEARCH</Button>
                </InputGroup>
            </div>
        );
    }
}
