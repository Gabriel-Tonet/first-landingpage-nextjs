"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loading } from "../loading/index";
import { SuccessModal } from "../successModal";
import { FailModal } from "../failModal/index";
const { default: Button } = require("../button");
const { default: Input } = require("../input");
const { default: Select } = require("../select");

export const FormFormik = ({ handleSubmitForm }) => {
  const [isloading, setLoading] = useState(false);
  const [successModal, setModalSuccess] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      midia: "",
    },
    validationSchema: Yup.object({
      name: Yup
        .string()
        .required("Campo Obrigatório"),
      email: Yup
        .string()
        .email("E-mail inválido")
        .required("Campo Obrigatório"),
      phone: Yup
        .string()
        .matches(
          /^(\+55)?\s?(?:\(?([1-9]{2})\)?\s?)?(?:(9\d{4})[-\s]?(\d{4})|([2-9]\d{3})[-\s]?(\d{4}))$/,
          "Digite um telefone válido"
        )
        .required("Campo Obrigatório"),
      website: Yup
        .string()
        .required("Campo Obrigatório"),
      midia: Yup
        .string()
        .required("Campo Obrigatório"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await handleSubmitForm(values);
        setModalSuccess(true);
        console.log("abriu")
        formik.resetForm(initialValues);
        console.log("reset", formik.resetForm())
      } catch (error) {
        setFailModal(true)
        console.log("abriu 2")
        console.error('Erro ao enviar o formulário:', error);
      }
      setLoading(false);
    },
  });



  const closeModal = () => {
    setFailModal(false);
    setModalSuccess(false);
    console.log("fechou")
  };

  console.log("teste errors: ", formik.errors);
  console.log("teste values: ", formik.values);



  return (
    <>
      {successModal && <SuccessModal closeModal={closeModal} />}
      {failModal && <FailModal closeModal={closeModal} />}
      {isloading && <Loading />}
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
          pattern="^\d{11}$"
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
    </>
  );
};
