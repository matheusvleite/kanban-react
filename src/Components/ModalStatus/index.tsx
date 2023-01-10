import { Modal } from "@mui/material"
import { ModalContent } from "../ModalTarefa/styles"

interface Props {
    open: boolean
    onClose: () => void
}

export const ModalStatus = ({ open, onClose }: Props) => {

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <ModalContent>

            </ModalContent>
        </Modal>
    )
}