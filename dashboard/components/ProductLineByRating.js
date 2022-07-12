import React from 'react'
import { PolarArea } from 'react-chartjs-2';
import styles from "../styles/Home.module.css"


const ProductLineByRating = ({ data }) => {
    return (
        <div className={styles.card}>
            <h2>{data.label}</h2>
            <PolarArea
                datasetIdKey='id'
                data={{
                    labels: data.labels,
                    datasets: [{
                        label: "Line 1",
                        data: data.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(245, 192, 200, 0.2)',
                            'rgba(255, 87, 192, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(245, 192, 200, 1)',
                            'rgba(255, 87, 192, 1)',
                        ],
                        borderWidth: 1
                    }],
                }}
            />
        </div>
    )
}


export default ProductLineByRating;