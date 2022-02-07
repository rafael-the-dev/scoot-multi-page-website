import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Button, Hidden, Typography } from '@mui/material';
import DefaultHero from '../../components/DefaultHero';

const AboutPage = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <main>
            <DefaultHero 
                page="about"
                title='About'
            />
        </main>
    );
};

export default AboutPage;