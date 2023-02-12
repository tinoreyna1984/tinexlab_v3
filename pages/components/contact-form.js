import { useForm } from "../../hooks/useForm";
import { useTranslations } from "next-intl";
import Swal from "sweetalert2";

export default function ContactForm() {

  const { name, email, message, handleInputChange, reset } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const t = useTranslations('contact');

  /* TODO: develop the email submission from form */
  const handleSubmit = async () => {
    console.log({ name, email, message });

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
            placeholder={t('form.name.placeholder')} />
        </div>
        <div className="campo">
          <label htmlFor="">{t('form.email.label')}: </label>
          <input className="input-text"
            type="email"
            name="email"
            id="emailField"
            value={email}
            onChange={handleInputChange}
            placeholder={t('form.email.placeholder')} />
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
        <button type="button" onClick={handleSubmit} className="boton">{t('form.submit')}</button>
      </div>
    </form>
  );
}