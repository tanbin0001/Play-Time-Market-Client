import { useEffect, useState } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Toy from "./Toy";

const ShopByCategory = () => {
    const [toysData, setToysData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToysData(data))

    }, []);
    console.log(toysData);

    return (
        <div>
            <h1 className="text-center  font-bold text-3xl mb-5">Shop By Category</h1>
            <Tabs className='border mx-5'>
                {toysData.map((category) => (
                    <Tab key={category.category}>{category.category}</Tab>
                ))}
                {toysData.map((category) => (
                    <TabPanel key={category.category}>
                        <div className="grid grid-cols-2 ">
                            {category.subCategories.map((subCategory) => (
                                <div className="pl-3" key={subCategory.name}>
                                    <h3>{subCategory.name}</h3>
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


