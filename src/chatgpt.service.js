import React, {useState, useEffect } from 'react';

function ChatGPTService() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api')
            .then((res) => res.json())
            .then((data) => {
                setData(data.message);
                setLoading(false);
            });
    }, []).catch(error => console.error("Error fetching data:", error));

    return data.text;
}