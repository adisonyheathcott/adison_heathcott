import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer-div">
                <div id="footer-social">
                    <button id="social-button" onClick={(e) => {e.preventDefault(); window.location.href="https://www.linkedin.com/in/adison-heathcott-13958119b/"}}>
                        <FontAwesomeIcon id="social-icon" icon={['fab', 'linkedin']} size='2x'/>
                    </button>
                    <button id="social-button" onClick={(e) => {e.preventDefault(); window.location.href="https://github.com/adisonyheathcott"}}>
                        <FontAwesomeIcon id="social-icon" icon={['fab', 'github']} size='2x'/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Footer;