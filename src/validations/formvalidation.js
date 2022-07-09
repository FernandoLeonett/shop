import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup
    .string("el nombre debe ser un texto")
    .required("complete el nombre")
    .min(3, "el nombre debe ser de al menos 3 caracterres"),

  email: yup
    .string("el nombre debe ser un texto")

    .email("email no valido")
    .required("el email es requerido"),

  phone: yup
    .number()
    .typeError("telefono invalido")
    .required("telefono requerido"),
});

export default yupResolver(schema);
