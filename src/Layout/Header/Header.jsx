import "./Header.css";

const Header = () => {
  return (
    <div className="container app__header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark customs__header">
        <div className="container-md block__app__title">
          <h1 className="app__title">Costs App</h1>
        </div>
      </nav>
    </div>
  );
};

export default Header;
