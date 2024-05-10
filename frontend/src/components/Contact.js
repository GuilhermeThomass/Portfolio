import React from 'react'

import { Section,Container,Left,Rigth, InputDesc, InputEmail,Titlle } from '../styles/ContactStyle';


function Contact() {

  return (
      <Section>
        <Container>
          <Left>
            <Titlle>Entre em contato</Titlle>
            <InputEmail type='email' placeholder='Email'/>
            <InputDesc type='textarea' placeholder='Descrição'/>
          </Left>
          <Rigth>
          </Rigth>
        </Container>
      </Section>
  )
}

export default Contact