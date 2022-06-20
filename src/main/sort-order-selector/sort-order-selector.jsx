import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const SORTING_OPTIONS = ["Release date", "Genre", "Name", "Director"];

export function SortOrderSelector() {
    // TODO doesn't work
    let isDropdownOpen = false;

    return (
        <ButtonDropdown
            isOpen={isDropdownOpen}
            toggle={() => isDropdownOpen = !isDropdownOpen}
        >
            <DropdownToggle caret>
                Sort by
            </DropdownToggle>
            <DropdownMenu>
                {SORTING_OPTIONS.map(option => <DropdownItem key={option}>{option}</DropdownItem>)}
            </DropdownMenu>
        </ButtonDropdown>
    );
}
