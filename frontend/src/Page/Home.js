import React from 'react'
import styled from 'styled-components';

import Hero  from '../components/Hero';
import Display from '../components/Display';
import Work from '../components/Work';
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