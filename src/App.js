import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-wrap content-between bg-[#ddd]">
      <div className="w-full">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
