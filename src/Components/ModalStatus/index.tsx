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

    const handleTrocarStatus = (tarefa: ITarefas[], setTarefa: React.Dispatch<React.SetStateAction<ITarefas[]>>) => {
        if (tarefaMudar) {
            const tarefaExistente = tarefa.find(item => item.id === tarefaMudar.id)
            if(tarefaExistente) {
                return alert('Ja está no card.')
            }
            setTarefas((tarefa) => tarefa.filter(item => item.id !== tarefaMudar.id))
            setTarefa([tarefaMudar, ...tarefa])
            onClose();
        }
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <ModalContent>
                <button onClick={() => handleTrocarStatus(tarefasAFazer, setTarefasAFazer)}>Fazer</button>
                <button onClick={() => handleTrocarStatus(tarefasFazendo, setTarefasFazendo)}>Fazendo</button>
                <button onClick={() => handleTrocarStatus(tarefasFeito, setTarefasFeito)}>Feito</button>
            </ModalContent>
        </Modal>
    )
}