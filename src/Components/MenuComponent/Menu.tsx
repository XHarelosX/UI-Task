import React, { Fragment } from 'react'
import classes from './Menu.module.css';

interface Props {
    menuStatus: boolean;
}

const Menu: React.FC<Props> = ({ menuStatus }) => {

    let menuClasses = [classes.aside, classes.menu_close].join(' ');

    if (menuStatus) {
        menuClasses = [classes.aside, classes.menu_open].join(' ');
    }

    return (
        <Fragment>
            <aside className={menuClasses}>
                <ul className={classes.ul}>

                    <li className={classes.li_logo}>
                        Logo
                    </li>

                    <li className={classes.li}>
                        <i className={["material-icons", classes.icon].join(' ')}>home</i>
                        <span>Home</span>
                    </li>

                    <li className={classes.li}>
                        <i className={["material-icons", classes.icon].join(' ')}>view_agenda</i>
                        <span>Workflow</span>
                    </li>

                    <li className={classes.li}>
                        <i className={["material-icons", classes.icon].join(' ')}>timeline</i>
                        <span>Statistics</span>
                    </li>

                    <li className={classes.li}>
                        <i className={["material-icons", classes.icon].join(' ')}>date_range</i>
                        <span>Calendar</span>
                    </li>

                    <li className={classes.li}>
                        <i className={["material-icons", classes.icon].join(' ')}>perm_identity</i>
                        <span>Users</span>
                    </li>

                    <li className={classes.li}>
                        <i className={["material-icons", classes.icon].join(' ')}>settings</i>
                        <span>Settings</span>
                    </li>

                </ul>
            </aside>
        </Fragment>
    )
}

export default Menu
