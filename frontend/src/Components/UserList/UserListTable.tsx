import { DeleteUser } from "../../api/UserManager";
import { useUsers } from "../../hooks/useUsers";
import { toCapitalLetter } from "../../util";
import { Table } from "../Table";


const UserListTable = () => {
  const { users, isLoading, error, dispatch } = useUsers();

  const tableHeaders = [
    {
      field: "Id",
      value: "Id"
    },
    {
      field: "Name",
      value: "Name"
    }
  ]
  
  const columnSpacing = [
    {
      field: "Id",
      value: "138px"
    },
    {
      field: "Name",
      value: "100%"
    },
  ]

  const rows = users.map(user => Object.entries(user).map(([key,value]) => ({
      field: toCapitalLetter(key),
      value
    })
  ))

  if(isLoading){
    return <div> Loading...</div>
  }

  if(error){
    return <div> An error occurred</div>
  }

  return (
    <Table 
      className="userlist-table"
      headers={tableHeaders}
      rows={rows}
      columnSpacing={columnSpacing}
      isDeletable={true}
      onDelete={(id) => DeleteUser(dispatch, id)}
    />
  )
}

export { UserListTable };

