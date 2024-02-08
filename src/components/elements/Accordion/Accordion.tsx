'use client';

import { Accordion as MantineAccordion } from '@mantine/core';
import { Renderable } from '@/interfaces/Renderable';

export interface AccoridionData {
  title: string;
  description: Renderable;
}
interface AccordionProps {
  defaultTitle?: string;
  multiple?: boolean;
  data: AccoridionData[];
}
export const Accordion = (props: AccordionProps) => {
  return (
    <MantineAccordion defaultValue={props.defaultTitle} multiple={props.multiple}>
      {props.data.map((item, index) => {
        return (
          <MantineAccordion.Item key={index} value={item.title}>
            <MantineAccordion.Control>{item.title}</MantineAccordion.Control>
            <MantineAccordion.Panel>{item.description}</MantineAccordion.Panel>
          </MantineAccordion.Item>
        );
      })}
    </MantineAccordion>
  );
};
