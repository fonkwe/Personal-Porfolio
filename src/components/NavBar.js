import React from 'react'

export default function NavBar() {
  const handleChange = (event) => {
    event.preventDefault();
    let name = document.querySelector(".about");
    // name.style.backgroundColor = "red"
    name.style.marginLeft = "35%"
    name.style.width = "50%"
    name.style.transitionDurration = "300ms"
    console.log(name)
}
  return (
    <div className="top-nav" id="topest">
    <h1>CLIFF NJI FONKWE</h1>
    <div className="links">
    <a href="#foot1">About</a>
    <a href="#ty">Skills</a>
        <a href="#ert">Projects</a>
        <a href="#yu" onClick={handleChange}>Contact</a>
    </div>
</div>
    
  );
}
