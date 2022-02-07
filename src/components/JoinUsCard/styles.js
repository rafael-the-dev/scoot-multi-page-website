import { makeStyles } from "@mui/styles";
import rightArrow from '../../assets/images/patterns/right-arrow.svg'
import leftDownwardArrow from '../../assets/images/patterns/left-downward-arrow.svg'
import circles from '../../assets/images/patterns/circle.svg'

export const useStyles = makeStyles(theme => ({
    card: {
        [theme.breakpoints.up('md')]: {
            width: '31.3333%'
        }
    },
    index: {
        '&::after': {
            backgroundColor: '#FCB72B',
            color: '#495567',
            height: 60,
            transform: "translate(0, -44%)",
            width: 60
        }
    },
    first: {
        '&::after': {
            content: '"01" !important'
        }
    },
    second: {
        '&::after': {
            content: '"02" !important'
        }
    },
    third: {
        '&::after': {
            content: '"03" !important'
        }
    },
    cardMedia: {
        height: 250,
        width: 250
    }
}));