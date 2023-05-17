import { ButtonPry } from "../../functional/buttons/Buttons";

const Goals = () => {
  return (
    <div>
      <div className="heading-buttons">
        <ButtonPry title="Daily" />
        <ButtonPry title="Weekly" />
        <ButtonPry title="Monthly" />
      </div>
    </div>
  );
};

export default Goals;
