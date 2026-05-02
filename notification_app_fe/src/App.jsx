import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import { Log } from "../../logging_middleware/src/logger.js";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get(
          "http://localhost:5000/api/notifications",
        );
        setNotifications(response.data);
        await Log("frontend", "info", "api", "Fetched notifications");
      } catch (err) {
        setError(true);
        await Log("frontend", "error", "api", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <Container sx={{ paddingY: 4, maxWidth: 700 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Notifications
      </Typography>

      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">Error loading data</Typography>}

      {!loading && !error && (
        <Box sx={{ display: "grid", gap: 2 }}>
          {notifications.length === 0 ? (
            <Typography>No notifications found.</Typography>
          ) : (
            notifications.map((item, index) => (
              <Card key={index} variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {item.title || "Untitled"}
                  </Typography>
                  <Typography>
                    {item.message || "No message available"}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      )}
    </Container>
  );
}

export default App;
