import React, {useContext} from 'react';
import {FooterWrap, GuideBox, IconWrap} from "../styles/Footer";
import IconButton from "@mui/material/IconButton";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import {AppContext} from "../Context";
import { ToastContainer, toast, ToastOptions, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOption: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    type: 'error' as TypeOptions
};

function Footer() {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('Footer must be used within an AppProvider');
    }
    const { firstFile, secondFile, firstInputValue, secondInputValue } = context;

    const generateImage = () => {
        if(!firstFile) {
            toast("Please upload the first puppy picture!", toastOption);
        }
        if(!firstInputValue || !secondInputValue) {
            toast("Please enter the percentage of puppies you want to synthesize!", toastOption);
        }
    }

    return (
        <FooterWrap>
            <ToastContainer />
            <GuideBox>
                <IconWrap onClick={generateImage}>
                    <IconButton size="large" sx={{padding: 0}}>
                        <SettingsSuggestIcon sx={{ fontSize: 40, color: '#FF8C00', padding: 0 }}/>
                    </IconButton>
                    Creative Image
                </IconWrap>
            </GuideBox>
        </FooterWrap>
    );
}

export default Footer;
