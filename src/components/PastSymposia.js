import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { COLOURS } from "../constants/Colours";

const defaultLinks = [
  // {
  //   title: 'AY 2015/16',
  //   href: 'http://blog.nus.edu.sg/gem1917/',
  // },
  // {
  //   title: 'AY 2016/17',
  //   href: 'https://blog.nus.edu.sg/geq1917/',
  // },
  // {
  //   title: 'AY 2017/18',
  //   href: 'https://blog.nus.edu.sg/geq2017/',
  // },
  {
    title: "AY 2018/19",
    href: "https://blog.nus.edu.sg/geq1917student2019/action-for-sustainability-symposium/",
  },
  {
    title: "AY 2019/20",
    href: "https://blog.nus.edu.sg/geq1917symposium/",
  },
  // {
  //   title: 'AY 2020/21',
  //   href: 'http://blog.nus.edu.sg/gem1917/',
  // },
  // {
  //   title: 'AY 2021/22',
  //   href: 'http://blog.nus.edu.sg/gem1917/',
  // },
  {
    title: "AY 2022/23",
    href: "http://rvrc-blog.vercel.app/2022",
  },
  {
    title: "AY 2023/24",
    href: "http://rvrc-blog.vercel.app/2024",
  },
  {
    title: "AY 2024/25",
    href: "http://rvrc-blog.vercel.app/2025",
  },
  {
    title: "AY 2025/26",
    href: "http://rvrc-blog.vercel.app/",
  }
];

const PastSymposia = ({ links = defaultLinks }) => {
  return (
    <>
      <Stack spacing={3} py="32px" px="10%" sx={{ backgroundColor: "#e1d0f5" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20pt", md: "26pt" },
            color: COLOURS.brandPurple,
          }}
        >
          Past Symposia
        </Typography>

        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 250px)",
              sm: "repeat(2, minmax(0, 250px))",
              md: "repeat(3, minmax(0, 250px))",
            },
            gap: 2,
            justifyContent: "center",
          }}
        >
          {links.map((item, i) => (
            <Button
              key={i}
              disableElevation
              variant="contained"
              onClick={() => window.open(item.href, "_blank")}
              sx={{
                width: "100%",
                backgroundColor: "transparent",
                color: COLOURS.brandPurple,
                borderRadius: "16px",
                border: "1px solid #592693",
                ":hover": {
                  backgroundColor: COLOURS.brandPurple,
                  color: COLOURS.white,
                },
              }}
            >
              {item.title}
            </Button>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default PastSymposia;
