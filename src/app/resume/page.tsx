"use client";

import React, { useRef, useState } from "react";
import axios from "axios";
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
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/joy";
import Hero from "components/Hero/Hero";
import Image from "next/image";
import {
  ICON_IMAGE_PATHS_BE,
  ICON_IMAGE_PATHS_FE,
  ICON_IMAGE_PATHS_TOOLS,
} from "@/components/IconImage/constant";
import IconImage from "@/components/IconImage/IconImage";

export default function Resume() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const [downloadFileStatus, setDownloadFileStatus] = useState<
    "loading" | "sucess" | "error" | ""
  >("");
  const [activeTabOnResume, setActiveTabOnResume] = useState<number>(0);
  const [activeTabOnSkills, setActiveTabOnSkills] = useState<number>(0);

  const handleDownloadResumeClick = async (
    event: React.MouseEvent<HTMLAnchorElement>,
    currentLink: React.Ref<HTMLAnchorElement> | null
  ) => {
    event.preventDefault();
    setDownloadFileStatus("loading");

    const filePath = "/assets/thuy-tran-software-developer-resume.pdf";

    try {
      const response = await axios({
        url: filePath,
        method: "GET",
        responseType: "blob", // Must set responseType: 'blob' to handle binary data (like PDFs or images)
        headers: {
          "Content-Type": "application/pdf",
        },
      });
      if (response.status !== 200) {
        throw new Error("Failed to download file");
      }
      if (!response.data) {
        throw new Error("No data received from the file download");
      }

      // Create a blob URL and trigger download
      const blob = new Blob([response.data], {
        type: "application/pdf",
      });
      // Create a URL for the blob
      // This is necessary to create a downloadable link in the browser
      // window.URL.createObjectURL creates a URL that points to the blob data
      // This URL can be used as the href for an anchor tag to download the file
      // The URL will be revoked after the download is triggered to free up memory
      const url = window.URL.createObjectURL(blob);

      if (currentLink && "current" in currentLink && currentLink.current) {
        currentLink.current.href = url;
        currentLink.current.download =
          "thuy-tran-software-developer-resume.pdf";
        currentLink.current.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
        }, 100); // Revoke the URL after a short delay to ensure download is triggered
      }
      setDownloadFileStatus("sucess");
    } catch (error) {
      console.error("Error downloading file:", error);
      setDownloadFileStatus("error");
      throw new Error("Failed to download file");
    }
  };

  const downloadFileColorUpdate = () => {
    if (downloadFileStatus === "sucess") {
      return "success";
    } else if (downloadFileStatus === "error") {
      return "danger";
    }
    return "primary";
  };

  const downloadFileTextUpdate = () => {
    if (downloadFileStatus === "loading") {
      return "Downloading...";
    } else if (downloadFileStatus === "sucess") {
      return "Resume Downloaded";
    } else if (downloadFileStatus === "error") {
      return "Try Again";
    }
    return "Download Resume";
  };

  return (
    <div className="flex flex-col justify-center">
      <Hero
        heading="Resume"
        subhead="Professional Experience"
        description="I'm an aspiring developer specializing in web development, AI, and machine learning. My goal is to leverage these technologies to create innovative solutions for real-world problems."
      />
      <a ref={linkRef} className="sr-only">
        Hidden download link for resume
      </a>

      <Button
        startDecorator={
          !downloadFileStatus && (
            <FileDownloadOutlined aria-labelledby="File download icon" />
          )
        }
        variant={downloadFileStatus === "error" ? "outlined" : "solid"}
        color={downloadFileColorUpdate()}
        size="md"
        loading={downloadFileStatus === "loading"}
        endDecorator={
          downloadFileStatus === "sucess" && (
            <FileDownloadDoneOutlined aria-labelledby="File download done icon" />
          )
        }
        className="w-fit self-center"
        onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
          handleDownloadResumeClick(event, linkRef)
        }
      >
        {downloadFileTextUpdate()}
      </Button>

      <Tabs
        aria-label="Resume content tabs"
        defaultValue={0}
        sx={{ bgcolor: "transparent", marginTop: "64px" }}
        value={activeTabOnResume}
        onChange={(event, value) => setActiveTabOnResume(value as number)}
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
            display: "flex",
            flexWrap: "wrap",
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
            <div className="flex flex-col gap-4">
              <Card variant="solid">
                <CardContent>
                  <Typography
                    level="title-lg"
                    textColor="inherit"
                    startDecorator={
                      <CodeOutlined aria-labelledby="Code icon" />
                    }
                  >
                    Technical Stack
                  </Typography>
                  <Tabs
                    aria-label="Skills content tabs"
                    defaultValue={0}
                    sx={{ bgcolor: "transparent", marginTop: "64px" }}
                    value={activeTabOnSkills}
                    onChange={(event, value) =>
                      setActiveTabOnSkills(value as number)
                    }
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
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      <Tab disableIndicator>
                        <ListItemDecorator>
                          <CodeOutlined aria-labelledby="Code icon" />
                        </ListItemDecorator>
                        Front End
                      </Tab>
                      <Tab disableIndicator>
                        <ListItemDecorator>
                          <SchoolOutlined aria-labelledby="School icon" />
                        </ListItemDecorator>
                        Back End
                      </Tab>
                      <Tab disableIndicator>
                        <ListItemDecorator>
                          <BusinessCenterOutlined aria-labelledby="Business center icon" />
                        </ListItemDecorator>
                        Tools
                      </Tab>
                    </TabList>

                    {/* Front End */}
                    <TabPanel value={0}>
                      <div className="flex flex-col gap-8">
                        <Card variant="solid">
                          <CardContent>
                            <ul className="flex flex-col gap-2">
                              {Object.keys(ICON_IMAGE_PATHS_FE).map((key) => (
                                <li
                                  className="flex flex-col items-center gap-2"
                                  key={key}
                                >
                                  <IconImage
                                    src={ICON_IMAGE_PATHS_FE[key]}
                                    alt={key}
                                  />
                                  {key}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </TabPanel>

                    {/* Back End */}
                    <TabPanel value={1}>
                      <div className="flex flex-col gap-8">
                        <Card variant="solid">
                          <CardContent>
                            <ul className="flex flex-col gap-2">
                              {Object.keys(ICON_IMAGE_PATHS_BE).map((key) => (
                                <li
                                  className="flex flex-col items-center gap-2"
                                  key={key}
                                >
                                  <IconImage
                                    src={ICON_IMAGE_PATHS_BE[key]}
                                    alt={key}
                                  />
                                  {key}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </TabPanel>

                    {/* Tools */}
                    <TabPanel value={2}>
                      <div className="flex flex-col gap-8">
                        <Card variant="solid">
                          <CardContent>
                            <ul className="flex flex-col gap-2">
                              {Object.keys(ICON_IMAGE_PATHS_TOOLS).map(
                                (key) => (
                                  <li
                                    className="flex flex-col items-center gap-2"
                                    key={key}
                                  >
                                    <IconImage
                                      src={ICON_IMAGE_PATHS_TOOLS[key]}
                                      alt={key}
                                    />
                                    {key}
                                  </li>
                                )
                              )}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </TabPanel>
                  </Tabs>
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
                    Strategized the powerful data fetching and caching tool to
                    simplify loading data in the web application and the data
                    flow between the back-end and front-end systems with the use
                    of Redux Toolkit Query.
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
                  <li>
                    Implement a UI wrapper uses the existing business logic
                    embedded within the platform but displays the information in
                    a new way to improve user adoption and reduce friction with
                    the tool upon go-live, improve productivity with a more
                    intuitive, faster experience and enable long-term product
                    roadmap through scalable systems.
                  </li>
                  <li>
                    Lead multiple features within this project alongside with a
                    team of designers, back-end developers, and product managers
                    to provide insights from a technical perspective, flagging
                    potential delays, raising concerns and issues, and
                    estimating timelines for the work to ensure the successful
                    completion of the project.
                  </li>
                  <li>
                    Possess strong leadership skills, including the ability to
                    communicate effectively, delegate tasks, and provide
                    guidance to team members, and valuable technical insight and
                    leadership to ensure the project is completed on time and to
                    the highest possible standard.
                  </li>
                  <li>
                    Utilized the underlying back-end business logic and
                    architecture to accelerate the front-end development.
                  </li>
                  <li>
                    Strategized the powerful data fetching and caching tool to
                    simplify loading data in the web application and the data
                    flow between the back-end and front-end systems with the use
                    of Redux Toolkit Query.
                  </li>
                  <li>
                    Collaborated with the testing team to build the testing plan
                    in advance of Beta User testing for 21 new redesigned.
                  </li>
                </ul>

                <ul className="list-disc p-6">
                  <Typography textColor="inherit" fontWeight="bold">
                    Technologies:
                  </Typography>
                  <li>HTML</li>
                  <li>Tailwind CSS</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>RESTful API integration</li>
                  <li>Redux Toolkit Query</li>
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
                  <li>
                    Implemented a new single, modernized service available in
                    both official languages (English and French) which features
                    interfaces that empower users to manage renewal reminders on
                    SNB.ca and choose to receive, or opt out of, either email or
                    printed vehicle registration renewal notifications using
                    ReactJS, TypeScript, NodeJS, MySQL, and RESTful API.
                  </li>
                  <li>
                    Implemented system to authenticate users, enabling access to
                    pre-filled information and details for VRR and Reminders
                    (vehicle VIN number, license plate(s), driver license,
                    insurance info).
                  </li>
                  <li>
                    Developed a solution that align seamlessly with the GNB
                    Design System, ensuring a consistent and user-friendly
                    interface. Furthermore, it adheres rigorously to SNB&lsquo;s
                    standards, encompassing language, security, privacy, and
                    accessibility, guaranteeing a robust and compliant product
                    that meets all regulatory requirements.
                  </li>
                  <li>
                    Configured the interaction with existing backend APIs are
                    available and can be leveraged to perform the various
                    outlined function such as user feedback and improvement,
                    profile management and reminder execution.
                  </li>
                  <li>
                    Configured and developed functionality and user interfaces
                    to build the PR portal and documented Technical Design
                    Specifications and Technical Interface Documents.
                  </li>
                  <li>
                    Executed functional unit testing, technical unit testing,
                    security unit testing, integration testing, regression
                    testing, operational readiness testing, and performance
                    testing.
                  </li>
                  <li>
                    Developed the deployment strategy, deployment plan, and
                    go-live rehearsals.
                  </li>
                  <li>
                    Tracked the deployment activities by task and start and end
                    times, and assigned the work to team members.
                  </li>
                  <li>
                    Developed a business and technical roadmap to showcase the
                    current state, evolution plan, and desired future state for
                    the project, including a mapping of delivered capabilities
                    across all phases.
                  </li>
                  <li>
                    Ongoing maintenance and support of the PR portal, provided
                    following each release to address production issues.
                  </li>
                  <li>
                    Worked closely and collaboratively with the external team to
                    identify and agree upon key areas of knowledge transfer as
                    the client&lsquo;s team sets up internal capabilities to
                    support and grow the PR Digital product.
                  </li>
                  <li>
                    Managed day-to-day execution of project plan, reported
                    regular status against project plan, escalated issues /
                    risks to program leadership with preliminary
                    recommendations.
                  </li>
                </ul>
                <ul className="list-disc p-6">
                  <Typography textColor="inherit" fontWeight="bold">
                    Technologies:
                  </Typography>
                  <li>HTML</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>RESTful API integration</li>
                  <li>PostgreSQL</li>
                  <li>NodeJS, ExpressJS</li>
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
                  <li>
                    Builds reusable and scalable UI components to develop large
                    front- end web applications that scale and perform well on
                    all devices using different technologies and frameworks like
                    HTML, CSS, TypeScript, JavaScript, React, Ruby on Rails, and
                    GraphQL.
                  </li>
                  <li>
                    Supports and mentors junior and intermediate team members by
                    sharing knowledge, demoing, documenting, and providing
                    feedback to ensure that code standards and deadlines are
                    consistently met. GraphQL.
                  </li>
                  <li>
                    A major contributor to creating the interactive experience
                    for users with animation using SVG turbulence filter,
                    Parallax.js and GSAP. Executed and maintained 200+unit and
                    integration tests as a part of the development workflow and
                    improved website performance, optimization, and
                    responsiveness across devices and browsers using Jest,
                    Mocha, and ActiveRecord::Fixtures. GraphQL.
                  </li>
                  <li>
                    Implement site mapping with several locale-aware domains
                    that offer a native experience to millions of merchants
                    globally alongside SEO specialists and the translation team
                    to provide localized content via the Argo system. Migrate
                    several legacy existing marketing pages to Remixing
                    Hydrogen, Shopify&lsquo;s React-based headless commerce
                    stack that features a better performance with advancements
                    like optimistic UI, nested routes, and progressive
                    enhancement. GraphQL.
                  </li>
                  <li>
                    Redesign and restructure the existing marketing pages&lsquo;
                    web experience by using the Flipper UI feature flag to
                    manage complex version controls in a large scope of project
                    and feature experiments. Develop an A/B test for Shopify
                    Capital&lsquo;s UI experience to increase the conversion
                    rate with a lift of 11% representing $1.7M+ estimated
                    incremental funding opportunity annually. GraphQL.
                  </li>
                  <li>
                    Collaborate with Agile cross-functional teams of engineers,
                    designers, and product managers by coding, pair programming
                    with code reviews, and white-boarding solutions to plan and
                    estimate development work. Work with the stakeholders on the
                    scope project to flag potential delays and propose technical
                    solutions for user experience, ensuring the alignment of web
                    design, maximum efficiency, and maintaining brand
                    consistency across web pages. GraphQL.
                  </li>
                  <li>
                    Use Ruby on Rails to add and modify controllers, models,
                    views, and integrate front-end code into Rails web
                    applications. GraphQL.
                  </li>
                  <li>
                    Maintain and build web apps that meet WCAG 2.1 AA compliant
                    by using automated and manual testing tools and following
                    best practices in the design system.
                  </li>
                </ul>

                <ul className="list-disc p-6">
                  <Typography textColor="inherit" fontWeight="bold">
                    Technologies:
                  </Typography>
                  <li>HTML</li>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>Ruby</li>
                  <li>Ruby on Rails</li>
                  <li>GraphQL</li>
                  <li>TypeScript</li>
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
                <Typography textColor="inherit">
                  A fundamental understanding of IT services and their uses in
                  the AWS Cloud. This certificate demonstrated cloud fluency and
                  foundational AWS knowledge. The certified practitioner is able
                  to identify essential AWS services necessary to set up
                  AWS-focused projects.
                </Typography>
              </CardContent>
            </Card>

            <Card variant="solid">
              <CardContent>
                <Typography textColor="inherit">
                  JavaScript Unit Testing - The Practical Guide
                </Typography>
                <Typography textColor="inherit">Udemy</Typography>
                <Typography textColor="inherit">2024</Typography>
                <List marker="disc">
                  <ListItem sx={{ color: "white" }}>
                    Write and structure unit & integration tests
                  </ListItem>
                  <ListItem sx={{ color: "white" }}>
                    Remove side effects from tests via mocking and spies
                  </ListItem>
                  <ListItem sx={{ color: "white" }}>
                    Work with popular JavaScript test runners and libraries
                  </ListItem>
                  <ListItem sx={{ color: "white" }}>
                    Write good tests and focus on testing core business logic
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
