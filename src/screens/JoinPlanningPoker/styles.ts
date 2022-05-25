import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	FormWrapper: {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
	},
	Label: {
		color: theme.palette.text.primary
	},
	Input: {
		width: '300px',
		height: '30px',
		outline: 'none',
		padding: '12px',
		borderRadius: '4px',
		border: 'none',
	},
	Button: {
		marginTop: '15px',
		outline: 'none',
		padding: '10px',
		border: 'none',
		borderRadius: '8px',
		backgroundColor: theme.palette.primary.light,
		height: '50px',
		color: theme.palette.primary.main,
		cursor: 'pointer',
		fontWeight: 600
	}
}));