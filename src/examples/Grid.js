import Grid from "../components/Grid";
import Button from "../components/Buttons/Button";

const AnkapGrid = () => {
  return (
    <Grid
      className={"mb-4"}
      container
      sm={2}
      gap={4}
      fullWidth
    >
      <Grid fullWidth>
        <Button
          ms="ms-0"
          mt="mt-0"
          me="me-0"
          mb="mb-0"
          className="w-full"
          text="Sign Up"
        />
      </Grid>
      <Grid fullWidth>
        <Button
          ms="ms-0"
          mt="mt-0"
          me="me-0"
          mb="mb-0"
          className="w-full"
          text="Login"
        />
      </Grid>
    </Grid>
  )
};

export default AnkapGrid;
