import { Modal } from "@mui/material"
import { useContext } from "react"
import { Tarefas } from "../../common/tarefas"
import { ITarefas } from "../../interfaces/tarefas"
import { ModalContent } from "../ModalTarefa/styles"

interface Props {
    open: boolean
    onClose: () => void
    tarefaMudar: ITarefas | undefined
    tarefas: ITarefas[]
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

export const ModalStatus = ({ open, onClose, tarefaMudar, tarefas, setTarefas }: Props) => {
    const {
        setTarefasAFazer,
        setTarefasFazendo,
        setTarefasFeito,
        tarefasAFazer,
        tarefasFazendo,
        tarefasFeito
    } = useContext(Tarefas);

    const handleFazer= () => {
        if (tarefaMudar) {
            setTarefas((tarefa) => tarefa.filter(item => item.id !== tarefaMudar.id))
            setTarefasAFazer([tarefaMudar, ...tarefasAFazer])
            onClose();
        }
    }

    const handleFazendo = () => {
        if (tarefaMudar) {
            setTarefas((tarefa) => tarefa.filter(item => item.id !== tarefaMudar.id))
            setTarefasFazendo([tarefaMudar, ...tarefasFazendo])
            onClose();
        }
    }
    
    const handleFeito = () => {
        if (tarefaMudar) {
            setTarefas((tarefa) => tarefa.filter(item => item.id !== tarefaMudar.id))
            setTarefasFeito([tarefaMudar, ...tarefasFeito])
            onClose();
        }
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <ModalContent>
                <button onClick={handleFazer}>Fazer</button>
                <button onClick={handleFazendo}>Fazendo</button>
                <button onClick={handleFeito}>Feito</button>
            </ModalContent>
        </Modal>
    )
}