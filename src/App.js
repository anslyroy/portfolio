import React from "react";
import "./styles.css"; // Import the CSS file

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <h1>Ansly Roy</h1>
        <div>
        <a href="#projects">My Work</a>
        <a href="https://drive.google.com/file/d/1M-NA0sU8vVY6WkT9uXrv7hSi0zy9sbaR/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
    Resume
  </a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header   >
        <h2>WELCOME</h2>
        <h3>Hi, I'm Ansly Roy</h3>
        <p>a developer with a passion for creating responsive and user-friendly web applications. I enjoy building interactive interfaces that enhance user experience and make technology more accessible.</p>
      </header>


      {/* Projects Section */}
      <section id="projects">
        <h2 id="work">My Work</h2>
        <div className="projects-container">
        <div className="project-card">
           
            <div
              id="cropCarousel1" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/crop signin.png"className="d-block w-100"alt="Crop Image 1"/>
                </div>
                <div className="carousel-item">
                  <img src="images/crop login.png" className="d-block w-100" alt="Crop Image 2" />
                </div>
                <div className="carousel-item">
                  <img src="images/croppredict.png" className="d-block w-100" alt="Crop Image 3"/>
                </div>
                <div className="carousel-item">
                  <img src="images/cropyield.png" className="d-block w-100" alt="Crop Image 3"/>
                </div>
              </div>
              {/* Previous and Next Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#cropCarousel1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#cropCarousel1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h3>CROP RECOMMENDATION SYSTEM </h3>
            <p>A machine learning-based system designed to help farmers predict the most suitable crops to cultivate based on soil type, climatic conditions, and geographical location. This system analyzes key agricultural parameters and provides data-driven recommendations to maximize crop yield and profitability. Additionally, it offers fertilizer usage suggestions to enhance productivity.</p>
          
          </div>

          <div className="project-card">

            
          <div
              id="cropCarousel2" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/tutor1.png"className="d-block w-100"alt="Crop Image 1"/>
                </div>
                <div className="carousel-item">
                  <img src="images/tutor2.png" className="d-block w-100" alt="Crop Image 2" />
                </div>
                <div className="carousel-item">
                  <img src="images/tutor3.png" className="d-block w-100" alt="Crop Image 3"/>
                </div>
                <div className="carousel-item">
                  <img src="images/tutor4.png" className="d-block w-100" alt="Crop Image 3"/>
                </div>
              </div>
              {/* Previous and Next Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#cropCarousel2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#cropCarousel2" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <h3>PRIVATE TUTOR FINDER SYSTEM</h3>
            <p>A web-based platform designed to connect parents and students with private tutors based on their location, subject preferences, and mode of teaching (online/offline). The system features an intuitive search and filtering mechanism, allowing users to find suitable educators easily. It also provides tutor profiles with qualifications, experience, and availability details to streamline the selection process.</p>
            
          </div>

          <div className="project-card">

            
          <div id="cropCarousel3" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/car1.png"className="d-block w-100"alt="Crop Image 1"/>
                </div>
                <div className="carousel-item">
                  <img src="images/car2.png" className="d-block w-100" alt="Crop Image 2" />
                </div>
                <div className="carousel-item">
                  <img src="images/car3.png" className="d-block w-100" alt="Crop Image 3"/>
                </div>
              </div>
              {/* Previous and Next Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#cropCarousel3" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#cropCarousel3" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <h3>CAR BAY</h3>
            <p>A Progressive Web Application (PWA) for booking car workshop services and purchasing car spare parts online. The platform enables users to browse and compare car models, accessories, and repair services. It also includes a location-based search functionality to help users find nearby car workshops, ensuring a seamless and efficient booking experience.</p>
           
          </div>
          
          <div className="project-card">

            
<div
    id="cropCarousel4" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/heart1.png"className="d-block w-100"alt="Crop Image 1"/>
      </div>
      <div className="carousel-item">
        <img src="images/heart2.png" className="d-block w-100" alt="Crop Image 2" />
      </div>
      <div className="carousel-item">
        <img src="images/heart3.png" className="d-block w-100" alt="Crop Image 3"/>
      </div>
      <div className="carousel-item">
        <img src="images/heart4.png" className="d-block w-100" alt="Crop Image 3"/>
      </div>
    </div>
    {/* Previous and Next Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#cropCarousel4" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#cropCarousel4" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  <h3>PREDICTING HEART DISEASE AT EARLY STAGES </h3>
  <p>A machine learning-based system designed to predict heart disease risk using patient health data. By analyzing key medical parameters, the system helps in early detection of potential heart conditions, enabling timely medical intervention. The model provides accurate risk assessments and empowers users with valuable health insights.</p>
 
</div>

        </div>
      </section>

      


      {/* Contact Section */}
      <section id="contact" className="contact">
      <h2 id="work">Contact</h2>
      <div className="contact-card">
      <p>Phone: +91 9446521214</p>
        <p>Email: anslyroy01@gmail.com</p>
        
        <p>LinkedIn:http://www.linkedin.com/in/ansly-roy</p>
        </div>
        
      </section>

       {/* Footer Section */}
       <footer className="footer">
        <p>© {new Date().getFullYear()} Ansly Roy. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default App;
