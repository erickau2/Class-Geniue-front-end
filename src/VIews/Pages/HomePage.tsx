import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import Stack from "@mui/material/Stack";
import "chart.js/auto";
import { Radar, Line } from "react-chartjs-2";

export default function HomePage() {
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
        <Grid item xs={6}>
          <Typography gutterBottom variant="h6" component="div">
            Student Statistics
          </Typography>
          <Stack spacing={2}>
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
                />
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Frequently Used Features
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <NoteAddOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Homework" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InsightsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Student Performance" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <NoteAddOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
