import { Link } from 'react-router-dom'
import './Logout.css'
import UserServices from '../../services/UserServices'

const Logout = (props) => {

    return (
        <Link to="/" className='logout'>
            Sair
        </Link>
    )
}

export default Logout