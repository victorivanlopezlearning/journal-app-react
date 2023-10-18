import { useDispatch } from 'react-redux';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';

export const SidebarItem = ({ note }) => {

  const dispatch = useDispatch();

  const onActiveNote = () => {
    dispatch(setActiveNote({ ...note }));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={onActiveNote}
      >
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText
            primary={note.title}
            secondary={note.body}
            primaryTypographyProps={{ noWrap: true }}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}