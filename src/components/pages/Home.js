import Container from "../layout/Container"
import saving from '../../img/savings.svg'
import LinkButton from "../layout/LinkButton"

function Home() {
  return (
    <Container customClass="min-h-[75%]">
      <section className="w-full flex flex-col items-center justify-center p-16">
        <h1 className="text-[2.5rem] mb-2 font-bold">Bem-vindo ao <span className="text-[#FFBB33] p-1 bg-[#222]">Costs</span></h1>
        <p className="mb-[1.5rem] text-[#7B7B7B]">Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
        <img className="w-[350px] my-8" src={saving} alt="Costs" />
      </section>
    </Container>
    )
}

export default Home