import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/button";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          check
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
