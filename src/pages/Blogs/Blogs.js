import React from "react";

const Blogs = () => {
  return (
    <section className="container mx-auto min-h-[55vh]">
      <div className="my-8">
        <h2 className="text-3xl font-semibold text-teal-500 text-center">
          Blogs
        </h2>
        <p className="text-lg text-center mt-2 max-w-sm mx-auto">
          Some important frequently asked questions answer has been given below
        </p>
      </div>
      <div className="w-full divide-y rounded divide-slate-200 lg:w-4/5 mx-auto my-8">
        <details className="p-4 group" open>
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            What are the different ways to manage a state in a React
            application?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-teal-500 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac01 desc-ac01"
            >
              <title id="title-ac01">Open icon</title>
              <desc id="desc-ac01">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            Managing state in React apps isn't as simple as using useState or
            useReducer.There are four main types of state you need to properly
            manage in your React apps. They are Local state,Global state,Server
            state,URL state
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How does prototypical inheritance work?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-teal-500 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac02 desc-ac02"
            >
              <title id="title-ac02">Open icon</title>
              <desc id="desc-ac02">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            prototypical inheritance refers to the ability to access object
            properties from another object. We use a JavaScript prototype to add
            new properties and methods to an existing object constructor. We can
            then essentially tell our JS code to inherit properties from a
            prototype. Prototypical inheritance allows us to reuse the
            properties or methods from one JavaScript object to another through
            a reference pointer function
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            What is a unit test? Why should we write unit tests in React?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-teal-500 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac03 desc-ac03"
            >
              <title id="title-ac03">Open icon</title>
              <desc id="desc-ac03">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            Unit Testing is a testing method that tests an individual unit of
            software in isolation. Unit testing for React Apps means testing an
            individual React Component. Unit Testing is important for React
            Apps, as it helps in testing the individual functionality of React
            components
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            Is there any Differences between React, Angular, Vue?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-teal-500 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac04 desc-ac04"
            >
              <title id="title-ac04">Open icon</title>
              <desc id="desc-ac04">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            A simple difference between these three is that React is a UI
            library, and Vue is a progressive framework. However, Angular is a
            full-fledged front-end framework. Angular.js uses the two-way data
            binding. React.js has one-way binding. As on Angular, the data
            binding on Vue.js is two-way. As for syntax, Angular is written in
            TypeScript.React uses JSX and native Javascript. Vue.js makes use of
            an HTML-based template syntax
          </p>
        </details>
      </div>
    </section>
  );
};

export default Blogs;
