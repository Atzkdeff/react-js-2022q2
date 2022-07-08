import "./Footer.scss";
import { Logo } from "../Logo";

export function Footer(props) {
  return (
    <footer className={"footer " + props.className}>
      <Logo />
    </footer>
  );
}
