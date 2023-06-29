import React, { useState } from "react";
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
  elementRef: React.MutableRefObject<HTMLDivElement | null>;
}

export function MyToolkit({ elementRef }: MyToolkitProps) {
  const [state, setState] = useState(false);
  const [selectedCareerExperience, setSelectedCareerExperience] = useState<string[]>(['React']);

  return (
    <section ref={elementRef}>
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
              <TableCell className={classNames({ underline: state })}>
                Angular
              </TableCell>
              <TableCell>C#</TableCell>
              <TableCell>Azure DevOps</TableCell>
              <TableCell>Figma</TableCell>
              <TableCell>Retrospective</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classNames({ underline: selectedCareerExperience.includes('React') })}>React</TableCell>
              <TableCell>Domain-Driven Design</TableCell>
              <TableCell>Gitlab</TableCell>
              <TableCell>Prototyping</TableCell>
              <TableCell>Kanban</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Redux</TableCell>
              <TableCell>Entity Framework</TableCell>
              <TableCell>Octopus</TableCell>
              <TableCell>Material</TableCell>
              <TableCell>Story Mapping</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>HTML</TableCell>
              <TableCell>SQL Server</TableCell>
              <TableCell>Docker</TableCell>
              <TableCell>Invision</TableCell>
              <TableCell>Example Mapping</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CSS</TableCell>
              <TableCell>CQRS</TableCell>
              <TableCell>ARM</TableCell>
              <TableCell>Design System</TableCell>
              <TableCell>Agile</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <CareerTimeline
        onTimelineItemSelected={(companyName: string) => setSelectedCareerExperience(careerExperience[companyName])}
      />
    </section>
  );
}

const careerExperience : { [key: string]: string[] } = {
  Protime: ['React'],
  Cegeka: ['DevOps'],
  VDAB: ['C#']
};
