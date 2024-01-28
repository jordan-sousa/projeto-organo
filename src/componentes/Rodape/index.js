import './Rodape.css'
import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/jordan_sousa17/' target='_blank'>
                            <FaInstagramSquare />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/jordansousadev' target='_blank'>
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/jordan-sousa' target='_blank'>
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src='/imagens/logo.png'/>
            </section>

            <section>
                <p>Criado por <strong>JS</strong>CodeCraft </p>
            </section>

        </footer>
    )
}

export default Rodape