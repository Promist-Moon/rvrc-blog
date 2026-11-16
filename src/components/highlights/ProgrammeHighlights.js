import React from "react";
import { Typography, Stack } from "@mui/material";
import Timeline from "@mui/lab/Timeline";

import { COLOURS } from "../../constants/Colours";
import TimelineEvent from "./TimelineEvent";

const ProgrammeHighlights = ({ title, subtitle, events }) => {
  return (
    <>
      <Stack spacing={3} py="32px">
        <Stack spacing={1}>
          {title && (
            <Typography
              variant="h4"
              sx={{
                color: COLOURS.accentGreen,
              }}
            >
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography 
              variant="h6"
            sx={{
              fontWeight: "bold",
              color: COLOURS.accentGreen,
            }}>
              {subtitle} 
              </Typography>
          )}
        </Stack>

        <Timeline position="alternate" sx={{ px: { xs: 5, md: 10, lg: 14 }, }} >
          {events.map((event, index) => (
            <TimelineEvent
              key={index}
              time={event.time}
              titles={event.titles}
              locations={event.locations}
              icon={event.icon}
              iconBackgroundColor={index % 2 === 0 ? COLOURS.accentTeal : COLOURS.accentPurple}
            />
          ))}
        </Timeline>
      </Stack>
    </>
  );
};

export default ProgrammeHighlights;
