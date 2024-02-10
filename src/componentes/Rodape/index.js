import { Link } from 'react-router-dom';
import './Rodape.css'
import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <Link to="https://www.instagram.com/jordan_sousa17/" >
                            <FaInstagramSquare />
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.linkedin.com/in/jordansousadev" >
                            <FaLinkedin />
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="https://github.com/jordan-sousa" >
                            <FaGithub />
                        </Link>
                    </li>
                </ul>
            </section>

            <section>
                <img src='/imagens/logo.png' />
            </section>

            <section>
                <p>Criado por <strong>JS</strong>CodeCraft </p>
            </section>

        </footer>
    )
}

export default Rodape