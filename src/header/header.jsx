import { Button } from 'reactstrap';

import './header.scss';
import {Logo} from "../logo/logo";
import { SearchForm } from "./search-form/search-form";

export function Header({className}) {
  return <header className={"header " + className}>
            <Logo className="header-logo"/>
            <p className="header__description">Find your movie</p>
            <Button className="header__add-button" color="primary" outline size="lg">+ ADD MOVIE</Button>
            <SearchForm/>
        </header>;
}
