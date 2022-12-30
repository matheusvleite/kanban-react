import Modal from "@mui/material/Modal";
import { ModalContent } from "./styles";

interface Props {
    handleClose: () => void
    open: boolean
}

export const ModalTarefa = ({ handleClose, open }: Props) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <ModalContent>
                <input type="text" name="Tarefa" id="tarefa" />
                <button>Adicionar</button>
            </ModalContent>
        </Modal>
    )
}