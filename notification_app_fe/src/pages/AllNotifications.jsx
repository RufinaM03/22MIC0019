// import { useEffect, useState } from "react";
// import API from "../services/api";

// function AllNotifications() {
//   const [notifications, setNotifications] = useState([]);
//   const [filter, setFilter] = useState("All");

//   useEffect(() => {
//     async function fetchNotifications() {
//       try {
//         const response = await API.get("/notifications");

//         setNotifications(response.data.notifications);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     fetchNotifications();
//   }, []);

//   const filteredNotifications =
//     filter === "All"
//       ? notifications
//       : notifications.filter(
//           (item) => item.Type.toLowerCase() === filter.toLowerCase(),
//         );

//   return (
//     <div
//       style={{
//         maxWidth: "800px",
//         margin: "0 auto",
//         padding: "20px",
//       }}
//     >
//       <h1
//         style={{
//           textAlign: "center",
//           color: "white",
//           marginBottom: "20px",
//         }}
//       >
//         Notifications
//       </h1>

//       <div
//         style={{
//           marginBottom: "20px",
//           display: "flex",
//           gap: "10px",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         <button onClick={() => setFilter("All")}>All</button>

//         <button onClick={() => setFilter("Event")}>Event</button>

//         <button onClick={() => setFilter("Result")}>Result</button>

//         <button onClick={() => setFilter("Placement")}>Placement</button>
//       </div>

//       {filteredNotifications.map((item) => (
//         <div
//           key={item.ID}
//           style={{
//             backgroundColor: "white",
//             padding: "16px",
//             marginBottom: "16px",
//             borderRadius: "12px",
//             boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//             width: "100%",
//             boxSizing: "border-box",
//           }}
//         >
//           <h3>{item.Type}</h3>

//           <p>{item.Message}</p>

//           <small>{item.Timestamp}</small>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AllNotifications;

import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Box,
} from "@mui/material";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const response = await API.get("/notifications");

        setNotifications(response.data.notifications);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNotifications();
  }, []);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) => item.Type.toLowerCase() === filter.toLowerCase(),
        );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 4,
          fontSize: {
            xs: "2.2rem",
            sm: "3rem",
          },
        }}
      >
        Notifications
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Button variant="contained" onClick={() => setFilter("All")}>
          All
        </Button>

        <Button variant="contained" onClick={() => setFilter("Event")}>
          Event
        </Button>

        <Button variant="contained" onClick={() => setFilter("Result")}>
          Result
        </Button>

        <Button variant="contained" onClick={() => setFilter("Placement")}>
          Placement
        </Button>
      </Box>

      <Grid container spacing={3}>
        {filteredNotifications.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.ID}>
            <Card
              sx={{
                height: "220px",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <CardContent
                sx={{
                  width: "100%",
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {item.Type}
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                  {item.Message}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.Timestamp}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AllNotifications;
