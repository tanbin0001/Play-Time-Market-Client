import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateToy = () => {
    const [toy, setToy] = useState([])
    console.log(toy);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/updateToy/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
            })
    }, [id]);
    console.log(id);

    return (
        <div>
            <h1>update toy: {toy.name} </h1>
        </div>
    );
};

export default UpdateToy;

