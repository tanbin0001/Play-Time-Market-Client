

const Blogs = () => {



    return (
        <div>
            <section className="font-marcellus">

                <h1 className="text-4xl font-serif font-bold text-center lg:my-5">
                    Important<span className="text-orange-400"> Questions</span>
                </h1>
                <div>
                    <div>


                        <div className="hero mt-11  lg:bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ytimg.com/vi/ahDQI7msr0A/maxresdefault.jpg" className="w-[370px] rounded-lg shadow-2xl" />
                                <div className="">
                                    <h1 className="text-2xl font-bold">
                                        1. What is an access token and refresh token? How do they work and where should we store them on the client-side?


                                    </h1>
                                    <p className="py-4  pr-20">
                                        <span className="font-bold"> Access Token: </span>

                                        An access token is a token or credential that is granted to an authenticated user by an authentication server.
                                        It represents the user's authorization to access protected resources on an API or server.
                                        Access tokens are usually short-lived and have an expiration time to ensure security.
                                        The token is included in the authorization header or as a parameter in API requests to prove the user's identity and permissions.
                                    </p>
                                    <p className="py-4  pr-20">
                                        <span className="font-bold">Refresh Token: </span>


                                        A refresh token is a token issued alongside an access token during the authentication process.
                                        It has a longer expiration time compared to access tokens.
                                        Refresh tokens are used to obtain a new access token when the current one expires without requiring the user to reauthenticate.
                                        The client sends the refresh token to the server, which validates it and issues a new access token.
                                        Refresh tokens are typically securely stored on the client-side, such as in HTTP-only cookies or secure storage mechanisms.
                                    </p>
                                    <p className="py-4  pr-20">
                                        <span className="font-bold">Storage on the client-side:

                                        </span>

                                        Access tokens can be stored in memory, local storage, or cookies on the client-side.
                                        It's important to ensure that access tokens are stored securely and protected against unauthorized access.
                                        Refresh tokens should be stored in more secure mechanisms such as HTTP-only cookies or secure storage options like session storage or secure local storage.
                                        Storing tokens securely helps prevent unauthorized access and reduces the risk of token leakage or misuse.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hero mt-36 lg:bg-base-200">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src="https://www.gcreddy.com/wp-content/uploads/2022/10/SQl-or-NoSQL.jpg" className="w-[370px] rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-2xl font-bold  mb-2">
                                        2.Compare SQL and NoSQL databases?
                                    </h1>
                                    <p>
                                        SQL and NoSQL databases are two different types of databases with distinct characteristics: <br />

                                        <span className="text-white font-bold">1.   Data Model : </span><br />

                                        SQL: Follows a rigid, predefined schema with a tabular structure. <br />
                                        NoSQL: Has a flexible and schema-less data model.
                                        <br />
                                        <span className="text-white font-bold">  2.Scalability:   </span><br />
                                        SQL: Vertically scalable, scaling by increasing hardware resources of a single server.
                                        NoSQL: Horizontally scalable, distributing data across multiple servers.
                                        <br />
                                        <span className="text-white font-bold">3.   Query Language: </span><br />

                                        SQL: Uses SQL as the standard query language.
                                        NoSQL: Uses various query languages or APIs specific to the database.


                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hero lg:mt-36 lg:bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://cdn.sanity.io/images/ay6gmb6r/production/62448459577c97af6b9493a5dfd2008d262c4410-2240x1260.png?w=795&fm=webp&fit=max&auto=format" className="w-[370px] rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-3xl font-bold">
                                        3.What is express js? What is Nest JS  ?

                                    </h1>
                                    <p className="py-6">
                                        <span className="text-white font-bold">  Express.js  </span><br />is a popular web application framework for Node.js. It provides a simple and minimalistic approach to building web servers and APIs. Express.js allows developers to handle HTTP requests and responses, define routes, handle middleware, and integrate with various plugins and libraries. It offers a flexible and unopinionated design, allowing developers to structure their applications according to their needs. <br />
                                        <span className="text-white font-bold"> Nest.js   </span><br />
                                        is a progressive, TypeScript-based web application framework built on top of Express.js. It is designed to enhance the development experience by providing a robust architecture and a set of powerful features. Nest.js follows the principles of modularity, dependency injection, and decorators to enable scalable and maintainable applications. It integrates well with other libraries and frameworks, supports server-side rendering, microservices architecture, and provides built-in support for features like validation, authentication, and caching. Nest.js is often used for building enterprise-level applications and APIs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hero lg:mt-36 lg:bg-base-200">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src="https://intellipaat.com/mediaFiles/2015/08/Aggregation.jpg" className="w-[370px] rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-3xl font-bold">
                                        4.  What is MongoDB aggregate and how does it work ?

                                    </h1>
                                    <p className="py-6">
                                        The MongoDB aggregate function is used for advanced data processing and analysis in MongoDB. It allows you to perform complex queries, aggregations, and transformations on collections of documents. You can use different stages like match, group, project, sort, limit, skip, and unwind to define the operations you want to perform on the data. These stages are executed in order, allowing you to create pipelines for data manipulation and analysis. The aggregate function is a powerful tool for extracting valuable insights from your MongoDB data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </section>

        </div>
    );
};

export default Blogs;
