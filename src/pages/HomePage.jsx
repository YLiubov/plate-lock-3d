import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="intro-section">
      <h1>Plate Lock 3D</h1>
      <p>
        Et klik-system til tallerkener, udviklet til specialsteder. Tallerkenen
        kan klikkes fast til bordet, så den stadig kan bruges normalt, men ikke
        kastes.
      </p>
      <p><Link className="primary-link" to="/viewer">Åbn 3D-viewer →</Link></p>
    </section>
  );
}

export default HomePage;
