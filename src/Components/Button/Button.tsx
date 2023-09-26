
interface ButtonProps {
  text: string;
  buttonClick: (i: boolean) => void;
}

const Button = ({ text, buttonClick }: ButtonProps) => {
  return (
    <button
      onClick={() => {
        buttonClick(true)
      }}
    >
      {text}
    </button>
  );
};

export default Button;
