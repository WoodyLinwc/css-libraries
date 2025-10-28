import { Link } from "react-router";
import "../App.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/mui">Material UI</Link>
      <Link to="/antdesign">Ant Design</Link>
      <Link to="/chakraui">Chakra UI</Link>
      <Link to="/shadcnui">Shadcn UI</Link>
    </nav>
  );
};

export default Navigation;
