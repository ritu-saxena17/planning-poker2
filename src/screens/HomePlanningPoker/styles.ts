import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  HeaderText: {
    color: theme.palette.text.primary,
    fontSize: '50px',
    width: '600px',
    fontWeight: 200,
  },
  JoinButton: {
    position: 'relative',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    width: '600px',
    height: '80px',
    borderRadius: '8px',
    textTransform: 'uppercase',
    marginTop: '30px',
    fontWeight: 600,
    fontSize: '20px',
    cursor: 'pointer',
    border: `2px solid ${theme.palette.text.primary}`,
    transition: '.2s transform ease-in-out',
    willChange: 'transform',
    zIndex: 0,
    overflow: 'hidden',
    '&::after': {
      backgroundColor: 'red',
      borderRadius: '8px',
      transform: 'translate(-100%, 0) rotate(10deg)',
      transformOrigin: 'top left',
      transition: '.2s transform ease-out',
      zIndex: -1,
      position: 'absolute',
      left: 0,
      top: 0,
      display: 'block',
      content: '',
      willChange: 'transform',
    },
    '&:hover::after': {
      transform: 'translate(0, 0)',
      color: 'white',
    },
    '&:hover': {
      border: `2px solid transparent`,
      backgroundColor: 'white',
      color: theme.palette.primary.main,
      transform: 'scale(1.05)',
      willChange: 'transform'
    },
  },
}));
