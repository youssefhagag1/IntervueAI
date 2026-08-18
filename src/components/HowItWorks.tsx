import React from 'react'
import Text, { SubTitle, Title } from './Text'
import Container from './Container'
import howItWorks from '@/lib/constants/howWorks'
function HowItWorks() {
  return (
    <div className="py-16">
      <Title className='mb-8'>How It Works</Title>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="mb-6 text-center flex flex-col items-center justify-center gap-3">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
                {index + 1}
              </span>
              <SubTitle>{step.label}</SubTitle>
              <Text>{step.description}</Text>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default HowItWorks
