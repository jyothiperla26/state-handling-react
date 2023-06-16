import './Header.css';

function Header({buttonClick}) {
  return (
    <div>
      <span className="span">Users</span>
      <button className="add-button" onClick={buttonClick}>Add</button>
    </div>
  );
}

export default Header;