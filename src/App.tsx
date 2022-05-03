interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

function App() {
  return (
    <div className="App">
      <Button text="ok" />
      <Button text="console log" />
    </div>
  );
}

export default App;
