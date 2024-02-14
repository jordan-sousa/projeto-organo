import { Link } from 'react-router-dom'
import './Logout.css'
import UserServices from '../../services/UserServices'

const Logout = (props) => {

    const usuarioString = localStorage.getItem("usuario")
    const usuario = JSON.parse(usuarioString);
    
console.log(usuario.name);
    return (
        <div className='container'>
            <Link to="/" className='logout'>
                Sair
            </Link>
            <p>
                Olá, {usuario.name}
            </p>
        </div>
    )
}

export default Logout