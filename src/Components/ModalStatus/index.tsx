import { Modal } from "@mui/material"
import { useContext } from "react"
import { Tarefas } from "../../common/tarefas"
import { ITarefas } from "../../interfaces/tarefas"
import { ModalContent } from "../ModalTarefa/styles"
import { Button, ContainerButtons } from "./styles"
import { FaExchangeAlt } from "react-icons/fa"

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

    const buttons = [
        { id: 1, label: 'Fazer', icon: <FaExchangeAlt />, tarefa: tarefasAFazer, dispatch: setTarefasAFazer },
        { id: 2, label: 'Fazendo', icon: <FaExchangeAlt />, tarefa: tarefasFazendo, dispatch: setTarefasFazendo },
        { id: 3, label: 'Feito', icon: <FaExchangeAlt />, tarefa: tarefasFeito, dispatch: setTarefasFeito }
    ]

    const handleTrocarStatus = (tarefa: ITarefas[], setTarefa: React.Dispatch<React.SetStateAction<ITarefas[]>>) => {
        if (tarefaMudar) {
            const tarefaExistente = tarefa.find(item => item.id === tarefaMudar.id)
            if (tarefaExistente) {
                return alert('Essa tarefa ja está no card!')
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
                <ContainerButtons>
                    {buttons.map(item => (
                        <Button
                            key={item.id}
                            onClick={() => handleTrocarStatus(item.tarefa, item.dispatch)}
                        >
                            {item.label}
                            {item.icon}
                        </Button>
                    ))}
                </ContainerButtons>
            </ModalContent>
        </Modal>
    )
}