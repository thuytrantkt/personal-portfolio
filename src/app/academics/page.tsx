"use client";

import { Card, CardContent, List, ListItem, Typography } from "@mui/joy";
import "../ui/academics.css";
import useBreakpoint from "../hooks/useBreakpoints";

export default function Academics() {
  const lgScreen = useBreakpoint("lg");

  return (
    <div>
      <h2>Academics</h2>
      <h3>Educational Background</h3>
      <p>
        My academic journey, courses, and educational achievements that have
        shaped my technical expertise.
      </p>
      <h4>Education</h4>
      <div
        className={`${
          lgScreen ? "education-container-lg" : "education-container"
        }`}
      >
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
            <Typography textColor="inherit">Special Event Planning</Typography>
            <Typography textColor="inherit">2017 - 2018</Typography>
            <Typography textColor="inherit">Toronto, Canada</Typography>
          </CardContent>
        </Card>

        <Card variant="solid">
          <CardContent>
            <Typography level="title-lg" textColor="inherit">
              Bachelor's degree
            </Typography>
            <Typography textColor="inherit">
              Vietnam National University in Hanoi, School of Law
            </Typography>
            <Typography textColor="inherit">Labour and Economic Law</Typography>
            <Typography textColor="inherit">2010 - 2014</Typography>
            <Typography textColor="inherit">Hanoi, Vietnam</Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4>Certifications</h4>

        <div
          className={`${
            lgScreen ? "certificates-container-lg" : "certificates-container"
          }`}
        >
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
                A fundamental understanding of IT services and their uses in the
                AWS Cloud. This certificate demonstrated cloud fluency and
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
      </div>
    </div>
  );
}
