import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	HeaderText: {
		color: theme.palette.text.primary,
		fontSize: '50px',
		width: '600px',
		fontWeight: 200,
	},
	JoinButton: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.text.primary,
		width: '600px',
		height: '80px',
		marginTop: '30px',
		fontWeight: 600,
		fontSize: '20px',
		'&:hover': {
			backgroundColor: theme.palette.text.primary,
		},
	},
}));