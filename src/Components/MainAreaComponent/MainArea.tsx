import React, { Fragment } from 'react';
import classes from './MainArea.module.css';
import Chart1 from '../ChartsComponent/Chart1';
import Chart2 from '../ChartsComponent/Chart2';

interface Props {

}

const MainArea: React.FC<Props> = () => {

    const user: string = "Harel"

    return (
        <Fragment>
            <main className={classes.main_area_charts}>
                <h1>Hello {user}</h1>
                <section className={classes.chart_area}>
                    <div className={classes.chart1}>
                        <div>
                            <h1>Your Sales</h1>
                            <div>
                                <span></span>
                            </div>
                        </div>
                        <div className={classes.chart1_conteiner}>
                            <Chart1 />
                        </div>
                    </div>
                    <div className={classes.chart2}>
                        <h1>Reports</h1>
                        <div className={classes.chart2_conteiner}>
                            <Chart2 />
                        </div>
                    </div>
                </section>
            </main>
            <main className={classes.mian_area_lists}>
                <section>
                    <ul>
                        {/* List of li Tasks*/}
                    </ul>
                </section>
                <section>
                    <ul>
                        {/* List of li Messages*/}
                    </ul>
                </section>
                <section>
                    <ul>
                        {/* List of li Activity*/}
                    </ul>
                </section>
            </main>
        </Fragment>
    )
}

export default MainArea;
