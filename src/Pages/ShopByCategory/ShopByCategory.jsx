import { useContext, useEffect, useState } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Toy from "./Toy";
import '../../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const ShopByCategory = () => {
    const [toysData, setToysData] = useState([]);



    useEffect(() => {
        fetch('https://play-time-market-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToysData(data))

    }, []);
    console.log(toysData);

    return (
        <div className=" mb-10"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="60"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
            <div className=" mb-14">
                <h1 className="text-center  font-bold text-3xl dragonFont  border-b-2  lg:w-96 w-80 mx-auto shadow-red-500 shadow-2xl border-red-500  ">Shop By Category</h1>
                <p className="text-center animate-pulse text-red-400 font-bold font-marcellus">Have a look at our toy categories</p>
            </div>
            <Tabs className=''>
                <div className="  border-b border-blue-300 shadow-md lg:w-[500px] p-1 text-center mx-auto mb-5 shadow-blue-300">
                    {toysData.map((category) => (
                        <Tab key={category.category}>{category.category}</Tab>
                    ))}
                </div>
                {toysData.map((category) => (
                    <TabPanel key={category.category}>
                        <div className="flex justify-center">
                            <div className="grid  lg:grid-cols-2 ">
                                {category.subCategories.map((subCategory) => (
                                    <div className="pl-3 " key={subCategory.name}>
                                        <h3 className="w-36 p-3 text-center mx-auto border border-blue-300 shadow-md  shadow-blue-300">{subCategory.name}</h3>
                                        <div className="grid lg:grid-cols-2 gap-5 mt-5">
                                            {subCategory.toys.map((toy) => (
                                                <Toy key={toy.id}
                                                    toyId={toy._id}

                                                    toy={toy} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                ))}
            </Tabs>

        </div>
    );
};

export default ShopByCategory;


