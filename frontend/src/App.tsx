import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState<{ status: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fullstack-app.onrender.com/")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
            <h1 className="mb-4 text-4xl font-bold">AI Business Dashboard</h1>
            {loading && <p>Loading data from backend...</p>}
            {data && <p className="text-lg text-gray-700">{data.status}</p>}
            {!data && !loading && <p className="text-red-500">Failed to load backend data</p>}
        </div>
    );
}

export default App;
