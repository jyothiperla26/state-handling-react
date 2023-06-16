import CheckedUsers from './CheckedUsers';
import UserHeader from './UserHeader';
import './Users.css';
import UsersList from './UsersList';
import React, { useState } from "react";

const usersData=[
      {
        id:1,
        name: "Anjali",
        role: "Developer",
        email: "anjali@everest.engineering",
        isChecked:false
      },
      {
        id:2,
        name: "Ankush",
        role: "Designer",
        email: "ankush@everest.engineering",
        isChecked:false
      },
      {
        id:3,
        name: "Pragya",
        role: "Designer",
        email: "pragya@everest.engineering",
        isChecked:false
      },
      {
        id:4,
        name: "Mukesh",
        role: "Team lead",
        email: "mukesh@everest.engineering",
        isChecked:false
      },
      {
        id:5,
        name: "Harika",
        role: "Developer",
        email: "harika@everest.engineering",
        isChecked:false
      },
      {
        id:6,
        name: "Syamala",
        role: "Developer",
        email: "syamala@everest.engineering",
        isChecked:false
      },
      {
        id:7,
        name: "Vijay",
        role: "Developer",
        email: "vijay@everest.engineering",
        isChecked:false
      },
      {
        id:8,
        name: "Sowmya",
        role: "Developer",
        email: "sowmya@everest.engineering",
        isChecked:false
      }

]

function Users() {
  let selectedUsersData=null;
  const [checkedData, setCheckedData] = useState([]);
  const [display, setDisplay] = useState(true);
  
  const selectedUser = (id) => {
     usersData.map((user) => {
        if(user.id===id){
          return user.isChecked=true;
        }
     });
  };
  
  const setSelectedData=()=>{
    selectedUsersData = usersData.filter((user) => user.isChecked === true);
    setCheckedData(selectedUsersData);
    setDisplay(false);
  }

  return (
    <div className="usersList">
       {display?<UserHeader/>:""}
        {display?usersData.map((user) => (
        <UsersList
          className={display}
          name={user.name}
          role={user.role}
          email={user.email}
          isChecked={user.isChecked}
          key={user.id}
          selectUser={()=>{selectedUser(user.id)}}
        />
      )):""}
      {display?<div className="buttons-align">
        <button className="cancel-button">Cancel</button>
        <button className="add-users-button" onClick={setSelectedData}>Add Users</button>
      </div>:""}
      {checkedData.map((user) => (
        <CheckedUsers
          name={user.name}
          role={user.role}
          email={user.email}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default Users;