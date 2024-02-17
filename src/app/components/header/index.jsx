import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import Styles from "./header.module.scss";
import Button from "../button";

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logotipo}>
        <Image src={Logo} alt="Logo" priority={true} />
      </div>
      <div className={Styles.menu}>
        <Link href="/">Home</Link>
        <Link href="#welcome">O que fazemos</Link>
        <Link href="#features">Cases</Link>
      </div>
      <div className={Styles.action}>
        <a href="#contato">
          <Button title="Fale conosco" />
        </a>
      </div>
    </div>
  );
};

export default Header;