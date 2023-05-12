import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
    const months = [
        { name: 'January', color: '#66c09e' },
        { name: 'February', color: '#89ab51' },
        { name: 'March', color: '#e7945c' },
        { name: 'April', color: '#f37d77' },
        { name: 'May', color: '#f36872' },
        { name: 'June', color: '#FF616F' },
        { name: 'July', color: '#9ec9c8' },
        { name: 'August', color: '#79C7E3' },
        { name: 'September', color: '#4682B4' },
        { name: 'October', color: '#3A6073' },
        { name: 'November', color: '#3F5D7D' },
        { name: 'December', color: '#476072' },
    ];

    const [selectedMonth, setSelectedMonth] = useState(0);

    const handleMonthClick = (index) => {
        setSelectedMonth(index);
    };

    return (
        <div className="month-row">
            {months.map((month, index) => (
                <div
                    className={`month ${index === selectedMonth ? 'selected' : ''}`}
                    style={{ backgroundColor: month.color }}
                    onClick={() => handleMonthClick(index)}
                    key={index}
                >
                    {month.name}
                </div>
            ))}
        </div>
    );
};

export default Calendar;
