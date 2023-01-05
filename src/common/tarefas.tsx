import { createContext, ReactNode, useState } from "react";
import { ITarefas } from "../interfaces/tarefas";

interface Props {
    children: ReactNode
}

interface TarefaContext {
    tarefasAFazer: ITarefas[]
    tarefasFazendo: ITarefas[]
    tarefasFeito: ITarefas[]
    setTarefasAFazer: React.Dispatch<React.SetStateAction<ITarefas[]>>
    setTarefasFazendo: React.Dispatch<React.SetStateAction<ITarefas[]>>
    setTarefasFeito: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

export const Tarefas = createContext({} as TarefaContext);

export const TarefasProvider = ({ children }: Props) => {
    const [tarefasAFazer, setTarefasAFazer] = useState<ITarefas[]>([]);
    const [tarefasFazendo, setTarefasFazendo] = useState<ITarefas[]>([]);
    const [tarefasFeito, setTarefasFeito] = useState<ITarefas[]>([]);
    return (
        <Tarefas.Provider
            value={{
                setTarefasAFazer,
                setTarefasFazendo,
                setTarefasFeito,
                tarefasAFazer,
                tarefasFazendo,
                tarefasFeito
            }}>
            {children}
        </Tarefas.Provider>
    )
}