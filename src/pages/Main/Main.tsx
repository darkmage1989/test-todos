import { useState } from "react";
import ModalWindow from "../../Components/ModalWindow/ModalWindow";
import ProjectList from "../../Components/ProjectList/ProjectList";
const Main = () => {
  const [modalProject, setModalProject] = useState(false);
  console.log(modalProject);
  function toggleModal() {
    setModalProject(!modalProject);
  }

  return (
    <div>
      <ProjectList modalProject={modalProject} setModal={toggleModal} />
      {modalProject === true ? <ModalWindow setModal={setModalProject}/> : null}
    </div>
  );
};

export default Main;
