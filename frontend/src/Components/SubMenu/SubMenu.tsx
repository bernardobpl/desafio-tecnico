import { useMemo } from 'react';
import { Item, SubMenuItem } from './Item';
import './styles.css'

const SubMenu = () => {
  const subMenuItems = useMemo<SubMenuItem[]>(()=>[1,2,3,4].map(item => ({title: "Useless item"})),[])

  return (
    <div className="submenu-container">
      {
        subMenuItems.map(({title}) => <Item title={title}/>)
      }
    </div>
  )
}

export { SubMenu };