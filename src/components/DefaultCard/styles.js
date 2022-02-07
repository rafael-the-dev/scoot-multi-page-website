import { makeStyles } from "@mui/styles";
import rightArrow from '../../assets/images/patterns/right-arrow.svg'
import leftDownwardArrow from '../../assets/images/patterns/left-downward-arrow.svg'
import circles from '../../assets/images/patterns/circle.svg'

export const useStyles = makeStyles(theme => ({
    card: {
        
    },
    cardMediaContainer: {
        '&::after': {
            backgroundImage: `url(${leftDownwardArrow})`,
            backgroundSize: 597,
            content: '""',
            left: 0,
            top: 0
        },
        [theme.breakpoints.up('sm')]: {
            '&::after': {
                backgroundImage: `url(${leftDownwardArrow}), url(${circles})`,
            }
        }
    },
    telemetry: {
        '&::after': {
            backgroundPosition: 'right -293px bottom 12px'
        },
        [theme.breakpoints.up('sm')]: {
            '&::after': {
                backgroundPosition: 'right -308px bottom 50px, right -250px center',
                backgroundSize: '597px, 300px',
            }
        }
    },
    nearYou: {
        '&::after': {
            backgroundImage: `url(${rightArrow})`,
            backgroundPosition: 'left -221px top',
            backgroundSize: 433,
        },
        [theme.breakpoints.up('sm')]: {
            '&::after': {
                backgroundImage: `url(${rightArrow}), url(${circles})`,
                backgroundPosition: 'left -221px top, left -250px center',
                backgroundSize: '433px, 300px',
            }
        }
    },
    payments: {
        '&::after': {
            backgroundPosition: 'right -475px top 2px',
            backgroundSize: 673,
        },
        [theme.breakpoints.up('sm')]: {
            '&::after': {
                backgroundPosition: 'right -347px top 39px, right -250px center',
                backgroundSize: '673px, 300px',
            }
        }
    },
    cardMedia: {
        height: 300,
        width: 300
    },
    cardContent: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '8%',
            paddingRight: '8%'
        }
    }
}));