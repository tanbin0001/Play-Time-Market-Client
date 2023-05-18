import Marquee from "react-fast-marquee";

const ToysGallery = () => {
    return (

        <div className='my-10 '>
            <h1 className='text-center font-extrabold  mb-5 text-3xl'>Toys Gallery</h1>
           
            <div class="grid grid-cols-4  ">
                {/* image 1 */}

                <div class="bg-gray-200">
                    <img src="https://files.catbox.moe/c3f59s.jpg" alt="Toy 1" class="w-full" />
                </div>
                {/* image 2 */}
                <div class="bg-gray-200">
                    <img src="https://files.catbox.moe/1huzw7.jpg" alt="Toy 1" class="w-full" />
                </div>
                {/* image 3 */}
                <div class="bg-gray-200">
                    <img src="https://files.catbox.moe/ligqkj.jpg" alt="Toy 1" class="w-full" />
                </div>
                {/* image 4 */}
                <div class="bg-gray-200">
                    <img src="https://files.catbox.moe/typ0c4.jpg" alt="Toy 1" class="w-full" />
                </div>
                {/* image 5 */}
                <div class="bg-gray-200">
                    <img src="https://files.catbox.moe/ejgb6r.jpg" alt="Toy 1" class="w-full" />
                </div>
                {/* image 6 */}
                <div class="bg-gray-200">
                    <img src="https://files.catbox.moe/joa90y.jpg" alt="Toy 1" class="w-full" />
                </div>
                {/* image 7 */}
                <div class="bg-gray-200">
                    <img src="https://files.catbox.moe/wl2e2d.jpg" alt="Toy 1" class="w-full" />
                </div>
                {/* image 8 */}
                <div class="bg-gray-200">
                    <img src="https://files.catbox.moe/ejv46y.jpg" alt="Toy 1" class="w-full" />
                </div>

            </div>
            

        </div>
    );
};

export default ToysGallery;