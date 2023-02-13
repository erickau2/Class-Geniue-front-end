import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

export default function ResponsiveSplitScreen() {
  return (
    <Box>
      <Grid
        container
        columnSpacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, md: 12 }}
        wrap="wrap"
      >
        <Grid item xs={6}>
          <Card>Left</Card>
        </Grid>
        <Grid item xs={6}>
          <Card>Right</Card>
        </Grid>
      </Grid>
    </Box>
  );
}
