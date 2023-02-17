import { useForm } from "../hooks/useForm";
import { useTranslations } from "next-intl";
import Swal from "sweetalert2";

export default function ContactForm() {

  const { name, email, message, handleInputChange, reset } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const t = useTranslations('contact');

  const validFields = (name, email, message) => {
    /* let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g; */
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.length < 2) {
      Swal.fire(
        t("title"),
        `${t("form.nameNotValidError")}`,
        "error"
      );
      return false;
    }
    if (!emailRegex.test(email) || email.length === 0) {
      Swal.fire(
        t("title"),
        `${t("form.emailNotValidError")}`,
        "error"
      );
      return false;
    }
    if (!message.length) {
      Swal.fire(
        t("title"),
        `${t("form.emptyMessageError")}`,
        "error"
      );
      return false;
    }
    return true;
  };

  
  const handleSubmit = async (name, email, message) => {

    if(!validFields(name, email, message))
      return;

    try {
      const res = await fetch(`/api/sendgrid`, {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        method: "POST",
      });
      const { error } = await res.json();
      console.log(error);
      if (error) {
        console.log("ERROR: ", error);
        Swal.fire(
          t("title"),
          `${t("form.errorMessage")}: ${error}`,
          "error"
        );
      } else Swal.fire(t("title"), t("form.okMessage"), "success");
      reset();
    } catch (error) {
      console.log("ERROR: ", error);
      Swal.fire(
        t("title"),
        `${t("form.errorMessage")}: ${error.message}`,
        "error"
      );
    }
  }

  return (
    <form className="formulario">
      <div className="contenedor-campos">
        <div className="campo">
          <label htmlFor="">{t('form.name.label')}: </label>
          <input className="input-text"
            type="text"
            name="name"
            id="nameField"
            value={name}
            onChange={handleInputChange}
            placeholder={t('form.name.placeholder')} autoComplete="off" />
        </div>
        <div className="campo">
          <label htmlFor="">{t('form.email.label')}: </label>
          <input className="input-text"
            type="email"
            name="email"
            id="emailField"
            value={email}
            onChange={handleInputChange}
            placeholder={t('form.email.placeholder')} autoComplete="off" />
        </div>
        <div className="campo">
          <label htmlFor="">{t('form.message.label')}: </label>
          <textarea className="input-text"
            name="message"
            id="messageField"
            value={message}
            onChange={handleInputChange}
            cols="30"
            rows="10"></textarea>
        </div>
      </div>
      <div className="button-group">
        <button type="button" onClick={() => handleSubmit(name, email, message)} className="boton">{t('form.submit')}</button>
      </div>
    </form>
  );
}