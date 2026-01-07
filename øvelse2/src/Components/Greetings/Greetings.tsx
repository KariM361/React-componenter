interface GreetingsProps {
  textValue: string;
}
function Greeting({textValue}: GreetingsProps) {
  return (
    <p>Hej {textValue}!</p>
  );
}

export default Greeting;