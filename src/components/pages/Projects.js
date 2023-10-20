import { useLocation } from "react-router-dom";
import Container from "../layout/Container";
import Message from "../layout/Message";

function Projects() {
  const location = useLocation();
  let message = '';
  console.log(location)
  if (location.state) {
    message = location.state.message;
  }

  console.log(message)

  return (
    <Container customClass="min-h-[75%]">
      <div>
        <h1 className="font-bold">Meus Projetos</h1>
        {message && <Message msg={message} type="success"/>}
      </div>
    </Container>
  );
}

export default Projects;
