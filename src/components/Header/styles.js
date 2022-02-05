import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    headerDrawerRoot: {
        top: 72,
        '& .MuiBackdrop-root': {
            top: 72
        }
    },
    headerDrawerPaper: {
        height: 'calc(100% - 72px)',
        top: 72,
        width: '80%',
        [theme.breakpoints.up(450)]: {
            width: 330
        }
    },
    headerNavItemText: {
        [theme.breakpoints.up('sm')]: {
            color: '#939CAA'
        }
    }
}));