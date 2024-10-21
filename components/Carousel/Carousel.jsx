// Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css';
import image1 from '../../src/assets/images/hero-bg1.webp';
import image2 from '../../src/assets/images/hero-bg2.jpg'
import image3 from '../../src/assets/images/hero-bg3.jpg';
import image4 from '../../src/assets/images/hero-bg4.jpg'
import { Link } from 'react-router-dom';
// Array of images, text descriptions, and buttons for each slide
const slides = [
    {
        image: image1,
        text: 'Cutting-Edge Printing Solutions for Modern Businesses',
        button1: { label: 'Our Services', link: '#learn-more-1' },
        button2: { label: 'Get A Quote', link: '#buy-now-1' }
    },
    {
        image: image2,
        text: 'Shaping Innovative Branding With Cutting-Edge Technology ',
        button1: { label: 'Our Services', link: '#learn-more-2' },
        button2: { label: 'Get A Quote', link: '#buy-now-2' }
    },
    {
        image: image3,
        text: 'Innovative Design Solutions That Transform Ideas into Reality',
        button1: { label: 'Our Services', link: '#learn-more-3' },
        button2: { label: 'Get A Quote', link: '#buy-now-3' }
    },
    {
        image: image4,
        text: 'Captivating Signage That Leaves a Lasting Impression.',
        button1: { label: 'Our Services', link: '#learn-more-4' },
        button2: { label: 'Get A Quote', link: '#buy-now-4' }
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change image every 5000 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="carousel-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
            ))}
            <div
                className="carousel-image"
                style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            ></div>
            <div className="carousel-content">
                <h2>{slides[currentIndex].text}</h2>
                <div className="carousel-buttons">
                    <a className="carousel-btn">
                        <Link to="/services">
                            {slides[currentIndex].button1.label}
                        </Link>
                    </a>
                    <a className="carousel-btn">
                        <Link to="/quotes">
                            {slides[currentIndex].button2.label}
                        </Link>
                    </a>
                </div>
            </div>
            <div className="carousel-controls">
                <button className="previous-button" onClick={goToPrevious}>
                    ‹
                </button>
                <button className="next-button" onClick={goToNext}>
                    ›
                </button>
            </div>
        </div>
    );
};

export default Carousel;
