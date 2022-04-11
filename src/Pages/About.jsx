import React from "react";
import MetaTags from "../Component/MetaTags";

function About() {
    return (
        <>
            <MetaTags
                title={'About | ReactJS Simple App DXC'}
                description={'About | ReactJS Simple App DXC'}
                keywords={'About | ReactJS Simple App DXC'}
            />
            <div id="aboutPage" className="about-page">
                <p className="message">👷 Sorry !!! We are completing this page soon...</p>
            </div>
        </>
    )
}

export default About;