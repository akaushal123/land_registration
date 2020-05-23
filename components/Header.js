import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () =>{
    return (
        <Menu style={{marginTop: '20px'}}>
            <Link route="/">
                <a className={"item"}><img src={"../static/logo.png"} alt={'logo'}/></a>
            </Link>

            <Menu.Menu position={"right"}>
                <Link route={'/user'}>
                    <a className={'item'}>User</a>
                </Link>
                <Link route={'/explore'}>
                    <a className={'item'}>Explore</a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};
