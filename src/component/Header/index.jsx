import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { navList } from "../../utils/constant";
import {AppleOutlined} from '@ant-design/icons'

import "./style.css";
const Header = () => {
  const navListing = () => {
    return (navList || []).map((value, index) => {
      return (
        <Nav.Item className="p-2 "> 
          <Link className="text-color"  to={value?.navTo}>
            {value?.name}
          </Link>
        </Nav.Item>
      );
    });
  };

  return (
    <div className="ac-globalnav d-flex align-self-center">
      <Nav activeKey="/"><Nav.Item>
      
      <Link to='/' className="p-3 text-color" >
      <AppleOutlined  />
          </Link>
        </Nav.Item> 
        {navListing()}</Nav>
    </div>
  );
};

export default Header;
