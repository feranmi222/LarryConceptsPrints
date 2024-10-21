import React, { useState } from 'react'; // Make sure to import useState
import './Cards.css';

// Import your local icons
import offset from '../../src/assets/icons/offset.png';
import large_format from '../../src/assets/icons/signage.png';
import packaging from '../../src/assets/icons/packaging.png';
import design from '../../src/assets/icons/design.png';
import photography from '../../src/assets/icons/photography.png';
import souvenir from '../../src/assets/icons/souvenir.png';
import consultancy from '../../src/assets/icons/consultancy.png';
import printer from '../../src/assets/icons/printer.png';
import security from '../../src/assets/icons/security.png';
import book from '../../src/assets/icons/book.png';
import vehicle from '../../src/assets/icons/vehicle.png';
import tshirt from '../../src/assets/icons/tshirt.png';
import descriptions from './cards.json'; // Assuming your JSON file is named cards.json

// Services array with icons and titles hardcoded
const services = [
  { id: 1, title: 'Offset printing', icon: offset },
  { id: 2, title: 'Large Format Printing', icon: large_format },
  { id: 3, title: 'Custom Packaging and Labels', icon: packaging },
  { id: 4, title: 'Sketch Designing', icon: design },
  { id: 5, title: 'Digital Photography', icon: photography },
  { id: 6, title: 'Branded Souvenir', icon: souvenir },
  { id: 7, title: 'Consultancy Services', icon: consultancy },
  { id: 8, title: 'Commercial Printing', icon: printer },
  { id: 9, title: 'Security Printing', icon: security },
  { id: 10, title: 'Book Printing', icon: book },
  { id: 11, title: 'Vehicle Branding', icon: vehicle },
  { id: 12, title: 'Textile and Clothing Branding', icon: tshirt }
];

// ServiceCard component receives props including onClick
const ServiceCard = ({ service, onClick }) => {
  return (
    <div className="service-card" onClick={() => onClick(service)}>
      <div className="service-icon">
        <img src={service.icon} alt={service.title} />
      </div>
      <div className="service-title">{service.title}</div>
    </div>
  );
};

const Cards = () => {
  const [selectedService, setSelectedService] = useState(null); // Store the selected service
  const [serviceDetails, setServiceDetails] = useState(null); // Store the selected service details

  // Handle click event to show details in modal
  const handleCardClick = (service) => {
    const selectedDescription = descriptions.find(desc => desc.id === service.id); // Find the matching description
    setSelectedService(service); // Set selected service
    setServiceDetails(selectedDescription ? selectedDescription.description : "No description available."); // Set service details
  };

  // Close the modal overlay
  const handleCloseOverlay = () => {
    setSelectedService(null); // Close the modal
    setServiceDetails(null); // Clear the service details
  };

  return (
    <div className="service-body">
      <div className="service-container">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} onClick={handleCardClick} />
        ))}
      </div>

      {/* Overlay (Modal) */}
      {selectedService && (
        <div className="overlays"> {/* Changed overlays to overlay */}
          <div className="overlay-content">
            <span className="close-btn" onClick={handleCloseOverlay}>
              &times;
            </span>
            <div className="modal-details">
              <h2>{selectedService.title}</h2>
              <img src={selectedService.icon} alt={selectedService.title} />
              <p className='text-services text-justify'>{serviceDetails}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
