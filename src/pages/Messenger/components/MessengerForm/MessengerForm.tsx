import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import s from "./MessengerForm.module.scss";

const MessengerForm = ({ onSubmit }: any) => {
  const [formData, setFormData] = useState({
    msgName: "",
    msgText: "",
  });

  const fillInputValue = (e: any) => {
    const currentInput = e.target.id;
    const currentValue = e.target.value;

    setFormData((prev) => ({ ...prev, [currentInput]: currentValue }));
  };

  const resetInputs = () => {
    setFormData(() => ({ msgName: "", msgText: "" }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { msgName, msgText } = formData;

    onSubmit(msgName, msgText, resetInputs);
  };

  return (
    <form className={s.msgForm} onSubmit={handleSubmit}>
      <input
        value={formData.msgName}
        id="msgName"
        className={s.msgForm__input}
        type="text"
        placeholder="Имя"
        onChange={fillInputValue}
      />
      <textarea
        value={formData.msgText}
        id="msgText"
        className={s.msgForm__textArea}
        placeholder="Сообщение"
        onChange={fillInputValue}
      />
      <button className={s.msgForm__submitBtn} type="submit"></button>
    </form>
  );
};

export default MessengerForm;
