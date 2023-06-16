
import './UsersList.css';

function UsersList({name,role,email,isChecked,key,selectUser}) {
  
  return (
    <div className="users-container">
        <div className="margin-right"><h4>{name}</h4></div>
        <div className="margin-right"><p>{role}</p></div>
        <div className="margin-right"><p>{email}</p></div>
        <div className="margin-right"><input type="checkbox" onClick={selectUser}/></div>
    </div>
  );
}

export default UsersList;