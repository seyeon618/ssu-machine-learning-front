import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import SuhyeProfile from "../asset/image/suhye_profile.jpg"
import SeyeonProfile from "../asset/image/seyeon_profile.webp"
import {
    ContentWrap,
    InfoWrap,
    MenuWrap, ProfileAnswer,
    ProfilePicture,
    ProfileTitle,
    ProfileWrap, SubTitle,
    Title,
    WholeWrap
} from "../styles/Menu";

interface Props {
    open: boolean;
    setOpen: (open: boolean)=>void;
}

function Menu({open, setOpen}: Props) {
    const DrawerList = (
        <MenuWrap>
            <ContentWrap>
                <Title>About.</Title>
                <SubTitle>숭실대학교 미디어경영학과</SubTitle>
                <WholeWrap>
                    <ProfileWrap>
                        <ProfilePicture src={SuhyeProfile}/>
                        <InfoWrap>
                            <ProfileTitle>
                                <span>NAME</span>
                                <span>ID</span>
                                <span>ROLE</span>
                            </ProfileTitle>
                            <ProfileAnswer>
                                <span>박수혜</span>
                                <span>20221708</span>
                                <span>기획/디자인</span>
                            </ProfileAnswer>
                        </InfoWrap>
                    </ProfileWrap>
                    <ProfileWrap>
                        <ProfilePicture src={SeyeonProfile}/>
                        <InfoWrap>
                            <ProfileTitle>
                                <span>NAME</span>
                                <span>ID</span>
                                <span>ROLE</span>
                            </ProfileTitle>
                            <ProfileAnswer>
                                <span>조세연</span>
                                <span>20221729</span>
                                <span>개발</span>
                            </ProfileAnswer>
                        </InfoWrap>
                    </ProfileWrap>
                </WholeWrap>
            </ContentWrap>
        </MenuWrap>
    );

    return (
        <div>
        <IconButton onClick={()=>{setOpen(true)}} size="large">
                <MenuIcon fontSize="inherit" />
            </IconButton>
            <Drawer open={open} onClose={()=>{setOpen(false)}} anchor="right">
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default Menu;
