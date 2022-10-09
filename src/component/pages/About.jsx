import React from 'react';

function About() {
    return (
        <>
            <h1><div className="text-6xl mb-4">Github Finder</div></h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details.
                
                <strong>
                    <p> Emmanuel Essien</p>
                </strong>
                .
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
           
        </>
    );
}

export default About;
