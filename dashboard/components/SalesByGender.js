import React from 'react'
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from "../styles/Home.module.css"
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-plugin-labels'
import { ChartModule } from 'react-chartjs-2'

// Chart.register(ChartDataLabels);


const SalesByGender = ({ data }) => {
    return (
        <div className={styles.card}>
            <h2>{data.label}</h2>
            <Pie
                datasetIdKey='id'
                data={{
                    labels: data.labels,
                    datasets: [{
                        label: data.label,
                        data: data.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }],
                }}
                options={{  }}
            />
        </div>
    )
}


export default SalesByGender;