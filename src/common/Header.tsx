import React from 'react';
import {HeaderWarp, Image, Text, IconWrap} from "../styles/Header";
import CheeseCake from "../asset/image/cheeseCake.png";
import Menu from "../component/Menu";

function Header() {
    const [open, setOpen] = React.useState(false);

    return (
        <HeaderWarp>
            <IconWrap>
                <Image src={CheeseCake} alt="cheese_cake"/>
                <Text>cheese cake</Text>
            </IconWrap>
            <Menu open={open} setOpen={setOpen}/>
        </HeaderWarp>
    );
}

export default Header;
