import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>My To Do App</h1>
      </Link>
      <div className="links">
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "8px",
          }}
        >
          New!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
