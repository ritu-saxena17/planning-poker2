import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  HeaderText: {
    color: theme.palette.text.primary,
    fontSize: '50px',
    width: '600px',
    fontWeight: 200,
  },
  JoinButton: {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
    width: '600px',
    height: '80px',
    borderRadius: '8px',
    textTransform: 'uppercase',
    marginTop: '30px',
    fontWeight: 600,
    fontSize: '20px',
    cursor: 'pointer',
    border: `2px solid ${theme.palette.primary.light}`,
    transition: '.2s transform ease-in-out',
    zIndex: 0,
    overflow: 'hidden',
    '&:hover': {
      border: `2px solid transparent`,
      backgroundColor: 'white',
      color: theme.palette.primary.main,
      transform: 'scale(1.05)',
    },
  },
}));
