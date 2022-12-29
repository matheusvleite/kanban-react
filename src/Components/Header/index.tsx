import { HeaderContainer, HeaderContent, Title } from "./styles";
import { FaTasks } from "react-icons/fa";

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Title>
                    Lista de tarefas
                </Title>
                <FaTasks size={30}/>
            </HeaderContent>
        </HeaderContainer>
    )
}