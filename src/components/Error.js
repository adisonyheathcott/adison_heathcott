import React from 'react';

class Error extends React.Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor: '#fff', height: '100vh', display: 'flex'}}>
                    <h2 style={{textAlign: 'center', color: 'black', justifyContent: 'center', fontSize: '2rem', alignSelf: 'center', width: '100vw'}}>Oops, this page does not exist.</h2>
                </div>
            </div>
        );
    }
}

export default Error;