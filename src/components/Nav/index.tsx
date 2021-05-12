import React from 'react';
import styled from 'styled-components';
import Links from './Links';

const Nav: React.FC = () => {
    return (
        <div className="fixed h-20 w-full z-10 m-0 p-0 px-5 top-0 left-0 bg-primary flex justify-between shadow-md">
            <Banner className="flex items-end w-80 py-5">
                <h1 className="leading-none text-secondary">Irwin</h1>
            </Banner>

            <Center className="py-5">
                <img src="/favicon.svg" height="100%" />
            </Center>

            <Links className="w-80" />
        </div>
    );
};

const Banner = styled.div`
    h1 {
        font-weight: 400;
        transform: translateY(0.5rem);
        display: inline;
        font-size: 2.8rem;
        text-transform: uppercase;
    }
`;

const Center = styled.div`
    flex: 1 1;
    display: flex;
    justify-content: center;
`;

export default Nav;
