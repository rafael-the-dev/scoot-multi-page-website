import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    notListedLocationsDescription: {
        [theme.breakpoints.up('md')]: {
            maxWidth: '50%'
        },
        [theme.breakpoints.up(1200)]: {
            maxWidth: '60%'
        }
    }
}));