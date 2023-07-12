import { useEffect, useState } from "react"
import '../styles/Loading.css'
import '../styles/StockInfo.css'

export default function StockInfo() {
    const [info, setInfo] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get_info")
            .then((response) => response.json())
            .then((data) => {
                setInfo(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {
                loading ? (
                    <div className="load-ctn">
                        <div class="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                ) : (
                    info && (
                        <div className="stock-info-ctn">
                            <div className="price-name">
                                <div className="stock-name">
                                    <h2 className="font-bold text-6xl">{info.name}</h2>
                                    <p className="text-sm">NCL INTERNATIONAL LOGISTICS PUBLIC COMPANY LIMITED</p>
                                </div>
                                <div className="stock-price">
                                    <p className="text-5xl font-bold">{info.price}</p>
                                    <p>{info.change} {info.change2}</p>
                                </div>
                            </div>
                            <div className="stock-info">
                                <p>Status: {info.status}</p>
                                <p className="text-green-600 font-bold">Highest: {info.highest}</p>
                                <p className="text-red-600 font-bold">Lowest: {info.lowest}</p>
                                <p>Latest update: {info.times}</p>
                            </div>
                        </div>
                    )
                )
            }


        </>
    )
}
