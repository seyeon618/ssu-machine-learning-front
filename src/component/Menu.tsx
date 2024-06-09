import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import {MenuWrap} from "../styles/Menu";

interface Props {
    open: boolean;
    setOpen: (open: boolean)=>void;
}

function Menu({open, setOpen}: Props) {
    const DrawerList = (
        <MenuWrap>menu</MenuWrap>
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
