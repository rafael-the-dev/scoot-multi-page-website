import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    faqTitle: {
        [theme.breakpoints.up('md')]: {
            width: '35%'
        },
        [theme.breakpoints.up(1200)]: {
            width: '30%'
        }
    },
    faqList: {
        [theme.breakpoints.up('md')]: {
            maxWidth: '65%'
        },
        [theme.breakpoints.up(1200)]: {
            maxWidth: '70%'
        }
    }
}));