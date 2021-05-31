import React from 'react';
import { useSelector } from 'react-redux';

import './index.css';

export function ResultCount(props) {
    const count = useSelector(state => state.count);

    if (count === 0) {
        return (null);
    } else if (count === 1) {
        return (
            <h2 className="count-text">Found {count} result!</h2>
        )
    } else {
        return (
            <h2 className="count-text">Found {count} results!</h2>
        )
    }

}