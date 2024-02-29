import React, { useState, useEffect } from 'react';

import { Menu } from 'antd';

const items = [
    {
        label: 'Inicio',
        key: 'mail1',
        
    },
    {
        label: 'Sobre',
        key: 'SubMenu1',

        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
        ], 
    },
    {
        label: 'Investir',
        key: 'SubMenu2',
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
        ],
    },
    {
        label: 'Parcerias',
        key: 'SubMenu',
    
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            
        ],
    },
    {
        label: 'Navigation One',
        key: 'mail',
        
    },
];

const Dropdown = () => {
    const [current, setCurrent] = useState('mail');
    const [menuMode, setMenuMode] = useState('horizontal');
    const updateMenuMode = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) { // Assuming 768px is your mobile breakpoint
            setMenuMode('vertical');
        } else {
            setMenuMode('horizontal');
        }
    };

    // Listen to window resize event
    useEffect(() => {
        updateMenuMode(); // Update on initial render
        window.addEventListener('resize', updateMenuMode);
        return () => window.removeEventListener('resize', updateMenuMode);
    }, []);
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode={menuMode} items={items} />;
};

export default Dropdown;