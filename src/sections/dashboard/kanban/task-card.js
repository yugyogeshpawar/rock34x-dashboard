import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Box, Button, Card, CardActions, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelector } from '../../../store';

const useTask = (taskId) => {
  return useSelector((state) => {
    const { tasks } = state.kanban;
    return tasks.byId[taskId];
  });
};

export const TaskCard = forwardRef((props, ref) => {
  const { taskId, dragging, onOpen, image ,name,amount, ...other } = props;
  const task = useTask(taskId);

  if (!task) {
    return null;
  }

  return (
    <Card
    key={taskId}
      elevation={dragging ? 8 : 1}
      onClick={onOpen}
      ref={ref}
      sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'background.paper'),
        ...(dragging && {
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'background.paper'),
        }),
        p: 3,
        userSelect: 'none',
        '&:hover': {
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.700' : 'neutral.50'),
        },
        '&.MuiPaper-elevation1': {
          boxShadow: 1,
        },
      }}
      {...other}
    >
      <Stack
        alignItems="center"
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={3}
        sx={{
          px: 4,
          py: 3,
        }}
      >
        <div>
          <img src={task.image} width={48} alt={`Task ${task.name}`} />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="text.secondary" variant="body2">
            {task.name}
          </Typography>
          <Typography color="text.primary" variant="h4">
            {task.amount}
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <CardActions>
        <Button color="inherit" endIcon={<SvgIcon><ArrowRightIcon /></SvgIcon>} size="small">
           See all tasks
        </Button>
      </CardActions>
    </Card>
  );
});

TaskCard.propTypes = {
  taskId: PropTypes.string.isRequired,
  dragging: PropTypes.bool,
  onOpen: PropTypes.func,
};

TaskCard.defaultProps = {
  dragging: false,
  onOpen: () => {},
};
