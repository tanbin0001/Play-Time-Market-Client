import React from 'react';
import { CircleLoader } from "react-spinners";
const Spinner = () => {
    return (
        <div className="flex justify-center h-[500px] items-center  " >

            <CircleLoader color="#36d7b7" />
        </div>
    );
};

export default Spinner;
