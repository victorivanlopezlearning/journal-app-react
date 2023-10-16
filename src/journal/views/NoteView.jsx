import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks';
import { setActiveNote, startSaveNote } from '../../store/journal';

export const NoteView = () => {

  const dispatch = useDispatch();
  const { active: note } = useSelector(state => state.journal);

  const { title, body, onInputChange, formState, date } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    });
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState])

  const onSaveNote = () => {
    dispatch(startSaveNote());
  }


  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
      </Grid>
      <Grid item>
        <Button
          color='primary'
          sx={{ padding: 2 }}
          onClick={onSaveNote}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type='text'
          variant='filled'
          placeholder='Ingrese un título'
          label='Título'
          name='title'
          value={title}
          onChange={onInputChange}
          fullWidth
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type='text'
          variant='filled'
          placeholder='¿Qué sucedió en el día de hoy?'
          name='body'
          value={body}
          onChange={onInputChange}
          fullWidth
          multiline
          minRows={5}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}