import { ButtonAdd, CardContainer, ContentAdd, Icones, ItemCard, TarefasCard, TitleCard } from "./styles";
import { FaTrashAlt, FaEdit, FaExchangeAlt } from "react-icons/fa"
import { CgAdd } from "react-icons/cg"
import { ITarefas } from "../../interfaces/tarefas";
import { ModalStatus } from "../ModalStatus";
import { useState } from "react";


interface Props {
    titulo: string
    cor: string
    handleOpen: () => void
    tarefas: ITarefas[]
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
    setTarefa: React.Dispatch<React.SetStateAction<string>>
    setTarefaEditadaId: React.Dispatch<React.SetStateAction<string>>
}

export const Card = ({ titulo, cor, handleOpen, tarefas, setTarefas, setTarefa, setTarefaEditadaId }: Props) => {
    const [open, setOpen] = useState(false);
    const [tarefaMudar, setTarefaAMudar] = useState<ITarefas>();

    const handleOpenModal = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRemoveTarefa = (id: string) => {
        const remover = window.confirm('Deseja excluir tarefa?')

        if (remover) {
            setTarefas((tarefa) => tarefa.filter(item => item.id !== id))
        }
    }

    const handleEditarTarefa = (id: string) => {
        const tarefaAEditar = tarefas.find(item => item.id === id)
        if (tarefaAEditar) {
            setTarefa(tarefaAEditar.tarefa)
            setTarefaEditadaId(id)
            handleOpen()
        }
    }

    const handleMudarStatus = (id: string) => {
        const tarefaAMudar = tarefas.find(item => item.id === id)
        setTarefaAMudar(tarefaAMudar)
        handleOpenModal()
    }
    
    return (
        <>
            <CardContainer cor={cor}>
                <TitleCard>
                    {titulo}
                </TitleCard>
                <TarefasCard>
                    {tarefas?.map(item => (
                        <ItemCard key={item.id}>
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
                                    onClick={() => handleRemoveTarefa(item.id)}
                                    title="Apagar" />
                                <FaEdit
                                    onClick={() => handleEditarTarefa(item.id)}
                                    title="Editar" />
                                <FaExchangeAlt
                                    onClick={() => handleMudarStatus(item.id)}
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
            <ModalStatus
                open={open}
                onClose={handleClose}
                tarefaMudar={tarefaMudar}
                tarefas={tarefas}
                setTarefas={setTarefas}
            />
        </>
    )
}