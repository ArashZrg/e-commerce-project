import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axiosClient from '../../../../api/axiosClient';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IChartData {
    "_id": string,
    "totalSales": number,
}

const Chart = () => {
    const [chartData, setChartData] = useState<IChartData[]>([])

    useEffect(() => {
        fetchChartData()
    },[])

    async function fetchChartData() {
        await axiosClient.get("/orders/total-sales-by-date").then((res) => {
            setChartData(res.data)
        })
    }
    chartData.sort((a, b) => a._id.localeCompare(b._id))
    const labels = chartData.map((item) => item._id)
    const values = chartData.map((item) => item.totalSales)

  return (
    <div className='w-full h-[550px]'>
        <Bar 
            data={{
                labels : labels,
                datasets: [
                    {
                        label: "فروش",
                        data : values,
                        backgroundColor: "#DB2777",
                        barThickness: 90,
                        hoverBackgroundColor: "#9b0e4d",
                    }
                ],
            }}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'نمودار فروش',
                        font: {
                            size: 14,
                            family: "IRAN-Yekan",
                        },
                        align: "end",
                        padding: {
                            bottom: 30,
                        },
                    },
                    legend: {
                        display: false // to hide label => in this case "فروش"
                    },
                },
                responsive: true,
                maintainAspectRatio: false, 
                scales: {
                    x: {
                        reverse: true, // to make the chart rtl
                        // offset: false, // to make x-axis end right at last thick
                        grid: {
                            display: false, // to hide vertical grid lines
                            // drawTicks: true,   => does not work
                        },
                        ticks: {
                            stepSize: 1,
                            color: "#58616C",
                            font : {
                                size: 11,
                            },
                            align: "center",
                            crossAlign: "center",
                        },
                        title : {
                            display: true,
                            text: "تاریخ",
                            font : {
                                size : 12,
                                weight : 700,
                                family : 'IRAN-Yekan',
                            },
                            color: "#58616C",
                        }
                    },
                    y: {
                        beginAtZero: true,
                        position: "right", // to positon the y-axis an y-ticks at the right side of chart
                        grid: {
                            display: true,
                            color: "#9CA5AF",
                            lineWidth: 0.6,
                            
                        },
                        ticks: {
                            stepSize: 10000000,
                            color: "#58616C",
                            font : {
                                size: 11,
                            },
                        },
                        border: {
                            display: false, // to  hide y-axis line
                        },
                        title : {
                            display: true,
                            text: "فروش",
                            font : {
                                size : 12,
                                weight : 700,
                                family : 'IRAN-Yekan',
                            },
                            color: "#58616C",
                        }
                    },
                },
                layout: {
                    padding: {
                        // left: 10, // it makes the last thick to be visible completely
                    },
                }
            }}
        />
    </div>
  )
}

export default Chart