import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
 <LeftSection>
   <SectionTitle main center>
   Hi, <br />
   I am Sahil
   </SectionTitle>
   <SectionText>
    I enjoy building everything from small business sites to rich interactive web apps.if you are a business seeking a web presence or an employer looking to hire, you can contact me  
   </SectionText>
   <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
 </LeftSection>

</Section>
);

export default Hero;