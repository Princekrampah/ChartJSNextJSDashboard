import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import styles from "../styles/Home.module.css"


const DoughnutChart = () => {
    return (
        <div className={styles.card}>
            <h2>Doughnut Chart</h2>
            <Doughnut
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


export default DoughnutChart;