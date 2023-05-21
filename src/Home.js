import React from 'react';
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'

const Home = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            {count}
        </div>
    );
}

export default Home;
