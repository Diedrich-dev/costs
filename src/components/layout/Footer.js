import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
      <footer className='bg-[#222] text-white p-12 text-center'>
        <ul className='flex justify-center list-none'>
          <li className='mx-4 hover:text-[#FFBB33] svg:text-xl cursor-pointer'><FaFacebook/></li>
          <li className='mx-4 hover:text-[#FFBB33] svg:text-xl cursor-pointer'><FaInstagram/></li>
          <li className='mx-4 hover:text-[#FFBB33] svg:text-xl cursor-pointer'><FaLinkedin/></li>
        </ul>
        <p className='mt-8'><span className='font-bold text-[#FFBB33]'>Costs</span> &copy; 2023</p>
      </footer>
    )
}

export default Footer