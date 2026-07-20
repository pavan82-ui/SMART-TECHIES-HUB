
import React, { useState } from 'react';

const FunctionalChildComponent = () => {
    console.log("FunctionalChildComponent rendered");
    return (
        <div>
            Functional Child Component
        </div>

    )
}

export default  React.memo(FunctionalChildComponent);