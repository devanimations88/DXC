import React from "react";

import MetaTags from "../Component/MetaTags";
import BooksList from "../Component/BooksList"

function Home() {
    return (
        <>
            <MetaTags
                title={'Home | ReactJS Simple App DXC'}
                description={'Home | ReactJS Simple App DXC'}
                keywords={'Home | ReactJS Simple App DXC'}
            />
            <div id="homePage" className="home-page">
                <BooksList />
            </div>
        </>
    )
}

export default Home;