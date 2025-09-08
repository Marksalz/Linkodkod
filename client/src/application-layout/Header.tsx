import Nav from "../components/Nav";
import Logo from "./Logo";
import Slogan from "./Slogen";

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <Slogan sloganTxt="Uniting people creating connections" />
      <Logo url={"../src/assets/appLogo.jpeg"} />
    </div>
  );
}
