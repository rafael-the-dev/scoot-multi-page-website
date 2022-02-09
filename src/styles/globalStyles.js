import { makeStyles } from "@mui/styles";

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
    darkNavyBg: {
        backgroundColor: '#495567'
    },
    dimGreyBg: {
        backgroundColor: '#939CAA'
    },
    yellowBg: {
        backgroundColor: '#FCB72B !important'
    },
    darkNavyColor: {
        color: '#495567'
    },
    dimGreyColor: {
        color: '#939CAA'
    },
    lightGreyColor: {
        color: '#E5ECF4'
    },
    yellowColor: {
        color: '#FCB72B'
    },
    lightPinkButton: {
        '&:hover': {
            backgroundColor: '#FFF4DF !important',
        }
    },
    yellowButton: {
        '&:hover': {
            backgroundColor: 'transparent !important',
            border: '1px solid #FCB72B !important',
            boxShadow: 'none !important',
            color: '#FCB72B'
        }
    }
}));