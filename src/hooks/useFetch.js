import { useState, useEffect } from "react";

const useFetch = url => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        setError('Network response was not ok');
                    }
                    const contentType = response.headers.
                        get('content-type');
                    if (contentType && contentType.
                            includes('application/json')) {
                        return response.json();
                    } else {
                        throw new Error(
                            'Response is not JSON');
                    }
                })
                .then(json => {
                    setData(json.data);
                    console.log(
                        'Response is a JSON object:', 
                        json.data);
                })
                .catch(error => {
                    console.error(
                        'There was a problem with the fetch operation:', 
                        error);
                });
            

                // if (!res.ok) {
                //     setError('Failed to fetch');
                // }

                // const result = await res.json();
                // console.log("PEPEK: " + result);
                
                // setData(result);
                setLoading(false);

            } catch (err) {
                setError(err.message);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
};

export default useFetch;
