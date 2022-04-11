import React from 'react';
import { Helmet } from "react-helmet";

function MetaTags({ title, description, keywords }) {
    return (
        <Helmet>
            <title>{title.toUpperCase()}</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
        </Helmet>
    )
}

export default MetaTags;