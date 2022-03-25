import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	Root: {
		backgroundColor: theme.palette.primary.main,
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

	},
}));
