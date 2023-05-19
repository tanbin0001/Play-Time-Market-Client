import Marquee from "react-fast-marquee";

const ToysGallery = () => {
    return (

        <div className='my-10 '>
            <div className=" mb-14 ">

                <h1 className='text-center  font-bold text-3xl dragonFont  border-b-2  w-96 mx-auto shadow-red-500 shadow-2xl border-red-500  '>Toys Gallery</h1>
                <p className="text-center animate-pulse text-red-400 font-bold font-marcellus">Have a look at our gallery</p>
            </div>
            <Marquee>
                <div class=" flex">
                    {/* image 1 */}

                    <div class="bg-gray-200">
                        <img src="https://files.catbox.moe/c3f59s.jpg" alt="Toy 1" class=" w-80" />
                    </div>
                    {/* image 2 */}
                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/947f08b6-ce72-4e85-8736-a1db9baa9577" alt="Toy 1" class=" w-80" />
                    </div>
                    {/* image 3 */}
                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/4a57ea72-6646-4e76-bc67-001305350ca1" alt="Toy 1" class=" w-80" />
                    </div>
                    {/* image 4 */}
                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/dbe991fd-9374-4ee7-bac6-e5f53aa4d1d3" alt="Toy 1" class=" w-80" />
                    </div>
                    {/* image 5 */}
                    <div class="bg-gray-200">
                        <img src="https://files.catbox.moe/ejgb6r.jpg" alt="Toy 1" class=" w-80" />
                    </div>
                    {/* image 6 */}
                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/b229cc14-2b54-4f97-b7bd-9fe6aa623067" alt="Toy 1" class=" w-80" />
                    </div>
                    {/* image 7 */}
                    <div class="bg-gray-200">
                        <img src="https://files.catbox.moe/wl2e2d.jpg" alt="Toy 1" class=" w-80" />
                    </div>
                    {/* image 8 */}
                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/7900fbea-1257-4aab-a2bb-c58027e34c18" alt="Toy 1" class=" w-80" />
                    </div>



                </div>
            </Marquee>
        </div>
    );
};

export default ToysGallery;