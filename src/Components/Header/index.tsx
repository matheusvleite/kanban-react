import { HeaderContainer, HeaderContent, HeaderLogo, Title } from "./styles";
import { FaTasks } from "react-icons/fa";
import { DataAtual } from "../DataAtual";

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderLogo>
                    <Title>
                        Lista de tarefas
                    </Title>
                    <FaTasks size={30} />
                </HeaderLogo>
                <DataAtual />
            </HeaderContent>
        </HeaderContainer>
    )
}