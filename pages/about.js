import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div id="about-display">
                <h3>ABOUT</h3>
                <p id="about-tags"><b>Education: </b>Bachelors in Computer Engineering - Tennessee Tech University</p>
                <p id="about-tags"><b>Programming Languages: </b>C, C++, Assembly, Java, C#, Lua, Javascript.</p>
                <p id="about-tags"><b>Job: </b>Student</p>
                <p id="about-tags"><b>Email: </b>ayheathcott@outlook.com</p>
                <p id="about-text">
                    {/* Adison Heathcott is a student at Tennessee Tech University seeking a Bachelors in Computer Engineering.
                    After completing his degree he plans to continue his education by pursuing a masters degree in Quantum Computing.
                    <br/>
                    <br/>
                    On top of pursuing his degree Adison has also been programming since 2013. During his projects over the years he has gained proficiencies in
                    C, C++, Java, Assembly, C#, HTML, CSS, Javascript, and many libraries. Some of his projects have been in Operating System Development, 
                    Game Engine Development with Vulkan and OpenGL, WPF, React Native, React based Websites, VS Code addons, and many more. */}
                    Adison Heathcott is student at Tennessee Tech University seeking a Bachelors in Computer Engineering.
                    After completing his degree he plans to continue his education by pursuing a masters degree in Quantum Computing.
                    <br/>
                    <br/>
                    While pursuing his degree Adison spends his spare time programming. During his projects he has gained
                    skills in C, C++, Assembly, Java, C#, Lua, HTML, CSS, Javascript, and more. Some of his projects have been in Operating System Development,
                    Game Engine Development with Vulkan and OpenGL, WPF, React Native, React based Websites, VS Code addons, and many more.
                </p>
            </div>
        );
    }
}

export default About;