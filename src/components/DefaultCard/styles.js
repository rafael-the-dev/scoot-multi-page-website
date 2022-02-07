import { makeStyles } from "@mui/styles";
import rightArrow from '../../assets/images/patterns/right-arrow.svg'
import leftDownwardArrow from '../../assets/images/patterns/left-downward-arrow.svg'
import circles from '../../assets/images/patterns/circle.svg'

export const useStyles = makeStyles(theme => ({
    card: {
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${circles})`,
            backgroundSize: 300,
            backgroundPosition: 'right -250px center',
            '&:nth-child(even)': {
                backgroundPosition: 'left -250px center',
            }
        }
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
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: '7%',
            '&::after': {
                backgroundImage: `url(${leftDownwardArrow})`,
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
        },
        [theme.breakpoints.up('md')]: {
            '&::after': {
                backgroundPosition: 'right -222px bottom 7px, right -250px center',
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
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '5%',
            '&::after': {
                backgroundImage: `url(${rightArrow})`,
                backgroundPosition: 'left -221px top 17px, left -250px center',
            },
            '& + div': {
                marginRight: '7%'
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
        },
        [theme.breakpoints.up('md')]: {
            '&::after': {
                backgroundPosition: 'right -347px top 39px, right -250px center',
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
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '7%',
            maxWidth: '40%'
        }
    }
}));