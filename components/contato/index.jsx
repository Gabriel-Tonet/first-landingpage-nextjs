import Link from "next/link";
import Styles from "./contato.module.scss";
import Button from "../button/index";
import Input from "../input";
import Select from "../select";

const Contato = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={Styles.form}>
                <h1>Fale com um especialista</h1>

                <form>
                    <Input type="text" placeholder="Nome completo" required />
                    <Input type="email" placeholder="E-mail profissional" required />
                    <Input
                        type="text"
                        placeholder="Celular/Whatsapp"
                        pattern="^\d{10}$"
                        messageError="Teste"
                        required
                    />
                    <Input type="text" placeholder="Site" required />
                    <Select
                        placeholder="Orçamento para mídia"
                        options={[
                            { label: "Instagram", value: "instagram" },
                            { label: "Facebook", value: "facebook" },
                        ]}
                        required
                    />

                    <Button title="Enviar" kind="full" />
                </form>
            </div>
            <div className={Styles.footer}>
                <p>
                    Ao enviar esse formulário, você reconhece que leu e concorda com a nossa
                    <Link href="/">
                        <span> Política de Privacidade.</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Contato;