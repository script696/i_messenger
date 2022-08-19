import React, { ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import s from "./Phone.module.scss";

interface IPhoneTypes {
  children: ReactNode;
}

const Phone = ({ children }: IPhoneTypes) => {
  return (
    <section className={s.phone}>
      <Navigation />

      <h1 className={s.phone__title}>Робот-помощник</h1>
      <div className={s.phone__screen}>{children}</div>
    </section>
  );
};

export default Phone;
