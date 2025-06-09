"use client";

import {
  BusinessCenterOutlined,
  CodeOutlined,
  FileDownloadDoneOutlined,
  FileDownloadOutlined,
  LanguageOutlined,
  MemoryOutlined,
  SchoolOutlined,
  SettingsOutlined,
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
  Card,
  CardContent,
  Typography,
} from "@mui/joy";
import Hero from "components/Hero/Hero";
import { useState } from "react";

export default function Resume() {
  const [isDownloadLoading, setIsDownloadLoading] = useState(false);
  const [isDownloadSuccess, setIsDownloadSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);

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
          !isDownloadLoading &&
          !isDownloadSuccess && (
            <FileDownloadOutlined aria-labelledby="File download icon" />
          )
        }
        variant="solid"
        color={!isDownloadLoading && isDownloadSuccess ? "success" : "primary"}
        size="md"
        onClick={handleDownloadResumeClick}
        loading={isDownloadLoading && !isDownloadSuccess}
        endDecorator={
          !isDownloadLoading &&
          isDownloadSuccess && (
            <FileDownloadDoneOutlined aria-labelledby="File download done icon" />
          )
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
              <CodeOutlined aria-labelledby="Code icon" />
            </ListItemDecorator>
            Skills
          </Tab>
          <Tab disableIndicator>
            <ListItemDecorator>
              <SchoolOutlined aria-labelledby="School icon" />
            </ListItemDecorator>
            Education
          </Tab>
          <Tab disableIndicator>
            <ListItemDecorator>
              <BusinessCenterOutlined aria-labelledby="Business center icon" />
            </ListItemDecorator>
            Experience
          </Tab>
          <Tab disableIndicator>
            <ListItemDecorator>
              <CodeOutlined aria-labelledby="Code icon" />
            </ListItemDecorator>
            Projects
          </Tab>
          <Tab disableIndicator>
            <ListItemDecorator>
              <WorkspacePremiumOutlined aria-labelledby="Workspace premium icon" />
            </ListItemDecorator>
            Certifications
          </Tab>
        </TabList>

        {/* Skills */}
        <TabPanel value={0}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:grid lg:grid-cols-[var(--academic-grid-cols-2)] gap-4">
              <Card variant="solid">
                <CardContent>
                  <div className="flex gap-6">
                    <MemoryOutlined aria-labelledby="Memory icon" />
                    <div>
                      <Typography level="title-lg" textColor="inherit">
                        Web Developer
                      </Typography>
                      <Typography textColor="inherit">
                        Experienced in building web applications using react
                        framework and plain HTML and CSS
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card variant="solid">
                <CardContent>
                  <div className="flex gap-6">
                    <CodeOutlined aria-labelledby="Code icon" />
                    <div>
                      <Typography level="title-lg" textColor="inherit">
                        Full-Stack Developer
                      </Typography>
                      <Typography textColor="inherit">
                        Proficient in both front-end and back-end technologies,
                        creating complete web solutions
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card variant="solid">
              <CardContent>
                <Typography
                  level="title-lg"
                  textColor="inherit"
                  startDecorator={<CodeOutlined aria-labelledby="Code icon" />}
                >
                  Soft Skills
                </Typography>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Ruby</li>
                  <li>SQL</li>
                  <li>React Native</li>
                  <li>Tailwind CSS</li>
                  <li>SASS</li>
                </ul>
              </CardContent>
            </Card>
            <Card variant="solid">
              <CardContent>
                <Typography
                  level="title-lg"
                  textColor="inherit"
                  startDecorator={
                    <LanguageOutlined aria-labelledby="Language icon" />
                  }
                >
                  Frameworks & Libraries
                </Typography>
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Next.js</li>
                  <li>Express.js</li>
                  <li>Ruby on Rails</li>
                </ul>
              </CardContent>
            </Card>
            <Card variant="solid">
              <CardContent>
                <Typography
                  level="title-lg"
                  textColor="inherit"
                  startDecorator={
                    <SettingsOutlined aria-labelledby="Settings icon" />
                  }
                >
                  Tools & Technologies
                </Typography>
                <ul>
                  <li>Git/GitHub</li>
                  <li>Figma</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>Confluence</li>
                  <li>Jira</li>
                  <li>BitBucket</li>
                  <li>Azure Data Studio</li>
                  <li>Docker</li>
                </ul>
              </CardContent>
            </Card>
            <Card variant="solid">
              <CardContent>
                <Typography level="title-lg" textColor="inherit">
                  Soft Skills
                </Typography>
                <ul>
                  <li>
                    <Typography level="title-lg" textColor="inherit">
                      Problem Solving
                    </Typography>
                    <Typography textColor="inherit">
                      Analytical approach to complex technical challenges
                    </Typography>
                  </li>
                  <li>
                    <Typography level="title-lg" textColor="inherit">
                      Communication
                    </Typography>
                    <Typography textColor="inherit">
                      Clear technical and non-technical communication
                    </Typography>
                  </li>
                  <li>
                    <Typography level="title-lg" textColor="inherit">
                      Team Collaboration
                    </Typography>
                    <Typography textColor="inherit">
                      Effective work in cross-functional teams
                    </Typography>
                  </li>
                  <li>Leadership</li>
                  <li>
                    <Typography level="title-lg" textColor="inherit">
                      Time Management
                    </Typography>
                    <Typography textColor="inherit">
                      Efficient project delivery within deadlines
                    </Typography>
                  </li>
                  <li>
                    <Typography level="title-lg" textColor="inherit">
                      Critical Thinking
                    </Typography>
                    <Typography textColor="inherit">
                      Analytical evaluation of solutions and approaches
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabPanel>

        {/* Education */}
        <TabPanel value={1}>
          <div className="flex flex-col gap-6">
            <Card variant="solid">
              <CardContent>
                <Typography level="title-lg" textColor="inherit">
                  Diploma
                </Typography>
                <Typography textColor="inherit">
                  Web Development Immersive Bootcamp
                </Typography>
                <Typography textColor="inherit">
                  Juno College of Technology
                </Typography>
                <Typography textColor="inherit">2021</Typography>
                <Typography textColor="inherit">Toronto, Canada</Typography>
              </CardContent>
            </Card>
            <Card variant="solid">
              <CardContent>
                <Typography level="title-lg" textColor="inherit">
                  Diploma
                </Typography>
                <Typography textColor="inherit">
                  Centennial College School of Hospitality, Tourism and Culinary
                  Arts
                </Typography>
                <Typography textColor="inherit">
                  Special Event Planning
                </Typography>
                <Typography textColor="inherit">2017 - 2018</Typography>
                <Typography textColor="inherit">Toronto, Canada</Typography>
              </CardContent>
            </Card>
            <Card variant="solid">
              <CardContent>
                <Typography level="title-lg" textColor="inherit">
                  Bachelor&lsquo;s degree
                </Typography>
                <Typography textColor="inherit">
                  Vietnam National University in Hanoi, School of Law
                </Typography>
                <Typography textColor="inherit">
                  Labour and Economic Law
                </Typography>
                <Typography textColor="inherit">2010 - 2014</Typography>
                <Typography textColor="inherit">Hanoi, Vietnam</Typography>
              </CardContent>
            </Card>
          </div>
        </TabPanel>

        {/* Experience */}
        <TabPanel value={2}>
          <div className="flex flex-col gap-6">
            <Card variant="solid">
              <CardContent>
                <Typography level="title-lg" textColor="inherit">
                  Software Developer
                </Typography>
                <Typography textColor="inherit">
                  May 2022 - Present Deloitte
                </Typography>

                <ul className="list-disc p-6">
                  <Typography textColor="inherit" fontWeight="bold">
                    Key Responsibilities:
                  </Typography>
                  <li>
                    Collaborated with cross- functional teams to define
                    requirements and deliver innovative solutions for complex
                    issues, ensuring seamless integration and alignment with
                    business objectives.
                  </li>
                  <li>
                    Fostered collaboration between development and business
                    teams, ensuring technical solutions align with strategic
                    goals and drive business success.
                  </li>
                  <li>
                    Streamlined development processes by implementing strategic
                    resource allocation and optimizing critical feature delivery
                    timelines, resulting in increased efficiency and reduced
                    time-to-market.
                  </li>
                  <li>
                    Architected and implemented scalable web solutions using
                    React, TypeScript, and modern APIs, ensuring robust and
                    maintainable codebases.
                  </li>
                  <li>
                    Drove innovation in front-end development through advanced
                    accessibility implementations and responsive design
                    patterns, ensuring a consistent user experience across
                    multiple browsers and devices.
                  </li>
                  <li>
                    Guided junior developers through complex technical
                    challenges, promoting knowledge sharing and maintaining high
                    standards of documentation.
                  </li>
                  <li>
                    Optimized application performance through systematic code
                    reviews, comprehensive quality assurance protocols, and
                    rigorous unit testing strategies, ensuring optimal
                    application performance and an exceptional user experience.
                  </li>
                  <li>
                    Created and optimized stored procedures to enhance database
                    performance and ensure efficient data retrieval and
                    manipulation.
                  </li>
                  <li>
                    Established and maintained database tables, ensuring data
                    integrity and supporting the evolving needs of the
                    application.
                  </li>
                  <li>
                    Updated databases while integrating with front-end
                    applications, ensuring seamless data flow and consistency
                    across the system.
                  </li>
                  <li>
                    Identified gaps between APIs and front-end requirements,
                    leading discussions with the team to improve API design and
                    functionality, ensuring better alignment with front-end
                    needs.{" "}
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card variant="solid">
              <CardContent>
                <Typography level="title-lg" textColor="inherit">
                  Associate Software Developer
                </Typography>
                <Typography textColor="inherit">
                  May 2021 - April 2022, Deloitte
                </Typography>

                <ul className="list-disc p-6">
                  <Typography textColor="inherit" fontWeight="bold">
                    Key Responsibilities:
                  </Typography>
                  <li>
                    Optimized front-end performance by implementing responsive
                    design patterns and accessibility standards WCAG standards
                    to enhance digital inclusion and expand user reach across
                    platforms using React, TypeScript, and modern CSS
                    frameworks.
                  </li>
                  <li>
                    Conducted unit testing and quality assurance checks to
                    ensure all client requirements were met and exceeded,
                    delivering optimal browser functionality and troubleshooting
                    issues effectively.
                  </li>
                  <li>
                    Fostered cross- functional collaboration by bridging
                    technical and design teams, ensuring pixel-perfect
                    implementation of UI/UX specifications.
                  </li>
                  <li>
                    Maintained clear communication with management, internal
                    teams, and development partners regarding software
                    application design status, project updates, and progress
                    reports.
                  </li>
                  <li>
                    Participated in regular stand-ups, sprint planning sessions,
                    and retrospectives to identify opportunities for improvement
                    and ensure alignment with project goals.
                  </li>
                  <li>
                    Conducted thorough code reviews to identify potential areas
                    for improvement, ultimately enhancing code quality across
                    all projects the team handles.
                  </li>
                  <li>
                    Streamlined development workflows through Git version
                    control mastery, facilitating seamless team collaboration
                    and code integrity maintenance.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabPanel>

        {/* Projects */}
        <TabPanel value={3}>
          <div className="flex flex-col gap-6">
            <Card variant="solid">
              <CardContent>
                <Typography level="title-lg" textColor="inherit">
                  Saskatchewan Health Authority - Administrative Information
                  Management System
                </Typography>
                <Typography textColor="inherit">6/2023 - 2025</Typography>

                <ul className="list-disc p-6">
                  <Typography textColor="inherit" fontWeight="bold">
                    Key Responsibilities:
                  </Typography>
                  <li>Key 1</li>
                  <li>Key 2</li>
                  <li>Key 3</li>
                </ul>

                <ul>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
              </CardContent>
            </Card>
            <Card variant="solid">
              <CardContent>
                <Typography level="title-lg" textColor="inherit">
                  Service New Brunswick
                </Typography>
                <Typography textColor="inherit">1/2024 - 12/2024</Typography>

                <ul className="list-disc p-6">
                  <Typography textColor="inherit" fontWeight="bold">
                    Key Responsibilities:
                  </Typography>
                  <li>Key 1</li>
                  <li>Key 2</li>
                  <li>Key 3</li>
                </ul>

                <ul>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
              </CardContent>
            </Card>
            <Card variant="solid">
              <CardContent>
                <Typography level="title-lg" textColor="inherit">
                  Shopify
                </Typography>
                <Typography textColor="inherit">5/2021 - 5/2023</Typography>

                <ul className="list-disc p-6">
                  <Typography textColor="inherit" fontWeight="bold">
                    Key Responsibilities:
                  </Typography>
                  <li>Key 1</li>
                  <li>Key 2</li>
                  <li>Key 3</li>
                </ul>

                <ul>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabPanel>

        {/* Certifications */}
        <TabPanel value={4}>
          <div className="flex flex-col lg:grid lg:grid-cols-[var(--academic-grid-cols-2)] gap-4 pb-24">
            <Card variant="solid">
              <CardContent>
                <Typography textColor="inherit">
                  AWS Certified Cloud Practitioner
                </Typography>
                <Typography textColor="inherit">
                  Amazon Web Services Training and Certification
                </Typography>
                <Typography textColor="inherit">2025</Typography>
              </CardContent>
            </Card>

            <Card variant="solid">
              <CardContent>
                <Typography textColor="inherit">
                  JavaScript Unit Testing - The Practical Guide
                </Typography>
                <Typography textColor="inherit">Udemy</Typography>
                <Typography textColor="inherit">2024</Typography>
              </CardContent>
            </Card>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
