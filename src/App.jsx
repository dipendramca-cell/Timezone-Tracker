import Clockheding from "./components/Clockheding";
import Currentime from "./components/Currentime";
import Contener from "./components/contener";

function App() {
  return (
    <div className=" capitalize flex justify-center">
      <div className="text-center">
        <Contener>
          <Clockheding />
          <Currentime />
        </Contener>
      </div>
    </div>
  );
}
export default App;
