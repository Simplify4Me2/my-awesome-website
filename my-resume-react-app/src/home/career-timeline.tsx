import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { AccessTime, ChildCare } from "@mui/icons-material";
import { Typography } from "@mui/material";


export const CareerTimeline: React.FC = () => {

  const handleLogoClick = (logo: string) => {
    console.log("yoohoo ", logo);
  };

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2020 - Current
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" className="hover:cursor-pointer" onClick={() => handleLogoClick("Protime")}>
            <AccessTime />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span">
            Protime
          </Typography>
          <Typography color="text.secondary">Much more than time registration and workforce management</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ py: '12px', px: 2 }}
        >
          <Typography variant="h5" component="span">
            Cegeka
          </Typography>
          <Typography color="text.secondary">In close cooperation</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="info" className="hover:cursor-pointer" onClick={() => handleLogoClick("Cegeka")}>
            <ChildCare />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary">2017 - 2020</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
