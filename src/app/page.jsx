import Contato from "./components/contato";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Styles from "./page.module.scss";

export default function Home() {
  return <div className={Styles.container}>
    <Header />
    <Welcome />
    <Features />
    <Contato />
    <Footer />
  </div>;
}