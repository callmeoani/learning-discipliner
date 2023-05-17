import "./Buttons.css";

type ButtonProps = {
  title: string;
};

export const ButtonPry = (props: ButtonProps) => {
  return <button className="button-pry ">{props.title}</button>;
};
