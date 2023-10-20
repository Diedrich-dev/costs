import { Link } from "react-router-dom"

function LinkButton({to, text}) {
  return (
    <Link className="bg-[#222] text-white px-2 py-4 duration-500 hover:text-[#FFBB33]" to={to}>  
      {text}
    </Link>
  )
}

export default LinkButton