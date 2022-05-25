import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	Header: {
		position: 'absolute',
		top: 0,
		right: 0,
		padding: '10px',
		display: 'flex',
		flexDirection: 'row',
		lineHeight: '30px',
		margin: '20px'
	},
	NameAvatar: {
		textTransform: 'uppercase',
		width: '30px',
		height: '30px',
		borderRadius: '20px',
		textAlign: 'center',
		backgroundColor: theme.palette.primary.light,
		lineHeight: '30px',
		opacity: '0.8',
		color: theme.palette.text.primary,
		fontWeight: 600,

	},
	NameText: {
		marginLeft: '10px',
		color: theme.palette.text.primary,
		fontWeight: 600,
	},
	NumberCardWrapper: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		cursor: 'pointer',
		marginLeft: '100px',
		marginBottom: '20px'

	}
}));