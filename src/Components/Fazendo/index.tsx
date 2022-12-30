import { useState } from "react";
import { Card } from "../Card"
import { ModalTarefa } from "../ModalTarefa";

export const Fazendo = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <Card
                titulo="Fazendo"
                cor="#06BFF0"
                handleOpen={handleOpen}
            />
            <ModalTarefa
                handleClose={handleClose}
                open={open}
            />
        </>
    )
}