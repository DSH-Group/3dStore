import './Header.css';
import SearchBar from './Components/SearchBar.js';
import ObjData from './3dObj-data.json';


function Header() {
  return (
    <div>
    <SearchBar placeholder="Search" data={ObjData}/>
    </div>
  );
}

export default Header;
