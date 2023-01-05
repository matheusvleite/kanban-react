import { TarefasProvider } from "../../common/tarefas"
import { AFazer } from "../../Components/AFazer"
import { Fazendo } from "../../Components/Fazendo"
import { Feito } from "../../Components/Feito"
import { Header } from "../../Components/Header"
import { Container, Tarefas } from "./styles"

function App() {


  return (
    <TarefasProvider>
    <Container>
      <Header />
      <Tarefas>
        <AFazer />
        <Fazendo />
        <Feito />
      </Tarefas>
    </Container>
    </TarefasProvider>
  )
}

export default App
