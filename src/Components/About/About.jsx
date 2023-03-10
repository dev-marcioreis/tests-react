import React from 'react'
import './About.css'

import Glasses from '../../img/glasses.png'
import Heart from '../../img/heart.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { motion } from 'framer-motion'

const transition = { duration: 2, type: "spring" };

const About = () => {
  return (
    <div className="about" id='About'>
        <div className="awesome">
            <span>Sobre mim</span>
            <p>Estudo Análise e Desenvolvimento de Sistemas, e também estou estudando e me aperfeiçoando em React e Angular.</p>
            <p>No momento trabalho como desenvolvedor Front-end freelancer.</p>
            <p>Aprendendo novas tecnologias, me preparando para o futuro na área que gosto, e sempre correspondendo com as expectativas e necessidades de meus clientes e amigos.</p>
            <a href='https://github.com/devmarcioreis' target="_blank" rel="noreferrer" className="button about-button"><i class="uil uil-github"></i> Github</a>
        </div>
        <div className="cards">
            <motion.div initial={{left: '10%'}} whileInView={{left: '30%'}} transition={transition} className='card1'>
                <Card
                    emoji = {Heart}
                    heading = {'React'}
                    detail = {"Gosto muito deste framework"}
                />
            </motion.div>
            <motion.div initial={{left: '20%'}} whileInView={{left: '-10%'}} transition={transition} className="card2">
            <Card
                    emoji = {Glasses}
                    heading = {'React'}
                    detail = {"A linguagem que mais utilizo"}
                />
            </motion.div>
            <motion.div initial={{left: '-10%'}} whileInView={{left: '34%'}} transition={transition} className="card3">
            <Card
                    emoji = {Humble}
                    heading = {'Angular'}
                    detail = {"Aprendendo muito com este framework"}
                />
            </motion.div>
        </div>
    </div>
  )
}

export default About