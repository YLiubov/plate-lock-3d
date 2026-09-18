import { Link, Outlet } from "react-router-dom";
import { Container } from "../styles/styled";

function Layout(props) {
  return (
    <Container>
      <header className="site-header">
        <Link className="brand" to="/">Plate Lock <span>3D</span></Link>
        <nav aria-label="Main navigation">
          <Link to="/">Hjem</Link>{" "}
          <Link to="/viewer">3D Viewer</Link>{" "}
          <Link to="/about">Om</Link>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      {props.children && <footer>{props.children}</footer>}
    </Container>
  );
}

export default Layout;
