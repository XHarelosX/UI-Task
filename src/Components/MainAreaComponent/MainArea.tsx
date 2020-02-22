import React, { Fragment } from 'react';
import classes from './MainArea.module.css';
import Chart1 from '../ChartsComponent/Chart1';
import Chart2 from '../ChartsComponent/Chart2';
import Tasks from '../ListsComponents/TasksComponent/TasksList';
import Messages from '../ListsComponents/MessagesComponent/MessagesList';
import Activity from '../ListsComponents/ActivityComponent/ActivityList';




const MainArea: React.FC = () => {

    const user: string = "Harel"

    return (
        <Fragment>
            <h1 className={classes.h1}>Hello {user}</h1>
            <div className={classes.div_main_area_container}>
                <section className={classes.main_chart_area}>
                    <div className={classes.chart1}>
                        <div className={classes.title_container}>
                            <h1 className={classes.h1_chart_title}>Your Sales</h1>
                            <select className={classes.select_tag}>
                                <option disabled selected>Select Period:</option>
                                <option> Last Year</option>
                                <option> Last Month</option>
                                <option> Last Week</option>
                            </select>
                        </div>
                        <div className={classes.chart1_conteiner}>
                            <Chart1 />
                        </div>
                    </div>
                    <div className={classes.chart2}>
                        <div className={classes.title_container}>
                            <h1 className={classes.h1_chart_title}>Reports</h1>
                            <select className={classes.select_tag}>
                                <option disabled selected>Select Period:</option>
                                <option> Last Year</option>
                                <option> Last Month</option>
                                <option> Last Week</option>
                            </select>
                        </div>
                        <div className={classes.chart2_conteiner}>
                            <Chart2 />
                        </div>
                    </div>
                </section>
                <main className={classes.main_area_lists}>
                    <section className={classes.section}>
                        <Tasks />
                    </section>
                    <section className={classes.section}>
                        <Messages />
                    </section>
                    <section className={classes.section}>
                        <Activity />
                    </section>
                </main>
            </div>
        </Fragment>
    )
}

export default MainArea;
