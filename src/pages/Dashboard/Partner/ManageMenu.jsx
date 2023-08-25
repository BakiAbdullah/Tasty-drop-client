import useUsers from "../../../Hooks/useUsers";

const ManageMenu = () => {
  const { usersData } = useUsers()
  console.log(usersData)
  return <div>Manage item page</div>;
};

export default ManageMenu;
