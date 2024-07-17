import { useEffect, useState } from "react";
import { Card } from "./Card";
import { DataArraySubject } from "../store";
export const CardContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Подписка на обновления dataArraySubject
        const subscription = DataArraySubject.subscribe({
            next: (newData) => setData(newData),
            error: (err) => console.error('Error:', err),
        });

        // Отписка от подписки при размонтировании компонента
        return () => subscription.unsubscribe();
    }, []);

    return (
        <div className="card-container">
            <h1>Card Container</h1>
            {
                data.map((item, index) => (
                    <Card key={index} item={item} />
                ))
            }
        </div>
    )
}