import { useState } from 'react';
import { Table } from '../Table';
import './styles.css';

export interface User {
  id: number;
  name: string;
}

const UserList = () => {
  
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Matheus Anzzulin"
    },
    {
      id: 2,
      name: "André Apolaro"
    },
    {
      id: 3,
      name: "Carol Bona"
    },
  ]);

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

  const rows = [
    [
      {
        field: "Id",
        value: "1"
      },
      {
        field: "Name",
        value: "Matheus Anzzulin"
      },
    ],
    [
      {
        field: "Id",
        value: "2"
      },
      {
        field: "Name",
        value: "André Apolaro"
      },
    ],
    [
      {
        field: "Id",
        value: "3"
      },
      {
        field: "Name",
        value: "Carol Bona"
      },
    ],
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

  return (

    <div className="userlist-container">
      <span className="userlist-title"> User List </span>
      <Table 
        className="userlist-table"
        headers={tableHeaders}
        rows={rows}
        columnSpacing={columnSpacing}
      />
    </div>
  )
}  

export { UserList };