import './Header.css';

function Header({buttonClick}) {
  return (
    <div>
      <span className="span">Users</span>
      <button className="addButton" onClick={buttonClick}>Add</button>
    </div>
  );
}

export default Header;