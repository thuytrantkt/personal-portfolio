"use client";

import {
  BusinessCenterOutlined,
  CodeOutlined,
  FileDownloadDoneOutlined,
  FileDownloadOutlined,
  SchoolOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Button,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  tabClasses,
  ListItemDecorator,
} from "@mui/joy";
import Hero from "components/Hero/Hero";
import { useState } from "react";

export default function Resume() {
  const [isDownloadLoading, setIsDownloadLoading] = useState(false);
  const [isDownloadSuccess, setIsDownloadSuccess] = useState(false);

  const [activeTab, setActiveTab] = useState<number>(0);
  console.log(activeTab);

  const handleDownloadResumeClick = () => {
    console.log("Downloaded");
    setIsDownloadLoading(true);

    /** Once download successfully, then update the following:
     *  1. Set the loading back to false
     *  2. Set the success to true
     */
    /** TODO */
  };
  return (
    <div className="flex flex-col justify-center">
      <Hero
        heading="Resume"
        subhead="Professional Experience"
        description="I'm an aspiring developer specializing in web development, AI, and machine learning. My goal is to leverage these technologies to create innovative solutions for real-world problems."
      />
      <Button
        startDecorator={
          !isDownloadLoading && !isDownloadSuccess && <FileDownloadOutlined />
        }
        variant="solid"
        color={!isDownloadLoading && isDownloadSuccess ? "success" : "primary"}
        size="md"
        onClick={handleDownloadResumeClick}
        loading={isDownloadLoading && !isDownloadSuccess}
        endDecorator={
          !isDownloadLoading &&
          isDownloadSuccess && <FileDownloadDoneOutlined />
        }
        className="w-fit self-center"
      >
        Download Resume
      </Button>
      <Tabs
        aria-label="Resume content tabs"
        defaultValue={0}
        sx={{ bgcolor: "transparent", marginTop: "64px" }}
        value={activeTab}
        onChange={(event, value) => setActiveTab(value as number)}
      >
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 1.5,
            borderRadius: "md",
            justifyContent: "center",
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              boxShadow: "sm",
              bgcolor: "background.level3",
            },
            [`& .${tabClasses.root}[aria-selected="false"]`]: {
              boxShadow: "sm",
              bgcolor: "background.level1",
            },
          }}
        >
          <Tab disableIndicator>
            <ListItemDecorator>
              <CodeOutlined />
            </ListItemDecorator>
            Skills
          </Tab>
          <Tab disableIndicator>
            <ListItemDecorator>
              <SchoolOutlined />
            </ListItemDecorator>
            Education
          </Tab>
          <Tab disableIndicator>
            <ListItemDecorator>
              <BusinessCenterOutlined />
            </ListItemDecorator>
            Experience
          </Tab>
          <Tab disableIndicator>
            <ListItemDecorator>
              <CodeOutlined />
            </ListItemDecorator>
            Projects
          </Tab>
          <Tab disableIndicator>
            <ListItemDecorator>
              <WorkspacePremiumOutlined />
            </ListItemDecorator>
            Certifications
          </Tab>
        </TabList>
        <TabPanel value={0}>Skills</TabPanel>
        <TabPanel value={1}>Education</TabPanel>
        <TabPanel value={2}>Experience</TabPanel>
        <TabPanel value={3}>Projects</TabPanel>
        <TabPanel value={4}>Certifications</TabPanel>
      </Tabs>
    </div>
  );
}
