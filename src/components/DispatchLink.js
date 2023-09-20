import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRegion } from '../store/postsSlice';

const DispatchLink = ({ to, region, children }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(setRegion(region))
        navigate(to)
    };

    return <button onClick={handleClick}>{children}</button>;
};

export default DispatchLink;
