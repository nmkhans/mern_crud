import React from 'react';

const PageTitle = ({ children }) => {
    return (
        <div className="mt-4 text-center">
            <h2 className="fw-semibold text-uppercase border-bottom border-dark border-2 d-inline-block pb-2">{children}</h2>
        </div>
    );
};

export default PageTitle;