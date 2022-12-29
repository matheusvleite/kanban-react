import { ButtonAdd, CardContainer, ContentAdd, Icones, ItemCard, TarefasCard, TitleCard } from "./styles";
import { FaTrashAlt, FaEdit, FaExchangeAlt } from "react-icons/fa"
import { CgAdd } from "react-icons/cg"

interface Props {
    titulo: string
    cor: string
}

export const Card = ({ titulo, cor }: Props) => {
    return (
        <CardContainer cor={cor}>
            <TitleCard>
                {titulo}
            </TitleCard>
            <TarefasCard>
                <ItemCard>
                    <div>
                        <span>
                            Estudar JavaScript
                        </span>
                        <p>
                            Adicionado em: 12/22/22
                        </p>
                    </div>
                    <Icones>
                        <FaTrashAlt
                            title="Apagar" />
                        <FaEdit
                            title="Editar" />
                        <FaExchangeAlt
                            title="Mudar tarefa" />
                    </Icones>
                </ItemCard>
            </TarefasCard>
            <ContentAdd>
                <ButtonAdd>
                    Adicionar a {titulo}
                </ButtonAdd>
                <CgAdd />
            </ContentAdd>
        </CardContainer>
    )
}