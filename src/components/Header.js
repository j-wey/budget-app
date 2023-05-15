import {
  NavItem,
  Navbar,
  Nav,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar>
        <select>
          <option selected>Monthly</option>
          <option>Annual</option>
        </select>
        <div>
          <i className="fa fa-solid fa-caret-left" />
          <select>
            <option>JAN</option>
            <option>FEB</option>
            <option>MAR</option>
            <option>APR</option>
            <option>MAY</option>
            <option>JUN</option>
            <option>JUL</option>
            <option>AUG</option>
            <option>SEP</option>
            <option>OCT</option>
            <option>NOV</option>
            <option>DEC</option>
          </select>
          <i className="fa fa-solid fa-caret-right" />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
            <div>ModeToggler</div>
            <div>ProfileSection/Login</div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;