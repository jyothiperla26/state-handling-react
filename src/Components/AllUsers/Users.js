import UserHeader from './UserHeader';
import './Users.css';
import UsersList from './UsersList';

const usersData=[
      {
        id:1,
        name: "Anjali",
        role: "Developer",
        email: "anjali@everest.engineering",
      },
      {
        id:2,
        name: "Anjali",
        role: "Developer",
        email: "anjali@everest.engineering",
      },
      {
        id:3,
        name: "Anjali",
        role: "Developer",
        email: "anjali@everest.engineering",
      },
      {
        id:4,
        name: "Anjali",
        role: "Developer",
        email: "anjali@everest.engineering",
      },
      {
        id:5,
        name: "Anjali",
        role: "Developer",
        email: "anjali@everest.engineering",
      },
      {
        id:6,
        name: "Anjali",
        role: "Developer",
        email: "anjali@everest.engineering",
      }
]

function Users() {
  let selectedUsersData=null;

  const selectedUser = (id) => {
    selectedUsersData = usersData.filter((user) => user.id === id);
  };
  console.log(selectedUser);
  return (
    <>
       <UserHeader/>
       {usersData.map((user) => (
        <UsersList
          name={user.name}
          role={user.role}
          email={user.email}
          key={user.id}
          selectUser={() => selectedUser(user.id)}
        />
      ))}
    </>
  );
}

export default Users;