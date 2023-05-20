import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from 'react-icons/fa';
const Toy = ({ toy }) => {

    const { id, image, name, price, rating } = toy;
    // console.log(_id);


    return (
        <div>

            <div className="card card-compact w-72  bg-base-100 rounded-none     border border-blue-500 shadow-lg animate-pulse shadow-blue-300">
                <figure><img className="h-80" src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p> <span className="font-bold"> Price:</span> ${price}</p>
                    <p> <span className="font-bold"> Rating:</span>  <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar className='text-red-500'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-red-500'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                        {rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/toyDetails/${id}`}>
                            <button className="btn    border border-blue-300 shadow-md  shadow-blue-300">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Toy;