import { useState } from "react";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const SORTING_OPTIONS = ["Release date", "Genre", "Name", "Director"];

export function SortOrderSelector() {
  const [isDropdownOpen, setDropDownState] = useState(false);

  return (
    <ButtonDropdown
      isOpen={isDropdownOpen}
      toggle={() => setDropDownState(!isDropdownOpen)}
    >
      <DropdownToggle caret>Sort by</DropdownToggle>
      <DropdownMenu>
        {SORTING_OPTIONS.map((option) => (
          <DropdownItem key={option}>{option}</DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
}
