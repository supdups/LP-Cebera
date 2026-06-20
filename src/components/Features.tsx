import React from 'react';

const Features: React.FC = () => {
    return (
        <section className="features">
            <div className="container">
                <h2>Why Choose Us?</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <h3>High-Performance Bikes</h3>
                        <p>Experience the thrill of riding our top-of-the-line sport bikes, designed for speed and agility.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Flexible Rental Options</h3>
                        <p>Choose from hourly, daily, or weekly rentals to suit your needs and schedule.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Safety First</h3>
                        <p>All our bikes come with safety gear and a thorough safety check before every rental.</p>
                    </div>
                    <div className="feature-item">
                        <h3>24/7 Support</h3>
                        <p>Our team is available around the clock to assist you with any questions or concerns.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;