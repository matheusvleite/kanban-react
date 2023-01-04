import { Button } from "./styles"

interface Props {
    type?: 'submit' | 'button'
    onClick?:  React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonCancelar = ({type, onClick}: Props) => {
    return (
        <Button type={type} onClick={onClick}>Cancelar</Button>
    )
}