import logo from "./logo.svg"
import "./App.css"
import { useState, useEffect } from "react"

function App() {
  const [cars] = useState([
    {
      name: "Tesla Model S Plaid",
      price: "129,999",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      specs: ["0-60mph: 1.99s", "396mi Range", "1,020hp"],
      contact: "sales@tesla.com",
    },
    {
      name: "Porsche 911 GT3",
      price: "179,999",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
      specs: ["4.0L Flat-6", "502hp", "6-speed Manual"],
      contact: "porsche@example.com",
    },
  ])

  const [showModal, setShowModal] = useState(false)
  const [selectedCar, setSelectedCar] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const showCarModal = (car) => {
    setSelectedCar(car)
    setShowModal(true)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  return (
    <div>
      <header>
        <div className="logo">AUTONATION</div>
        <nav className="nav-links">
          <div>dsdfsvcvxd</div>
          <a href="#home">Home</a>
          <a href="#market">Sell</a>
          {!isLoggedIn ? (
            <a href="#login" onClick={handleLogin}>
              Login
            </a>
          ) : (
            <a href="#profile" id="profileBtn">
              <i className="fas fa-user"></i>
            </a>
          )}
        </nav>
      </header>

      <section className="hero">
        <h1 className="hero-title">Revolutionizing Car Trade</h1>
        <p className="hero-subtitle">
          Discover, Buy, and Sell Premium Vehicles
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search makes, models, or keywords..."
          />
          <button>Search</button>
        </div>
      </section>

      <section id="car-list" className="car-grid">
        {cars.map((car) => (
          <div key={car.name} className="car-card">
            <div
              className="car-image"
              style={{ backgroundImage: `url(${car.image})` }}
            >
              <div className="car-price">${car.price}</div>
            </div>
            <div className="car-info">
              <h3>{car.name}</h3>
              <div className="specs">
                {car.specs.map((spec, index) => (
                  <span key={index}>{spec}</span>
                ))}
              </div>
              <button onClick={() => showCarModal(car)}>View Details</button>
            </div>
          </div>
        ))}
      </section>

      {showModal && selectedCar && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <div id="carModalContent">
              <h2>{selectedCar.name}</h2>
              <div
                className="car-image"
                style={{ backgroundImage: `url(${selectedCar.image})` }}
              ></div>
              <div className="specs">
                {selectedCar.specs.map((spec, index) => (
                  <span key={index}>{spec}</span>
                ))}
              </div>
              <p>Seller Contact: {selectedCar.contact}</p>
              <button>Make Offer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
