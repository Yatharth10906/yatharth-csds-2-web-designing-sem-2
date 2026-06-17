const reactElement = React.createElement(
    "div",
    {},
    React.createElement("span", { id: "span-01" }, "1"),
    React.createElement("span", { id: "span-02" }, "2"),
    React.createElement("span", { id: "span-03" }, "3")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);
