import { createContext, ReactNode, useState, SetStateAction } from "react";
import { ITarefas } from "../interfaces/tarefas";

interface Props {
    children: ReactNode
}

interface TarefaContext {
    tarefasAFazer: ITarefas[],
    tarefasFazendo: ITarefas[],
    tarefasFeito: ITarefas[],
    setTarefasAFazer: React.Dispatch<SetStateAction<ITarefas[]>>,
    setTarefasFazendo: React.Dispatch<SetStateAction<ITarefas[]>>,
    setTarefasFeito: React.Dispatch<SetStateAction<ITarefas[]>>,
}

export const Tarefas = createContext<TarefaContext>({} as TarefaContext);

export const TarefasProvider = ({ children }: Props) => {
    
    const pegarTarefaDoStorage = (tarefa: string) => {
        return JSON.parse(localStorage.getItem(tarefa)!) || []
    }

    const [tarefasAFazer, setTarefasAFazer] = useState<ITarefas[]>(pegarTarefaDoStorage('tarefasAFazer'));
    const [tarefasFazendo, setTarefasFazendo] = useState<ITarefas[]>(pegarTarefaDoStorage('tarefasFazendo'));
    const [tarefasFeito, setTarefasFeito] = useState<ITarefas[]>(pegarTarefaDoStorage('tarefasFeito'));

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