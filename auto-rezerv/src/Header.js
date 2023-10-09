import "./App.css";
import {
  faCar,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Switch } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
function Head() {
  return (
    <header className="header">
      <div className="icon">
        <Button type="ghost" shape="circle" className="Car">
          <FontAwesomeIcon className="Ico" icon={faCar} />
        </Button>
        <p> Auto rezervācijas Sistēma</p>
      </div>
      <div className="right">
        <a>Sākums</a>
        <a>rezervācija</a>
        <a>Profils</a>
        <a href="/Login.js">
          <Button type="ghost" className="Log">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </Button>
        </a>
      </div>
    </header>
  );
}

export default Head;
