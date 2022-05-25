import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-slate-100'>
            <div className='lg:max-w-5xl mx-auto my-20'>
                <h1 className='text-5xl text-warning mb-7 font-bold bg-'><span className='bg-black'>Blogs</span></h1>
                {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
            <div class="card bg-base-100 shadow-xl">
                <figure><img src="https://miro.medium.com/max/1400/1*k0SazfSJ-tPSBbt2WDYIyw.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold">React</h2>
                    <p>How will you improve the performance of a React Application?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Read</button>
                    </div>
                </div>
            </div>
           
            </div> */}
                {/* try to make it better next time */}



                <div className='signup-form bg-black text-white my-5 p-5 rounded-xl'>
                    <h1 className='text-2xl'>How will you improve the performance of a React Application?</h1>
                    <p>
                        Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                        According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                        In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                        In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:
                    </p>
                </div>
                <div className='signup-form bg-black text-white mb-5 p-5 rounded-xl'>
                    <h1 className='text-2xl'>What are the different ways to manage a state in a React application?</h1>
                    <p>
                        Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                        In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                        When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                        There are four main types of state you need to properly manage in your React apps:

                        Local state
                        Global state
                        Server state
                        URL state
                    </p>
                </div>
                <div className='signup-form bg-black text-white mb-5 p-5 rounded-xl'>
                    <h1 className='text-2xl'>What are the different ways to manage a state in a React application?</h1>
                    <p>
                        Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                        In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                        When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                        There are four main types of state you need to properly manage in your React apps:

                        Local state
                        Global state
                        Server state
                        URL state
                    </p>
                </div>
                <div className='signup-form bg-black text-white mb-5 p-5 rounded-xl'>
                    <h1 className='text-2xl'> How does prototypical inheritance work?</h1>
                    <p>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
                    </p>
                </div>
                <div className='signup-form bg-black text-white mb-5 p-5 rounded-xl'>
                    <h1 className='text-2xl'> Should I use Hooks, classes, or a mix of both?</h1>
                    <p>
                        When you’re ready, we’d encourage you to start trying Hooks in new components you write. Make sure everyone on your team is on board with using them and familiar with this documentation. We don’t recommend rewriting your existing classes to Hooks unless you planned to rewrite them anyway (e.g. to fix bugs).

                        You can’t use Hooks inside a class component, but you can definitely mix classes and function components with Hooks in a single tree. Whether a component is a class or a function that uses Hooks is an implementation detail of that component. In the longer term, we expect Hooks to be the primary way people write React components.
                    </p>
                </div>

                <div className='signup-form bg-black text-white mb-5 p-5 rounded-xl'>
                    <h1 className='text-2xl'>What is a unit test? Why should write unit tests?</h1>
                    <p>
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;