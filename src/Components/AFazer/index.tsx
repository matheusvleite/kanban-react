import { useState } from "react";
import { Card } from "../Card";
import { ModalTarefa } from "../ModalTarefa";

export const AFazer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <Card
                titulo="Fazer"
                cor="#E000FF"
                handleOpen={handleOpen}
            />
            <ModalTarefa
                handleClose={handleClose}
                open={open}
            />
        </>
    )
}