import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "components/Store/Context";
import "./Home.css";

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function sair(event) {
    event.preventDefault();
    setToken("");
    console.log('sair');
    return history.push('/login');
  }

  return (
    <div className="pages-home">
      Parabéns, você conseguiu!
      <br />
      <button type="button" onClick={sair}>
        Sair
      </button>
    </div>
  );
};
export default PagesHome;
