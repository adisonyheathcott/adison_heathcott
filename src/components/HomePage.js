import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './About.js';
import Footer from './Footer.js';

class HomePage extends React.Component {    
    constructor() {
        super();
        this.state = {
            showNavBar: false
        };
    }

    componentDidMount() {
        document.title = "Adison Heathcott";
    }

    showNavBar = () => {
        this.setState({
            showNavBar: !this.state.showNavBar
        });
    };

    render() {
        return (
            <div id="homepage-div">
                <div id="top-display">
                    <div id="buffer-div"></div>

                    <div id="tinted-display">
                        <h1 id="name-text">Adison Heathcott</h1>
                        <p>| Computer Engineering | Software |</p>
                    </div>

                    <div id="social-div">
                        <div id="social-tinted">
                            <button id="navbar-button" onClick={this.showNavBar}>
                                <FontAwesomeIcon id="social-icon" icon={['fas', 'bars']} size='3x' style={{ transform: this.state.showNavBar ? "rotate(-90deg)" : "rotate(0deg)" }}/>
                            </button>
                            <button id="social-button" onClick={(e) => {e.preventDefault(); window.location.href="https://www.linkedin.com/in/adison-heathcott-13958119b/"}}>
                                <FontAwesomeIcon id="social-icon" icon={['fab', 'linkedin']} size='3x'/>
                            </button>
                            <button id="social-button" onClick={(e) => {e.preventDefault(); window.location.href="https://github.com/adisonyheathcott"}}>
                                <FontAwesomeIcon id="social-icon" icon={['fab', 'github']} size='3x'/>
                            </button>
                        </div>

                        <div id="nav-menu" style={{ display: this.state.showNavBar ? "inline-flex" : "none" }}>
                            <Link to="/adison_heathcott/posts">
                                <button id="nav-button">
                                    Posts
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <About/>

                <Footer/>
            </div>
        );
    }
}

export default HomePage;