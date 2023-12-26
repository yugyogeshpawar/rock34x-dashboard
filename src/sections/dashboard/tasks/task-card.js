import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { getInitials } from "../../../utils/get-initials";

export const TaskCard = (props) => {
  const {
    title,
    description,
    start,
    end,
    allDay,
    onEdit,
    ...other
  } = props;

  const formattedStartDate = format(new Date(start), "MMM d, yyyy h:mm a");
  const formattedEndDate = format(new Date(end), "MMM d, yyyy h:mm a");

  return (
    <Card
      elevation={3}
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 12,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      {...other}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            mt: 2,
            mb: 3,
            fontSize: 16,
            lineHeight: 1.6,
          }}
          variant="body1"
        >
          {description}
        </Typography>
        <Stack
          alignItems="flex-start"
          direction="column"
          spacing={1}
          sx={{ mt: 2 }}
        >
          <Typography variant="body2">
            {allDay
              ? "All Day"
              : `${formattedStartDate} - ${formattedEndDate}`}
          </Typography>
        </Stack>
        <Button
          variant="contained"
          onClick={onEdit}
          sx={{
            backgroundColor: "#2196F3",
            color: "#ffffff",
            mt: 3,
            "&:hover": {
              backgroundColor: "#1565C0",
            },
          }}
        >
          Update
        </Button>
      </CardContent>
    </Card>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  allDay: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
};
