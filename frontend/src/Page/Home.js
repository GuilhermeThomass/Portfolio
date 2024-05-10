import React from 'react'
import styled from 'styled-components';

import Hero  from '../components/Hero';
import Contact from '../components/Contact';

const Section = styled.div`

`;

export default function Home(){
    return (
        <Section>
            <Hero/>
            <Contact/>
        </Section>
    );
}