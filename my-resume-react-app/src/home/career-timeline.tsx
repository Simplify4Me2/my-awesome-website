import React, { useState } from "react";
import classnames from "classnames";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { AccessTime, CorporateFare, CorporateFareTwoTone, School } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface ICareerTimelineProps {
  onTimelineItemSelected: () => void;
}

export function CareerTimeline({ onTimelineItemSelected } : ICareerTimelineProps) {

  const [state, setState] = useState(false);

  const handleLogoClick = (logo: string) => {
    console.log("yoohoo ", logo);
    onTimelineItemSelected();
  };

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2020 - Current
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            color="primary"
            className="hover:cursor-pointer"
            onClick={() => handleLogoClick("Protime")}
          >
            <AccessTime />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            Protime
          </Typography>
          <Typography color="text.secondary">
            Much more than time registration and workforce management
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            Cegeka
          </Typography>
          <Typography color="text.secondary">In close cooperation</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            color="info"
            className={classnames('hover:cursor-pointer', { 'color' : state ? 'text.secondary' : 'text.primary' })}
            onClick={() => handleLogoClick("Cegeka")}
            onMouseEnter={() => setState(true)}
            onMouseLeave={() => setState(false)}
          >
            {state ? <CorporateFare /> : <CorporateFareTwoTone />}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2017 - 2020
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2015 - 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            color="info"
            className="hover:cursor-pointer"
            onClick={() => handleLogoClick("VDAB")}
          >
            <School />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            VDAB / PXL
          </Typography>
          <Typography color="text.secondary">Switch 2 IT</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
