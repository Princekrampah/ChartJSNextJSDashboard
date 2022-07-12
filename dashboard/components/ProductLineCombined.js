import React from 'react'
import { Line } from 'react-chartjs-2';
import styles from "../styles/Home.module.css"


const ProductLineCombined = ({ data1, data2, data3 }) => {
    return (
        <div className={styles.card}>
            <h2>Product Line Data Combined</h2>
            <Line
                datasetIdKey='id'
                data={{
                    labels: ["data1", "data2", "data2"],
                    datasets: [{
                        label: data1.label,
                        data: data1.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 246, 26, 0.2)',
                            'rgba(175, 240, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(255, 246, 26, 0.2)',
                            'rgba(175, 240, 192, 0.2)'
                        ],
                        borderWidth: 1
                    },
                    {
                        label: data2.label,
                        data: data2.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 246, 26, 0.2)',
                            'rgba(175, 240, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(255, 246, 26, 0.2)',
                            'rgba(175, 240, 192, 0.2)'
                        ],
                        borderWidth: 1
                    },
                    {
                        label: data3.label,
                        data: data3.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 246, 26, 0.2)',
                            'rgba(175, 240, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(255, 246, 26, 0.2)',
                            'rgba(175, 240, 192, 0.2)'
                        ],
                        borderWidth: 1
                    }],
                }}
            />
        </div>
    )
}


export default ProductLineCombined;