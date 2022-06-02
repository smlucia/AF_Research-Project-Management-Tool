import React from 'react';
import styles from "../Main/styles.module.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
//import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const studentDashboard = () => {

    const images = [
        {
            url: 'https://krmangalam.com/blogs/wp-content/uploads/2019/11/813-1024x768.jpg',
            title: 'STUDENT GROUPS',
            width: '30%',
        },
        {
            url: 'https://eduvoice.in/wp-content/uploads/2019/12/Research-paper.png',
            title: 'RESEARCH TOPICS',
            width: '30%',
        },
        {
            //url: 'https://image.shutterstock.com/image-vector/college-school-students-kids-man-260nw-1234266016.jpg',
            url: 'https://st2.depositphotos.com/1763191/12379/v/950/depositphotos_123793510-stock-illustration-lots-of-children-reading-and.jpg',
            title: 'SUBMIT DOCUMENTS',
            width: '30%',
        },
        {
            url: 'https://cdni.iconscout.com/illustration/premium/thumb/junior-programmer-working-on-desk-in-office-975004.png',
            title: 'DOWNLOAD TEMPLATE',
            width: '30%',
        },
        {
            url: 'https://st.depositphotos.com/1037238/2532/v/950/depositphotos_25326539-stock-illustration-teacher-and-students-in-classroom.jpg',
            title: 'REQUEST SUPERVISORS',
            width: '30%',
        },
        {
            url: 'https://www.kindpng.com/picc/m/173-1737512_classroom-lectures-professor-student-the-teacher-clipart-student.png',
            title: 'Camera',
            width: '30%',
        },
    ];

    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        marginLeft: 30,
        marginTop: 25,
        height: 250,
        [theme.breakpoints.down('sm')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
                opacity: 0.10,
            },
            '& .MuiImageMarked-root': {
                opacity: 0,
            },
            '& .MuiTypography-root': {
                border: '4px solid currentColor',
            },
        },
    }));

    const ImageSrc = styled('span')({
        position: 'absolute',
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    });

    const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.black,
    }));

    const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        //fontWeight: 'bolder',
        backgroundColor: theme.palette.common.white,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    }));

    const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    }));

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location="/";
	};

    const imageButtonHandling = () => {

        if(images.title = 'STUDENT GROUP') {
            window.location = "/studentGroup";

        }else if (images.title = 'RESEARCH TOPICS'){
            window.location = "/studentResearchTopics";

        }else if (images.title = 'SUBMIT DOCUMENTS'){
            window.location = "/studentSubmitDocument";

        }else if (images.title = 'DOWNLOAD TEMPLATE'){
            window.location = "/studentDownloadTemplate";

        }else if (images.title = 'REQUEST SUPERVISORS'){
            window.location = "/studentRequestSupervisor";

        }else{
            window.location = "/";
        }

    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Welcome {localStorage.getItem("username")}</h1>
                <button
                    className={styles.white_btn}
                    onClick={handleLogout}>
                    LOGOUT
                </button>
            </nav>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                        onClick={imageButtonHandling}

                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography

                                component="span"
                                variant="h6"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}
            </Box>
        </div>
    );

}
export default studentDashboard;