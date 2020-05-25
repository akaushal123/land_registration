import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () =>{
    return (
        <Menu style={{marginTop: '20px'}}>
            <Link route="/">
                <a className={"item"}><img style={{height:"40px"}} src={"../static/tiranga_national_emblem.png"} alt={'logo'}/></a>
            </Link>

            <Menu.Menu position={"right"}>
                <Link route={'/user'}>
                    <a className={'item'}>Profile</a>
                </Link>
                <Link route={'/property'}>
                    <a className={'item'}>Property</a>
                </Link>
                <Link route={'/request'}>
                    <a className={'item'}>View Request</a>
                </Link>
                <Link route={'/explore'}>
                    <a className={'item'}>Explore</a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};
