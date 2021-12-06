import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          FullStack Developer
        </SectionTitle>
        <SectionText>
        Hi! Im Cristian. <br/>
I am a javascript developer. I like to create, contribute, learn and simultaneously grow.
        </SectionText>
        <Button ><a href="https://www.desarrollandoweb.tech/"> Learn More</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;