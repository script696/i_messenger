import React from 'react'
import { Link } from 'react-router-dom'
import pageNotFoundImg from '../../assets/img/pageNotFoundImg.jpg'
import s from './PageNotFound.module.scss'


const PageNotFound = () => {
  return (
    <div className={s.notFound}>
      <img className={s.notFound__image} src={pageNotFoundImg} alt="Изображение 404"/>
      <Link className={s.notFound__button} to="/messenger">Назад</Link>
    </div>
  )
}

export default PageNotFound