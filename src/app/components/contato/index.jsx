import Link from "next/link";
import GET from "../../api/route";
import { FormFormik } from "../formik";
import Styles from "./contato.module.scss";

const Contato = () => {
  const handleSubmitForm = async (values) => {
    "use server";

    const payload = {
      body: ({
        messageBody: `
        Nome: ${values.name}

        Email: ${values.email}

        Telefone: ${values.phone}

        Site: ${values.website}
        
        Mídia: ${values.midia}`
      }),
    };
    const data = await GET(payload);
  };

  return (
    <div className={Styles.container} id="contato">
      <div className={Styles.texts}>
        <span>ENTRE EM CONTATO</span>
        <h1>Aumente seu resultado de vendas e performance</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>
      <div className={Styles.form}>
        <h1>Fale com um especialista</h1>

        <FormFormik handleSubmitForm={handleSubmitForm} />
      </div>
      <div className={Styles.footer}>
        <p>
          Ao enviar esse formulário, você reconhece que leu e concorda com a
          nossa
          <Link href="/">
            <span> Política de Privacidade.</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contato;
