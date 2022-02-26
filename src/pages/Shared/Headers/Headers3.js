import { Menu, MenuItem } from '@mui/material';
import React from 'react';

const Headers3 = () => {
    return (
        <Menu hoverOpenDelay={0} hoverCloseDelay={200}>
            <MenuItem text="Item1">
                <MenuItem text="Item1.1" />
                <MenuItem text="Item1.2">
                    <MenuItem text="Item1.2.1" />
                    <MenuItem text="Item1.2.2" />
                </MenuItem>
            </MenuItem>
            <MenuItem text="Item2">
                <MenuItem text="Item2.1" />
                <MenuItem text="Item2.2" />
            </MenuItem>
            <MenuItem text="Item3" />
        </Menu>
    );
};

export default Headers3;