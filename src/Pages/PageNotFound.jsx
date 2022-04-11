import React from "react";
import MetaTags from "../Component/MetaTags";

function PageNotFound(props) {
    return (
        <>
            <MetaTags
                title={'Sorry ! Page not found | ReactJS Simple App DXC'}
                description={'Sorry ! Page not found | ReactJS Simple App DXC'}
                keywords={'Sorry ! Page not found | ReactJS Simple App DXC'}
            />
            <div id="pageNotFound" className="page-not-found">
                <p className="message">404 Page Not Found Page</p>
            </div>
        </>
    )
}

export default PageNotFound;