import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { Event } from "@mui/icons-material";
const MyTimeline = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              3/27/22
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event/>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Title</Typography>
              <Typography>Sub</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default MyTimeline;
