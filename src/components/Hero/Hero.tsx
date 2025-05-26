import { Chip, Typography } from "@mui/joy";
import "../../app/ui/hero.css";

const Hero = ({
  heading,
  subhead,
  description,
}: {
  heading: string;
  subhead: string;
  description: string;
}) => {
  return (
    <div className="hero-container">
      <Chip color="success" variant="soft">
        <Typography level="body-sm" component="h1">
          {heading}
        </Typography>
      </Chip>
      <Typography
        level="h1"
        component="h2"
        sx={{ paddingTop: "8px", paddingBottom: "12px" }}
      >
        {subhead}
      </Typography>
      <p>{description}</p>
    </div>
  );
};

export default Hero;
