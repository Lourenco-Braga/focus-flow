import { PlayCircle } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";

export function MainForm() {

  const [taskName, setTaskName] = useState("");

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Task"
          id="menuInput"
          type="text"
          placeholder="Digite o nome da tarefa..."
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
      </div>

      <div className="formRow">
        <p>O próximo intervalo é de 25min.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircle />} color="green" />
      </div>
    </form>
  );
}
