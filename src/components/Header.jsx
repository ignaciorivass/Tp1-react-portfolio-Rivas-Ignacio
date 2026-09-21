const Header = ({ nombre, profesion }) => {


    
  return (
    <header className="header">
      <h1>{nombre}</h1>
      <p>{profesion}</p>
    </header>
  );
}

export default Header;