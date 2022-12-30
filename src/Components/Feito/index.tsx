import { useState } from "react";
import { Card } from "../Card"
import { ModalTarefa } from "../ModalTarefa";

export const Feito = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card
                titulo="Feito"
                cor="#00FF97"
                handleOpen={handleOpen}
            />
            <ModalTarefa
                handleClose={handleClose}
                open={open}
            />
        </>
    )
}