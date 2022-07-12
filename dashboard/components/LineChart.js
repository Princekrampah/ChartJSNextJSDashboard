import React from 'react'
import { Line } from 'react-chartjs-2';
import styles from "../styles/Home.module.css"


const LineChart = ({ data }) => {
    return (
        <div className={styles.card}>
            <h2>{data.label}</h2>
            <Line
                datasetIdKey='id'
                data={{
                    labels: data.labels,
                    datasets: [{
                        label: data.label,
                        data: data.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }],
                }}
            />
        </div>
    )
}


export default LineChart;