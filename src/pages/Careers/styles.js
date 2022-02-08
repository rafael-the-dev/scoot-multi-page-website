import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    jobsContainer: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: '10%',
            paddingRight: '10%'
        }
    },
    jobCard: {
        backgroundColor: '#F2F5F9'
    }
}));