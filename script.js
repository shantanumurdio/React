// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste JavaScript";
// const root = document.getElementById("root");
// root.appendChild(heading);
const heading = React.createElement("h1", { id: "title" }, "heading1");
const para = React.createElement("p", {id : "paragraph"} ,"kaise ho bhai m,ereredfasdf");
const heading2 = React.createElement("h2", { id: "title" }, "heading2");
const container2 = React.createElement("div", {id: "container2"},React.createElement("img",{
  src : "https://images.template.net/81792/free-round-indian-flag-vector-xutm8.jpg" ,
  alt: "Abhilash berat menander"
}))
const container = React.createElement("div", { id: "container" }, [
  heading,
  para,
  heading2,
  container2
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
