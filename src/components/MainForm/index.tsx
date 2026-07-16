import { PlayCircle } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm () {

    return (
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput labelText="Task" id="menuInput" type="text" placeholder="Digite o nome da tarefa..." />
          </div>

          <div className="formRow">
            <p>O próximo intervalo é de 25min.</p>
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