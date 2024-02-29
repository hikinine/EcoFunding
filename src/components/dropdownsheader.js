import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
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
        icon: <MailOutlined />,
    },
];

const Dropdown = () => {
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Dropdown;