import { ButtonAdd, CardContainer, ContentAdd, Icones, ItemCard, TarefasCard, TitleCard } from "./styles";
import { FaTrashAlt, FaEdit, FaExchangeAlt } from "react-icons/fa"
import { CgAdd } from "react-icons/cg"
import { ITarefas } from "../../interfaces/tarefas";

interface Props {
    titulo: string
    cor: string
    handleOpen: () => void
    tarefas: ITarefas[]
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

export const Card = ({ titulo, cor, handleOpen, tarefas, setTarefas }: Props) => {

    const handleRemoveTarefa = (index: number) => {
        const remover = window.confirm('Deseja excluir tarefa?')

        if (remover) {
            setTarefas((tarefa) => tarefa.filter((_, indexExistente) => indexExistente !== index))
        }
    }


    return (
        <CardContainer cor={cor}>
            <TitleCard>
                {titulo}
            </TitleCard>
            <TarefasCard>
                {tarefas?.map((item, index) => (
                    <ItemCard key={index}>
                        <div>
                            <span>
                                {item.tarefa}
                            </span>
                            <p>
                                Adicionado em: {item.data}
                            </p>
                        </div>
                        <Icones>
                            <FaTrashAlt
                                onClick={() => handleRemoveTarefa(index)}
                                title="Apagar" />
                            <FaEdit
                                onClick={() => alert('')}
                                title="Editar" />
                            <FaExchangeAlt
                                onClick={() => alert('')}
                                title="Mudar tarefa" />
                        </Icones>
                    </ItemCard>
                ))}
            </TarefasCard>
            <ContentAdd>
                <ButtonAdd onClick={handleOpen}>
                    Adicionar a {titulo}
                </ButtonAdd>
                <CgAdd />
            </ContentAdd>
        </CardContainer>
    )
}