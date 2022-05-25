import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	NumberCard: {
		width: '60px',
		height: '100px',
		border: '2px solid black',
		backgroundColor: theme.palette.text.primary,
		padding: '20px',
		margin: '2px',
		borderRadius: '6px',
		textAlign: 'center',
		lineHeight: '100px',
		color: theme.palette.primary.main,
		fontSize: '22px',
		fontWeight: 600,
		transition: 'transform .2s',
		'&:hover': {
			transform: 'translateY(-20%)'
		},
	},
	NumberSelected: {
		width: '60px',
		height: '100px',
		border: '2px solid black',
		backgroundColor: theme.palette.primary.light,
		padding: '20px',
		margin: '2px',
		borderRadius: '6px',
		textAlign: 'center',
		lineHeight: '100px',
		color: theme.palette.text.primary,
		fontSize: '20px',
		transform: 'translateY(-20%)',
		fontWeight: 600

	},
	Image: {
		width: '40px',
	}
}));
