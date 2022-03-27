import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div className="card">
                <h1>How react works?</h1>
                <ol>
                    <li>When we write codes in react, we write it in JSX, which is a syntactical sugar that simplifies coding in React. </li>
                    <li>Because of its declarative nature, it is easy to imagine the pages just by looking at the codes. </li>
                    <li>React is also component based which makes codes in JS resuable and independent. </li>
                    <li>The React virtual DOM is a virtual DOM that makes rendering of UI much more faster and efficient.</li>
                    <li>In the real DOM, each time a state is changed, the entire DOM tree needs to be rendered. </li>
                    <li>The react virtual DOM keeps a copy of previous tree and compares it with the new tree.</li>
                    <li>Using Diffing Algorithm the virtual DOM then calculates most efficient and faster way to make change in the tree. </li>
                    <li>Once finished, the virtual DOM batch updates the updated tree to the DOM.</li>
                </ol>
            </div>
            <div className="card">
                <h1>Difference between state and props.</h1>
                <h4>Props</h4>
                <ol>
                    <li>Props are used to pass data between components as arguments. </li>
                    <li>They can be used by child components.</li>
                    <li>Reusablity of components can be achieved by props.</li>
                    <li>Props are controlled by whatever renders components.</li>
                    <li>Stateless Componenets can have props.</li>
                </ol>
                <h4>State</h4>
                <ol>
                    <li>States holds information about the components.</li>
                    <li>States cannot be used by child components.</li>
                    <li>States does not make components reusable.</li>
                    <li>States are controlled by React Components.</li>
                    <li>Stateless components do not have States.</li>
                </ol>
            </div>
        </div>
    );
};

export default Questions;