// UpdateEvent.jsx
import React, { useState, useEffect } from "react";
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Stack } from "@mui/material";

const UpdateEvent = ({ event, onUpdate, onCancel, isOpen }) => {
  const [updatedEvent, setUpdatedEvent] = useState({ ...event });

  // Update local state when the event prop changes
  useEffect(() => {
    setUpdatedEvent({ ...event });
  }, [event]);

  const handleInputChange = (field, value) => {
    setUpdatedEvent((prev) => ({ ...prev, [field]: value }));
  };

  const handleApplyChanges = () => {
    // Call the update function with the updated event
    onUpdate(updatedEvent);
  };

  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <DialogTitle>Edit Event</DialogTitle>
      <DialogContent>
      <Stack spacing={2}>
        <TextField
          label="Title"
          value={updatedEvent.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
        <TextField
          label="Description"
          value={updatedEvent.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </Stack>
    </DialogContent>
    
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={handleApplyChanges}>Apply Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateEvent;
