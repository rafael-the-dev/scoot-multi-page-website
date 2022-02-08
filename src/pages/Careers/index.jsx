import classNames from 'classnames';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Button, Typography } from '@mui/material';
import DefaultHero from '../../components/DefaultHero';
import DefaultCard from '../../components/DefaultCard';
import joinUsImage from '../../assets/images/join-us.jpg'
import JoinUsSection from '../../components/JoinUsSection';
import { useMemo } from 'react';
import { Link } from 'react-router-dom'

const Careers = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const jobsList = useMemo(() => [
        {
            position: 'General Manager',
            location: 'Jakarta, Indonesia'
        },
        {
            position: 'UI/UX Designer',
            location: 'Yokohama, Japan'
        },
        {
            position: 'Blog Content Copywriter',
            location: 'New York, United States'
        },
        {
            position: 'Graphic Designer',
            location: 'New York, United States'
        },
        {
            position: 'Fleet Supervisor',
            location: 'Jakarta, Indonesia'
        },
        {
            position: 'UX Analyst',
            location: 'London, United Kingdom'
        }
    ], [])
    return (
        <main>
            <DefaultHero page="careers" title='Careers' />
            <div className={classNames('pt-24 md:pt-16')}>
                <DefaultCard 
                    description="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
                    image={joinUsImage}
                    index={0}
                    title="Care to join our mission?"
                />
            </div>
            <JoinUsSection />
            <div className={classNames(globalStyles.px, classes.jobsContainer)}>
                {
                    jobsList.map(item => (
                        <article className={classNames(classes.jobCard, globalStyles.px, `mb-6 py-6
                            flex flex-col items-center sm:flex-row sm:justify-between`)}>
                            <div className={classNames('text-center sm:text-left')}>
                                <Typography 
                                    className={classNames(globalStyles.darkNavyColor, 'font-bold')}
                                    component="h3"
                                    variant="h5" 
                                    >
                                    { item.position }
                                </Typography>
                                <Typography 
                                    className={classNames(globalStyles.dimGreyColor, 'mt-2 text-base')}
                                    variant="body2" 
                                    >
                                    { item.location }
                                </Typography>
                            </div>
                            <Link to="/" className={classNames(classes.heroLink, 'w-full sm:w-auto mt-8 sm:mt-0')}>
                                <Button 
                                    className={classNames('capitalize w-full sm:w-auto sm:px-12 md:px-20 py-2.5', globalStyles.yellowBg)}
                                    variant="contained">
                                    Apply
                                </Button>
                            </Link>
                        </article>
                    ))
                }
            </div>
        </main>
    );
};

export default Careers;