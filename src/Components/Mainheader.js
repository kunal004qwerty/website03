import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Section from './Section';
import Second from './Second';
import Testimonials from './Testimonials';

const Mainheader = () => {
    return (
        <div>
            <Header />
            <Section/>
            <Second />
            <Testimonials />
            <Outlet />
        </div>
    );
};

export default Mainheader;