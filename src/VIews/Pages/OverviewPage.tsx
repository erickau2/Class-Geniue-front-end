import { CenterFocusStrong, Height } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import { Radar, Line } from "react-chartjs-2";
const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};
export default function OverviewPage() {
  return (
    <Box>
      <Typography gutterBottom variant="h4" component="div">
        Hello, Mr Wong!
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, md: 12 }}
        wrap="wrap"
      >
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ padding: 1, textAlign: "center" }}
            >
              Recent inCharge Classes: 2B
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={9}></Grid>
        <Grid item xs={6} style={{ height: "auto" }}>
          <Card>
            <CardContent>
              <Radar
                data={{
                  labels: [
                    "Chinese",
                    "English",
                    "Science",
                    "General Study",
                    "Physical Education",
                  ],
                  datasets: [
                    {
                      label: "Overall Performance",
                      data: [60, 59, 90, 81, 30],
                      fill: true,
                      backgroundColor: "rgba(255, 99, 132, 0.2)",
                      borderColor: "rgb(255, 99, 132)",
                      pointBackgroundColor: "rgb(255, 99, 132)",
                      pointBorderColor: "#fff",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgb(255, 99, 132)",
                    },
                  ],
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} style={{ height: "auto" }}>
          <Card>
            <CardContent>
              <Line
                data={{
                  labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
                  datasets: [
                    {
                      label: "Student Overall Performance",
                      data: [85, 75, 69, 72, 89, 94],
                      borderWidth: 1,
                    },
                  ],
                }}
                style={{ height: "300px" }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
}
