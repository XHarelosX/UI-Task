import React, { Fragment, FC } from 'react'
import classes from './Header.module.css';

interface Props {
    menuClick: any;
}

const Header: React.FC<Props> = ({ menuClick }) => {

    return (
        <Fragment>
            <header className={classes.header}>
                <section className={classes.section1}>
                    <ul className={classes.ul}>
                        <li onClick={menuClick}>
                            <i className={["material-icons", classes.menu_icon].join(" ")}>menu</i>
                        </li>
                        <li>
                            <i className={["material-icons", classes.search_icon].join(" ")}>search</i>
                        </li>
                    </ul>
                </section>
                <section className={classes.section2}>
                    <ul className={classes.ul2}>
                        <li className={[classes.ul2_li, classes.project].join(" ")}> + Add project </li>
                        <li className={classes.ul2_li}> <i className="material-icons"> local_post_office </i> </li>
                        <li className={classes.ul2_li}> <i className="material-icons"> notifications </i> </li>
                        <li className={classes.ul2_li}> <i className="material-icons"> account_circle </i> </li>
                    </ul>
                </section>
            </header>
        </Fragment>
    )
}

export default Header
