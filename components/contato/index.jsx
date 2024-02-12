import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import Styles from "./contato.module.scss";
import Button from "../button/index";
import Input from "../input";
import Select from "../select";
import GET from "../../src/app/api/route";

const Contato = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            website: "",
            midia: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Campo Obrigatório"),
            email: Yup.string().email("E-mail inválido").required("Campo Obrigatório"),
            phone: Yup.string().matches("", "Digite um telefone válido").required("Campo Obrigatório"),
            website: Yup.string().required("Campo Obrigatório"),
            midia: Yup.string().required("Campo Obrigatório"),
        }),
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => handleSubmitForm(values),
    });

    const handleSubmitForm = async (values) => {
        'use server'

        const payload = {
            body: { messageBody: `Nome: ${values.name}, Email: ${values.email}, Telefone: ${values.phone}, Site: ${values.website}, Midia: ${values.midia}` }
        }

        const data = await GET(payload);
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={Styles.form}>
                <h1>Fale com um especialista</h1>

                <form id="formulario" onSubmit={formik.handleSubmit}>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nome completo"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        required
                    />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-mail profissional"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required
                    />
                    <Input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Celular/Whatsapp"
                        pattern="^\d{10}$"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        required
                    />
                    <Input
                        id="website"
                        name="website"
                        type="text"
                        placeholder="Site"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.website}
                        required
                    />
                    <Select
                        id="midia"
                        name="midia"
                        placeholder="Orçamento para mídia"
                        options={[
                            { label: "Instagram", value: "instagram" },
                            { label: "Facebook", value: "facebook" },
                        ]}
                        onChange={formik.handleChange}
                        value={formik.values.midia}
                        required
                    />

                    <Button type="submit" title="Enviar" kind="full" />
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