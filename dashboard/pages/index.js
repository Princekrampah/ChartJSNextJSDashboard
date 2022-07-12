import styles from "../styles/Home.module.css"
import { useRouter } from 'next/router'
import DoughnutChart from "../components/LineChart"
import ChartGrid from "../components/ChartGrid"



export default function Home({ data }) {

  console.log(data)

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Code With Prince</h3>
      <ChartGrid data={data}/>
    </div>
  )
}

// If you export a function called getServerSideProps (Server-Side Rendering) 
// from a page, Next.js will pre-render this page on each request using the 
// data returned by getServerSideProps.
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:8000")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}