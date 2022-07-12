import React from 'react'
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from "../styles/Home.module.css"


const PieChart = ({ data }) => {
    return (
        <div className={styles.card}>
            <h2>{ data.label }</h2>
            <Pie
                datasetIdKey='id'
                data={{
                    labels: data.labels,
                    datasets: [{
                        label: data.label,
                        data: data.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 246, 26, 0.2)',
                            'rgba(175, 240, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 246, 26, 1)',
                            'rgba(175, 240, 192, 1)'
                        ],
                        borderWidth: 1
                    }],
                }}

                options={{
                    tooltips: { enabled: false },
                    plugins: {
                        datalabels: {
                            formatter: (value, categories) => {

                                let sum = 0;
                                let dataArr = categories.chart.data.datasets[0].data;
                                dataArr.map(data => {
                                    sum += data;
                                });
                                let percentage = (value * 100 / sum).toFixed(2) + "%";
                                return percentage;


                            },
                            color: '#fff',
                        }
                    }
                }}

            />
        </div>
    )
}


export default PieChart;