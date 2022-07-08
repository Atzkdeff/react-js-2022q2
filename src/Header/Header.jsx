import { useState } from "react";
import { Button } from "reactstrap";

import "./Header.scss";
import { Logo } from "../Logo";
import { SearchForm } from "./SearchForm";
import { AddMovieDialog } from "../dialogs/AddMovieDialog";

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
