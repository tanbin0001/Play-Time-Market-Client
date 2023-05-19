import { useEffect, useState } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Toy from "./Toy";
import '../../App.css'

const ShopByCategory = () => {
    const [toysData, setToysData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToysData(data))

    }, []);
    console.log(toysData);

    return (
        <div className=" mb-10">
            <h1 className="text-center  font-bold text-3xl mb-14 dragonFont  border-b-2  w-96 mx-auto shadow-red-500 shadow-2xl border-red-500  ">Shop By Category</h1>
            <Tabs className=''>
                <div className="  border-b border-blue-300 shadow-md w-80 p-1 text-center mx-auto mb-5 shadow-blue-300">
                    {toysData.map((category) => (
                        <Tab key={category.category}>{category.category}</Tab>
                    ))}
                </div>
                {toysData.map((category) => (
                    <TabPanel key={category.category}>
                        <div className="grid grid-cols-2 ">
                            {category.subCategories.map((subCategory) => (
                                <div className="pl-3 " key={subCategory.name}>
                                    <h3 className="w-36 p-3 text-center mx-auto border border-blue-300 shadow-md  shadow-blue-300">{subCategory.name}</h3>
                                    <div className="grid grid-cols-2 mt-5">
                                        {subCategory.toys.map((toy) => (
                                            <Toy key={toy.id}
                                                toyId={toy._id}

                                                toy={toy} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default ShopByCategory;


