import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.overlay}>
                <h1 className={styles.title}>Ride the Thrill</h1>
                <p className={styles.subtitle}>Experience the freedom of the open road with our premium sport bike rentals.</p>
                <a href="/rentals" className={styles.ctaButton}>Book Now</a>
            </div>
        </div>
    );
};

export default Hero;