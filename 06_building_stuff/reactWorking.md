## Virtual DOM

The Virtual DOM is a lightweight in-memory data structure that represents the current state of the user interface. 
It's a `tree-like` structure that mirrors the actual DOM (Document Object Model) structure of the web page.

Virtual DOM is basically the Object that represents the page.

## Reconciliation

When changes are made to the `state` of a React application, React creates a `new Virtual DOM tree` and compares it with the `previous Virtual DOM tree` to identify the minimum number of changes required to update the actual DOM. 

This process is known as `reconciliation`.

It is the process of comparing the `new Virtual DOM tree` with the `previous Virtual DOM tree` and identifying the differences between them. 

React uses a `diff algorithm` to perform this comparison efficiently. Once the differences are identified, React only renders the changed items ensuring minimal rerenders.

## Diff Algorithm of React

The Diff algorithm is a heuristic algorithm that compares the new Virtual DOM tree with the previous Virtual DOM tree to determine the minimum number of operations required to update the actual DOM.

It works by traversing the two trees simultaneously and comparing the nodes. If a node has changed, React determines the most efficient way to update the actual DOM, either by updating the existing node or removing and recreating it. This process continues recursively for all child nodes.

## React Fiber

An improved version of old reconciliation process introduced in React 16. Its still being improved.

## Summary

In summary, React constantly looks for the state variable and whenever any changes in that state variable, react finds out the differences and it rerenders the only needed changes (thanks to reconciliation process that uses diff algorithm).

## Why is React so fast?

Because it does the DOM manipulation very efficiently with the help of react fibre architecture and reconciliation work.