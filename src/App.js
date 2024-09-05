import React, { Suspense, lazy } from 'react';
import './App.css';

// Cargar el componente About de manera perezosa (lazy loading)
const About = lazy(() => import('./About'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a Mi Aplicación React</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="#about">Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container">
        {/* Componente About cargado con lazy y Suspense */}
        <Suspense fallback={<div>Cargando...</div>}>
          <About />
        </Suspense>

        <section id="services" className="my-5">
          <h2 className="text-center">Nuestros Servicios</h2>
          <ul className="list-group">
            <li className="list-group-item">Desarrollo Web</li>
            <li className="list-group-item">Aplicaciones Móviles</li>
            <li className="list-group-item">Optimización SEO</li>
          </ul>
        </section>

        <section id="contact" className="my-5">
          <h2 className="text-center">Contáctanos</h2>
          <form id="contactForm" className="text-center">
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea className="form-control" id="message" name="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </section>
      </main>

      <footer className="bg-dark text-white text-center p-3">
        <p>&copy; 2024 Mi Aplicación React. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
