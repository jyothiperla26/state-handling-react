import './CheckedUsers.css';

function CheckedUsers({name,role,email,key}) {
  
  return (
    <div className="checked-user-container">
        <div className="checked-margin-right"><h4>{name}</h4></div>
        <div className="checked-margin-right"><p>{role}</p></div>
        <div className="checked-margin-right"><p>{email}</p></div>
    </div>
  );
}

export default CheckedUsers;