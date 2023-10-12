import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { NothingSelectedView, NoteView } from '../views';
import { startNewNote } from '../../store/journal';

export const JournalPage = () => {

  const { isSaving, active } = useSelector(state => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote = () => {

    dispatch(startNewNote());
  }

  return (
    <>
      {
        (!!active)
          ? <NoteView />
          : <NothingSelectedView />
      }

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        disabled={isSaving}
        onClick={onClickNewNote}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </>
  )
}