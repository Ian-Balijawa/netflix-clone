import React from 'react';
import faqsData from '../fixtures/faqs.json';
import Accordion from '../components/accordion';
import OptForm from '../components/opt-Form';

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title> Frequenctly Ask Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder="Email Address" type="email" />
        <OptForm.Button> Try It Now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your Email to create or Restart your Memership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
