import "./App.css";
import MatrixEagleLanding from "./components/MatrixEagleLanding.tsx";
import "./i18n";
function App() {
  return (
    <div className=" bg-[url('/matrix_bg.svg')] bg-contain min-w-screen ">
      <div className="relative z-10 text-white flex items-center justify-center h-full bg-black/26">
        <MatrixEagleLanding />
      </div>
    </div>
  );
}

export default App;
