import { useEffect, useState } from "react"

const useDashboard = () => {
    const [currentMode, setCurrentMode] = useState('Chart');
    const [currentDay, setCurrentDay] = useState(7);
    const [chartData, setChartData] = useState([]);
    const [loadingData, setLoadingData] = useState(false);

    const getChartData = async (day) => {
        setLoadingData(true);
        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=INR&days=${day}`);
            const result = await data.json();


            setChartData(result.prices);
            setLoadingData(false);


        } catch (err) {
            window.alert("API limit reached, please try again after some time")
            setLoadingData(false);
        }
    }

    const handleCurrentMode = (value) => {
        setCurrentMode(value);
    }

    const handleCurrentDay = (value) => {
        setCurrentDay(value);
    }


    useEffect(() => {
        getChartData(currentDay)
    }, [currentDay]);


    return { currentDay, currentMode, chartData, loadingData, handleCurrentMode, handleCurrentDay }
}

export default useDashboard;