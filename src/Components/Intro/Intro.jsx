import React from 'react'
import './Intro.css'
import { motion } from 'framer-motion'

import { AiOutlineHtml5, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import Profile from '../../img/profile.png'
import HTML from '../../img/html.png'
import Javascript from '../../img/javascript.png'
import ReactJS from '../../img/react.png'
import CSS from '../../img/css.png'
import Resume from '../Resume/curriculo.pdf'

const transition = { duration: 2, type: "spring" };


const Intro = () => {
  return (
    <div className='intro'>
      <div className="intro-left">
        <div className="intro-name">
          <span>Oi, eu sou</span>
          <span>Márcio Reis</span>
          <span>Desenvolvedor Front-end</span>
          <p>Tenho paixão por tecnologia, e ela me faz ter vontade de trabalhar e estudar cada vez mais para solucionar os mais variados tipos de problemas na área de desenvolvimento.</p>
          <p>Seguir este caminho tem sido desafiador e me faz querer sempre o melhor para meus clientes. Dar uma solução inovadora para seus problemas e suas necessidades é o que me motiva, além de aprender, claro!</p>
          <p>Estou sempre estudando e aprendendo, e no momento estudo e trabalho com: HTML, CSS, JavaScript e React.</p>
          <i className='intro-icons'>
            <AiOutlineHtml5 />
            <DiCss3 />
            <IoLogoJavascript />
            <FaReact />
          </i>
        </div>
        <a href={Resume} download className="button intro-button">Currículo</a>
        <div className="intro-social-icons">
          <a href="https://github.com/devmarcioreis" target='_blank' rel="noreferrer" ><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/devmarcioreis/" target="_blank" rel="noreferrer" ><AiFillLinkedin /></a>
        </div>
      </div>
      <div className="intro-right">
        <img src={Profile} alt="Imagem perfil" />
        <motion.img initial={{top: '22%'}} whileInView={{left: '65%'}} transition={transition} src={Javascript} alt="Imagem perfil" />
        <motion.img initial={{left: '60%'}} whileInView={{left: '-5%'}} transition={transition} src={ReactJS} alt="Imagem perfil" />
        <motion.img initial={{left: '6%'}} whileInView={{left: '70%'}} transition={transition} src={HTML} alt="Imagem perfil" />
        <motion.img initial={{left: '-16%'}} whileInView={{left: '-1%'}} transition={transition} src={CSS} alt="Imagem perfil" />
        <div className='circle1'></div>
        <div className='circle2'></div>
      </div>
    </div>
  )
}

export default Intro