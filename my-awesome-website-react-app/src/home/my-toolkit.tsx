import React, { forwardRef, useState } from "react";
import classNames from "classnames";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CareerTimeline } from "./career-timeline";

interface MyToolkitProps {
}

export const MyToolkit = forwardRef(function MyToolkit({ }: MyToolkitProps, ref: React.ForwardedRef<HTMLElement>) {
  const [selectedCareerExperience, setSelectedCareerExperience] = useState<string[]>([]);

  return (
    <section ref={ref}>
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary text-center">
        My Toolkit
      </h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="font-bold">Frontend</span>
              </TableCell>
              <TableCell>
                <span className="font-bold">Backend</span>
              </TableCell>
              <TableCell>
                <span className="font-bold">DevOps</span>
              </TableCell>
              <TableCell>
                <span className="font-bold">UX/UI</span>
              </TableCell>
              <TableCell>
                <span className="font-bold">Scrum</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Angular') })}>Angular</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('C#') })}>C#</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Azure DevOps') })}>Azure DevOps</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Figma') })}>Figma</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Retrospective') })}>Retrospective</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classNames({ 'font-bold': true, underline: selectedCareerExperience.includes('React') })}>React</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Domain-Driven Design') })}>Domain-Driven Design</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Gitlab') })}>Gitlab</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Prototyping') })}>Prototyping</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Kanban') })}>Kanban</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Redux') })}>Redux</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Entity Framework') })}>Entity Framework</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Octopus') })}>Octopus</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Material UI') })}>Material UI</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Story Mapping') })}>Story Mapping</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('HTML') })}>HTML</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('SQL Server') })}>SQL Server</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Docker') })}>Docker</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Invision') })}>Invision</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Test-Driven Design') })}>Test-Driven Design</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('SCSS') })}>CSS</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('CQRS') })}>CQRS</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('ARM') })}>ARM</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Design System') })}>Design System</TableCell>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('Agile') })}>Agile</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <CareerTimeline
        onTimelineItemSelected={(companyName: string) => setSelectedCareerExperience(careerExperience[companyName])}
      />
    </section>
  );
});

const careerExperience : { [key: string]: string[] } = {
  Protime: ['C#', 'React', 'Gitlab', 'Octopus' ,'CQRS', 'Test-Driven Design', 'Kanban', 'Retrospective', 'Figma', 'Domain-Driven Design'],
  Cegeka: ['C#', 'Azure DevOps', 'Angular', 'Redux', 'Agile', 'Test-Driven Design', 'Design System', 'Invision', 'SQL Server'],
  VDAB: ['C#', 'HTML', 'SCSS', 'Agile', 'SQL Server', 'Angular', 'Entity Framework']
};
