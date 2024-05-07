import React, { useState, useEffect } from 'react';
import './Graph.css';
import Phone from './Phone';

function Graph() {
    const phone_number = 3;
    const phones = Array.from({ length: phone_number }, (_, i) => <Phone key={i} index={i + 1} />);
    const [timeSlots, setTimeSlots] = useState(['TS1']); // Exemple de time slots
    
    useEffect(() => {
        const interval = setInterval(() => {
            // Generate a new time slot (TS2, TS3, ..., TSN)
            const newTimeSlot = `TS${timeSlots.length + 1}`;

            // Update the time slots by adding the new time slot
            setTimeSlots((prevTimeSlots) => [...prevTimeSlots, newTimeSlot]);
        }, 3000); // 3000 milliseconds = 3 seconds

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [timeSlots]); // Add timeSlots as dependency

    // Fonction pour générer une fréquence aléatoire
    const getRandomFrequency = () => {
        const frequencies = ['F1', 'F2', 'F3'];
        const randomIndex = Math.floor(Math.random() * frequencies.length);
        return frequencies[randomIndex];
    };

    return (
        <div className='div_graph'>
            <p className='graph_title'>Frequency Hopping</p>
            <div className='div_table'>
                <table className='table_graph'>
                    <thead>
                        <tr>
                            <th className='th_graph'></th>
                            {timeSlots.map((ts, index) => (
                                <th key={index} className='th_graph'>
                                    {ts}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {phones.map((phone, rowIndex) => (
                            <tr key={rowIndex}>
                                <td className='td_graph'>
                                    <div className='div_phone'>
                                        {phone}
                                    </div>
                                </td>
                                {timeSlots.map((ts, colIndex) => (
                                    <td key={colIndex} className='td_graph'>
                                        {/* Generate a frequency */}
                                        {getRandomFrequency()}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Graph;