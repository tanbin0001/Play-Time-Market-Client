import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
    
    const { id, image, name, price, rating } = toy;
    // console.log(_id);


    return (
        <div>

            <div className="card card-compact w-72  bg-base-100 shadow-xl">
                <figure><img className="h-80" src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/allToys/toyDetails/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Toy;