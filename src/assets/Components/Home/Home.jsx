import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import "./Home.css";

const Home = () => {
  const [selectedService, setSelectedService] = useState("");

  const openBookingForm = (service) => {
    setSelectedService(service);
    
  };

  
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="home">
      <div className="home-nav">
        <div className="navMenu" onClick={toggleSidebar}>
          <IoMdMenu />
        </div>
        <div className="navinfo">
          <h1>ExpertHome Solution</h1>
          <p>Your One-Stop platform for home maintenance services</p>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <IoMdArrowBack onClick={toggleSidebar} className="close-icon" />
          <h1>ExpertHome Solution</h1>
          <p>
            (EHS) is your ultimate platform for all home
            maintenance needs, connecting you with skilled professionals in
            various trades. Our mission is to make home maintenance
            effortless and accessible, providing peace of mind through trusted
            expertise and excellent customer care.
          </p>
        </div>
        <div className="sidebar-content">
          <button className="signin-button">Signin Service Seeker</button>
          <button className="signin-button">Signin Service Provider</button>
        </div>
      </div>

      <div className="home-hero">
        <img src="/pictures/workers.jpg" alt="work" />
        <p>Bringing Local Skills to Your Doorstep!</p>
      </div>

      <div className="home-search">
        <input type="text" placeholder="Search..." className="search-input" />
        <select className="search-options">
          <option value="rating">Search by Rating</option>
          <option value="availability">Search by Availability</option>
          <option value="location">Search by Location</option>
        </select>
        <button className="search-button">Search</button>
      </div>

      <div className="services">
        <div className="service" onClick={()=> openBookingForm("Electrician")}>
          <div className="right">
            <img src="/pictures/electrician.jpg" alt="Electrician" />
          </div>
          <div className="info">
            <h1>Find an Electrician</h1>
            <p>
              Get reliable electricians for all your electrical issues, from
              wiring to installations. Fast and efficient service, right at your
              doorstep.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="right">
            <img src="/pictures/carpenter.jpg" alt="Carpenter" />
          </div>
          <div className="info">
            <h1>Get a Carpenter</h1>
            <p>
              Need furniture repairs or custom woodwork? Our expert carpenters
              can help you with all your wood-related needs, from doors to
              tables.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="right">
            <img src="/pictures/plumber.png" alt="Plumber" />
          </div>
          <div className="info">
            <h1>Hire a Plumber</h1>
            <p>
              Expert plumbers available for leak repairs, pipe installations,
              and more. Get quick assistance for all your plumbing needs.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="right">
            <img src="/pictures/cleaner.png" alt="Cleaner" />
          </div>
          <div className="info">
            <h1>Get a Cleaner</h1>
            <p>
              Whether it's a deep cleaning or routine housekeeping, our
              professional cleaners ensure your space is spotless and fresh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
