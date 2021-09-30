import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 'github posted Projects'},
  { text: 'worked on a freelance project for a local client', },
  { text: 'completed net ninja UI/UX design course', },
];

const Acomplishments = () => (
<Section>
  <SectionTitle>Personal accomplishment</SectionTitle>
  <Boxes>
   {data.map((card, index) => (
     <Box key = {index}>
       <BoxNum>{card.number}</BoxNum>
       <BoxText>{card.text}</BoxText>
     </Box>
   ))} 
  </Boxes>
</Section>
);

export default Acomplishments;
