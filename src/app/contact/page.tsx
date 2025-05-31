"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Textarea,
  Typography,
} from "@mui/joy";
import { EmailIcon, GitHubIcon, LinkedInIcon, SendIcon } from "@/_assets/icons";
import Link from "next/link";
import "@/_assets/stylesheets/contact.css";
import useBreakpoint from "@/_hooks/useBreakpoints";
import Hero from "@/_components/Hero/Hero";

export default function Contact() {
  const lgScreen = useBreakpoint("lg");

  return (
    <>
      <Hero
        heading="Get In Touch"
        subhead="Contact Me"
        description="Feel free to reach out to me for collaboration, questions, or just to say hello. I'm open to discussing new projects, creative ideas, or opportunities."
      />
      <div
        className={`${
          lgScreen ? "contact-body-container--lg" : "contact-body-container"
        }`}
      >
        <Card variant="outlined">
          <Typography level="title-lg">Contact Information</Typography>
          <Typography>
            I&lsquo;d love to hear from you. Whether you have a question,
            proposal, or just want to say hi.
          </Typography>

          <CardContent>
            <List sx={{ flexGrow: "initial", paddingBottom: "16px" }}>
              <ListItem>
                <ListItemDecorator>
                  <EmailIcon />
                </ListItemDecorator>
                <ListItemContent>
                  <Typography level="title-sm">Email</Typography>
                  <Typography level="body-sm" noWrap>
                    christiesunnie@gmail.com
                  </Typography>
                </ListItemContent>
              </ListItem>
            </List>

            <Typography left="title-md">Connect with me</Typography>
            <List size="sm" sx={{ flexDirection: "row" }}>
              <ListItem sx={{ height: "fit-content" }}>
                <Link href="https://github.com/thuytrantkt">
                  <GitHubIcon sx={{ width: "36px", height: "36px" }} />
                </Link>
              </ListItem>
              <ListItem sx={{ height: "fit-content" }}>
                <Link href="https://www.linkedin.com/in/thuytrantkt/">
                  <LinkedInIcon sx={{ width: "36px", height: "36px" }} />
                </Link>
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <Typography level="title-lg">Send Me a Message</Typography>
          <Typography>
            Let&lsquo;s start a conversation. Fill out the form below and
            I&lsquo;ll get back to you as soon as possible.
          </Typography>

          <CardContent
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
              gap: 1.5,
            }}
          >
            <FormControl sx={{ gridColumn: "1/2" }}>
              <FormLabel>Name</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input />
            </FormControl>
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel>Subject</FormLabel>
              <Input placeholder="Subject of your message" />
            </FormControl>
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Write your message here"
                minRows={3}
                maxRows={5}
              />
            </FormControl>
            <CardActions sx={{ width: "180px" }}>
              <Button
                variant="solid"
                color="primary"
                startDecorator={<SendIcon />}
              >
                Send Message
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
