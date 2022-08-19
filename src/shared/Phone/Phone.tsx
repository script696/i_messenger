import React, { ReactNode } from "react";
import s from "./Phone.module.scss";

interface IPhoneTypes {
  children: ReactNode;
}

const Phone = ({ children }: IPhoneTypes) => {
  return (
    <section className={s.phone}>
      <nav className={s.phone__navigation}>
        <ul className={s.phone__navigationItems}>
          <li className={s.phone__navigationItem}></li>
          <li className={s.phone__navigationItem}></li>
          <li className={s.phone__navigationItem}></li>
          <li className={s.phone__navigationItem}></li>
        </ul>
      </nav>
      <h1 className={s.phone__title}>Робот-помощник</h1>
      <div className={s.phone__screen}>{children}</div>
    </section>
  );
};

export default Phone;
