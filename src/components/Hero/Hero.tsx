import { Chip, Typography } from "@mui/joy";

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
    <div className="flex flex-col justify-items-center items-center py-16">
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
