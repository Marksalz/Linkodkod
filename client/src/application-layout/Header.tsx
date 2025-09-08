import Logo from "./Logo";
import Slogan from "./Slogen";

export default function Header() {
  return (
    <div className="header">
      <Slogan sloganTxt="Uniting people creating connections" />
      <Logo />
    </div>
  );
}
