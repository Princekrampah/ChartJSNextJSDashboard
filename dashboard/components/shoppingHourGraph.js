import React from 'react'
import { Bar } from 'react-chartjs-2';
import styles from "../styles/Home.module.css"

const ShoppingHourGraph = ({ data }) => {
    console.log(data)
    return (
        <div className={styles.card}>
            <h2>{data.label}</h2>
            <Bar
                datasetIdKey='id'
                data={{
                    labels: data.labels,
                    datasets: [{
                        label: data.A.label,
                        data: data.A.data,
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
                    },
                    {
                        label: data.B.label,
                        data: data.B.data,
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
                    },
                    {
                        label: data.C.label,
                        data: data.C.data,
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


export default ShoppingHourGraph;