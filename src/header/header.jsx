import { useState } from "react";
import { Button } from "reactstrap";

import "./header.scss";
import { Logo } from "../logo/logo";
import { SearchForm } from "./search-form/search-form";
import { AddMovieDialog } from "../dialogs/add-movie-dialog/add-movie-dialog";

export function Header({ className }) {
  const [isAddMovieDialogOpened, setAddDialogState] = useState(false);

  return (
    <header className={"header " + className}>
      <Logo className="header__logo" />
      <p className="header__description">Find your movie</p>
      <Button
        className="header__add-button"
        color="primary"
        outline
        size="lg"
        onClick={() => setAddDialogState(!isAddMovieDialogOpened)}
      >
        + ADD MOVIE
      </Button>
      <SearchForm />
      <AddMovieDialog
        isDialogOpened={isAddMovieDialogOpened}
        closeDialog={() => setAddDialogState(!isAddMovieDialogOpened)}
      />
    </header>
  );
}
