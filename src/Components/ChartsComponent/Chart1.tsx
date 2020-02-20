import React, { Fragment } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { chart_1_Data, chart_1_Options } from './ChartsData';

interface Props { }

const Charts: React.FC<Props> = () => {
    return (
        <Fragment>
            <Doughnut data={chart_1_Data} options={chart_1_Options} width={200} height={200} />

        </Fragment>
    )
}

export default Charts
