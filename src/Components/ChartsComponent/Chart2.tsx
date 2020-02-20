import React, { Fragment } from 'react'
import { Line } from 'react-chartjs-2';
import { chart_2_Data, chart_2_Options } from './ChartsData';

interface Props { }

const Charts: React.FC<Props> = () => {
    return (
        <Fragment>
            <Line data={chart_2_Data} options={chart_2_Options} />
        </Fragment>
    )
}

export default Charts
