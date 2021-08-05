import React, { useState, useEffect } from 'react';

export function Count(){
    // Declare a new variable of state.
    const [count, setCount] = useState(0, 'ajaj');
    // Similar a componentDidMount y componentDidUpdate:
    useEffect(() => {
        // Actualiza el título del documento usando la Browser API
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me Function
            </button>
        </div>
    );
}