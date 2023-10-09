import "./App.css";
import Head from "./Header";

function App() {
  function showDiv() {
   document.getElementById('Registration').style.display = "block";
}
  return (
    <div className="background">
      <Head />
      <div className="registr">
        <div className="window">
          <p>Laipni lūdzam!</p>
          <div className="box">
            <a>Ielogoties</a>
            <a>Reģistrēties</a>
          </div>
          <a className="elem">Viesis</a>
        </div>
      </div>
    </div>
  );
}

export default App;
