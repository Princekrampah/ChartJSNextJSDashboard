import React from 'react'
import { PolarArea } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from "../styles/Home.module.css"


const PolarAreaChart = () => {
    return (
        <div className={styles.card}>
            <h2>PolarArea Chart</h2>
            <PolarArea
                datasetIdKey='id'
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green'],
                    datasets: [{
                        label: "Line 1",
                        data: [12, 19, 3, 5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                        ],
                        borderWidth: 1
                    }],
                }}
            />
        </div>
    )
}


export default PolarAreaChart;