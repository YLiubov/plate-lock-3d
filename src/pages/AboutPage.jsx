function AboutPage() {
  return (
    <section>
      <h1>Om projektet</h1>
      <p>
        Plate Lock 3D er en interaktiv visualisering af et bayonet-system, hvor
        en tallerken fastgøres til et bord ved at dreje den 30 grader.
      </p>
      <h2>Teknologier</h2>
      <p>
        Projektet er bygget med Vite, React, React Router, styled-components,
        A-Frame 1.8.0 og glTF (.glb)-modeller.
      </p>
      <h2>PDF-kontekst</h2>
      <p>
        Data hentes via <code>fetch()</code> fra <code>/api/models.json</code>.
        Visualiseringen gør det lettere at forstå prototypen før fysisk
        fremstilling.
      </p>
    </section>
  );
}

export default AboutPage;
