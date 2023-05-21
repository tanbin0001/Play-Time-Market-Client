import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const ToysGallery = () => {
    return (

        <div className='my-10 '
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
            <div className=" mb-14 ">

                <h1 className='text-center  font-bold text-3xl dragonFont  border-b-2  lg:w-96 w-80  mx-auto shadow-red-500 shadow-2xl border-red-500  '>Toys Gallery</h1>
                <p className="text-center animate-pulse text-red-400 font-bold font-marcellus">Have a look at our gallery</p>
            </div>
            <Marquee>
                <div class=" flex">
                    {/* image 1 */}

                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/1e142c02-d72c-4ab1-8259-5783d5d7c064" class=" w-80" />
                    </div>
                    {/* image 2 */}
                    <div class="bg-gray-200">
                        <img src=" https://image.lexica.art/full_jpg/13904d69-045e-4429-95ba-df244c2b30c0" class=" w-80" />
                    </div>
                    {/* image 3 */}
                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/2bea18c0-73cf-41ac-906e-ae6fbf4d90ce" class=" w-80" />
                    </div>
                    {/* image 4 */}
                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/5ff0cd86-7aba-4e0a-83b9-9c932419285c" class=" w-80" />
                    </div>
                    {/* image 5 */}
                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/600e9ded-ec0f-47ba-88f5-0de659adca9d" class=" w-80" />
                    </div>
                    {/* image 6 */}
                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/4e4fa757-087f-47f4-8b8f-8cfa398eca68" alt="Toy 1" class=" w-80" />
                    </div>
                    {/* image 7 */}
                    <div class="bg-gray-200">
                        <img src="https://image.lexica.art/full_jpg/27ae3ba8-83d0-4067-9887-7a864e3dcf75" alt="Toy 1" class=" w-80" />
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