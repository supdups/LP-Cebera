import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign: 'center' }}>
            <div>
                <h4>Contact Us</h4>
                <p>Email: info@sportbikerental.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div>
                <h4>Follow Us</h4>
                <a href="#" style={{ color: 'red', margin: '0 10px' }}>Facebook</a>
                <a href="#" style={{ color: 'red', margin: '0 10px' }}>Instagram</a>
                <a href="#" style={{ color: 'red', margin: '0 10px' }}>Twitter</a>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Sport Bike Rental. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;