import { Formik, Form, Field, ErrorMessage } from "formik";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Select from "./Select";
import TextInput from "./TextInput";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 3) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 3) {
    errors.lastname = "El apellido es muy corto";
  }

  if (!values.radio) {
    errors.radio = "Requerido";
  }

  return errors;
};

function App() {
  // const formik = useFormik({
  //   initialValues: { name: "", lastname: "", email: "" },
  //   validate,
  //   onSubmit: (values) => console.log(values),
  // });
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        chancho: "",
        radio: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <TextInput name="name" label="Nombre" />
          <br />

          <TextInput name="lastname" label="Apellido" />
          <br />

          <TextInput name="email" label="Correo" />
          <br />
          <Select label="Tipo de chancho" name="chancho">
            <option value="">--Seleccione Chancho--</option>
            <option value="chanchitofeliz">Chanchito Feliz</option>
            <option value="chanchitotriste">Chanchito Triste</option>
            <option value="chanchitoenojado">Chanchito Enojado</option>
          </Select>
          <Checkbox name="accept">Aceptar términos y condiciones</Checkbox>
          <Radio name="radio" value="chanchito1" label="chanchito 1" />
          <Radio name="radio" value="chanchito2" label="chanchito 2" />
          <Radio name="radio" value="chanchito3" label="chanchito 3" />
          <ErrorMessage name="radio" />
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
}

export default App;
