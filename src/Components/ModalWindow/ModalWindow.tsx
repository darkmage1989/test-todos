import { useState } from "react";
import Button from "../Button/Button";
interface ModalWindowProps {
    setModal:(i: boolean) => void;
}
const ModalWindow = ({setModal}:ModalWindowProps) => {
  
    const [inputValue, setInputValue] = useState('')
  function test() {
    setModal(false)
  }
  return (
    <div>
      <div>
        <label htmlFor="projectName">Название проекта</label>
        <input onChange={(event)=>{setInputValue(event.target.value)}} name="projectName" type="text" />
      </div>

      <div>
        <Button text={"Добавить проект"} buttonClick={test} />
      </div>
    </div>
  );
};

export default ModalWindow;
