import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    worldMapImageContainer: {
        height: 300,
        [theme.breakpoints.up('sm')]: {
            height: 350
        },
        [theme.breakpoints.up('md')]: {
            height: 450
        },
    },
    location: {
        backgroundColor: '#FFF4DF'
    },
    notListedLocationsDescription: {
        [theme.breakpoints.up('md')]: {
            maxWidth: '50%'
        },
        [theme.breakpoints.up(1200)]: {
            maxWidth: '60%'
        }
    }
}));