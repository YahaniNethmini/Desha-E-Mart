import React from "react";
import Logo from '../assets/Logo.jpg';
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div className="homepage-container">
            <table className="homepage-table">
                <tbody>
                    <tr>
                        <td className="logo-column">
                            <div className="logo">
                                <img src={Logo} alt="Logo" className="logo-image" />
                            </div>
                        </td>
                        <td className="text-column">
                            <div className="text">
                                <h1 className="text-decoration">Welcome to the Desha E-Mart</h1>
                                <h4 className="text-decoration">Already have an account?</h4>
                                <button className="button">Log In</button>
                                <h4 className="text-decoration">Don't have an account?</h4>
                                <button className="button">Sign Up</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default HomePage;
