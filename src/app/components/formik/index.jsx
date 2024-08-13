"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loading } from "../loading/index";
import { SuccessModal } from "../successModal";
import { FailModal } from "../failModal/index";
import { StringFormat } from "@/app/utils/masks";
const { default: Button } = require("../button");
const { default: Input } = require("../input");
const { default: Select } = require("../select");

export const FormFormik = ({ handleSubmitForm }) => {
  const [isloading, setLoading] = useState(false);
  const [successModal, setModalSuccess] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const [formKey, setFormKey] = useState(0);

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
        setFormKey(prevKey => prevKey + 1);
      } catch (error) {
        setFailModal(true);
      }
      setLoading(false);
    },
  });

  const closeModal = () => {
    setFailModal(false);
    setModalSuccess(false);
  };

  return (
    <>
      {successModal && <SuccessModal closeModal={closeModal} />}
      {failModal && <FailModal closeModal={closeModal} />}
      {isloading && <Loading />}
      <form key={formKey} id="formulario" onSubmit={formik.handleSubmit}>
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
          value={StringFormat.formatPhone(formik.values.phone)}
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
            { label: "Instagram", value: "Instagram" },
            { label: "Facebook", value: "Facebook" },
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
