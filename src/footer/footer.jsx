import "./footer.scss";
import { Logo } from "../logo/logo";

export function Footer(props) {
  return (
    <footer className={"footer " + props.className}>
      <Logo />
    </footer>
  );
}
