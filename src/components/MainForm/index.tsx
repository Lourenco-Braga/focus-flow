import { PlayCircle } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/Home";

export function MainForm ({ state, setState }: HomeProps) {

    function handleClick () {
      setState(prevState => {
        return {
          ...prevState,
          config: {
            ...prevState.config,
            workTime: 34
          },
          formattedSecondsRemaining: "23:34",
        };
      });
    }

    return (
        <form className="form" action="">
          <div>
            <button type="button" onClick={handleClick}>Clicar</button>
          </div>
          <div className="formRow">
            <DefaultInput labelText="Task" id="menuInput" type="text" placeholder="Digite o nome da tarefa..." />
          </div>

          <div className="formRow">
            <p>O próximo intervalo é de {state.config.workTime}min.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircle/>} color="green" />
          </div>
        </form>
    )
}