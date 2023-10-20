import {Link} from 'react-router-dom';
import Container from './Container';
import logo from '../../img/costs_logo.png';
function Navbar() {
  return (
    <nav className='flex justify-between bg-[#222] p-4'>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs"></img>
        </Link>
        <ul className='flex list-none items-center'>
          <li className='mr-4'><Link to="/" className='text-white hover:text-[#FFBB33]'>Home</Link></li>
          <li className='mr-4'><Link to="/projects" className='text-white hover:text-[#FFBB33]'>Projetos</Link></li>
          <li className='mr-4'><Link to="/contact" className='text-white hover:text-[#FFBB33]'>Contato</Link></li>
          <li className='mr-4'><Link to="/company" className='text-white hover:text-[#FFBB33]'>Empresa</Link></li>
          <li className='mr-4'><Link to="/newproject" className='text-white hover:text-[#FFBB33]'>Novo Projeto</Link></li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar