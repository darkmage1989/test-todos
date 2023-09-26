import Button from "../Button/Button";
interface ProjectListProps {
  setModal: (i: boolean) => void;
  modalProject: boolean;
}
const ProjectList = ({ setModal, modalProject }: ProjectListProps) => {
  return (
    <div>
      <span>Тут кароч список проектов</span>
      <div>
        <Button
          buttonClick={setModal}
          text={modalProject === false ? "Добавить проект" : "Отменить"}
        />
      </div>
    </div>
  );
};

export default ProjectList;
