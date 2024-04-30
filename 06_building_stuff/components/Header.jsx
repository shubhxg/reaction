export default Header = () => {
  return (
    <header className="header flex-sa">
      <div className="logo">
        <div className="logocontainer">
          <img
            className="logo"
            src="https://www.thefoodaholic.co.uk/wp-content/uploads/2014/05/MgJ-nIJ2.png"
            alt="Logo"
          />
        </div>
      </div>
      <div className="nav-items">
        <ul className="flex-sa">
          <li>Home</li>
          <li>Login</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};