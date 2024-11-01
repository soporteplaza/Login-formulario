// src/apis/useGetApiCustomerPortal.js
import axios from "axios";
import { useState, useEffect } from "react";

export const useGetApiCustomerPortal = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoint = "https://devapi.plazasoftware.com.co:8100/api/CustomerPortal/Configuration?StoreName=";
                const namePortal = "El%20Duque";
                const response = await axios.get(`${endpoint}${namePortal}`);
                setData(response.data);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading };
};
