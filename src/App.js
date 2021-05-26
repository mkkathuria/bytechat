import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app borderbb">
      <div className="app_body border">
        <Sidebar></Sidebar>
        <Chat> </Chat>
      </div>
    </div>
  );
}

export default App;
