import "./styles.css";

export interface SubMenuItem {
  title: string;
}

const Item = ({title}: SubMenuItem) => <button className="submenu-item"> {title} </button>

export { Item };