import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    //inicialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate("/projects", { state: { message: "Project criado com sucesso!" }, replace: false});
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container customClass="min-h-[75%]">
      <div className="w-full m-0-auto p-12">
        <h1 className="mb-2 font-bold">Criar Projeto</h1>
        <p className="text-[#7B7B7B]">
          Crie seu projeto para depois adicionar os serviços
        </p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
      </div>
    </Container>
  );
}

export default NewProject;
