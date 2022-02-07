import { makeStyles } from "@mui/styles";
import rightArrow from '../../assets/images/patterns/right-arrow.svg'
import leftDownwardArrow from '../../assets/images/patterns/left-downward-arrow.svg'

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
        }
    },
    telemetry: {
        '&::after': {
            backgroundPosition: 'right -293px bottom 12px'
        }
    },
    nearYou: {
        '&::after': {
            backgroundImage: `url(${rightArrow})`,
            backgroundPosition: 'left -221px top',
            backgroundSize: 433,
        }
    },
    payments: {
        '&::after': {
            backgroundPosition: 'right -475px top 2px',
            backgroundSize: 673,
        }
    }
}));