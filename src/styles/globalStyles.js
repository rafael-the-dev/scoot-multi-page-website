import { makeStyles } from "@mui/styles";
import circlePattern from '../assets/images/icons/bg-pattern-circle.svg';

export const useGlobalStyles = makeStyles(theme => ({
    main: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '5%',
            paddingRight: '5%',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '10%',
            paddingRight: '10%',
        }
    },
    px: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    svgColor: {
        '& path': {
            fill: 'currentcolor !important'
        },
        '& g': {
            fill: 'currentcolor !important'
        }
    },
}));