import React, { useState } from "react";
import classNames from "classnames";
import {
  Card,
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

  return (
    <section ref={elementRef}>
      {/* <Card
        ref={elementRef}
        className="justify-content m-3 pt-5"
        sx={{ minWidth: 275 }}
      > */}
      {/* <span>My Toolkit</span> */}
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
              <TableCell>React</TableCell>
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
      {/* </Card> */}
      <CareerTimeline
        onTimelineItemSelected={() => setState((prev) => !prev)}
      />
    </section>
  );
}
