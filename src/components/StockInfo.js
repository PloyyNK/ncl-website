import { useEffect, useState } from "react"

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
            <div>
                <h1>Stock Info</h1>
            </div>
            { }
            {
                loading ? (
                    <p>Loading..</p>
                ) : (
                    info && (
                        <div>
                            <div>
                                <div>
                                    <h2 className="font-bold text-6xl">{info.name}</h2>
                                    <p>NCL INTERNATIONAL LOGISTICS PUBLIC COMPANY LIMITED</p>
                                </div>
                                <p>Price: {info.price}</p>
                            </div>
                            <div>
                                <p>Change: {info.change}</p>
                                <p>Status: {info.status}</p>
                                <p>Times: {info.times}</p>
                            </div>

                        </div>
                    )
                )
            }


        </>
    )
}
