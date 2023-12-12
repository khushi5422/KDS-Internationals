import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigationbar() {
  useEffect(() => {
    
    document.addEventListener("DOMContentLoaded", function(){

if (window.innerWidth > 992) {

	document.querySelectorAll('.navbar .nav-item').forEach((everyitem) =>{

		everyitem.addEventListener('mouseover', (e) =>{

			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.add('show');
				nextEl?.classList.add('show');
			}

		});
		everyitem.addEventListener('mouseleave', (e) =>{
			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.remove('show');
				nextEl?.classList.remove('show');
			}


		})
	});

}
// end if innerWidth
}); 
  }, []);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
 <div className="container-fluid">
  <Link className="navbar-brand" href="/">JK Exports</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="main_nav">
	<ul className="navbar-nav">
		<li className="nav-item active"> <Link className="nav-link" href="/">Home </Link> </li>
		<li className="nav-item"><Link className="nav-link" href="aboutus"> About </Link></li>
		<li className="nav-item"><Link className="nav-link" href="gallery"> Gallery </Link></li>
		<li className="nav-item"><Link className="nav-link" href="faq"> FAQ </Link></li>
		<li className="nav-item"><Link className="nav-link" href="contactus"> Contact </Link></li>
		<li className="nav-item dropdown">
		   <Link className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Hover me  </Link>
		    <ul className="dropdown-menu">
			  <li><Link className="dropdown-item" href="#"> Submenu item 1</Link></li>
			  <li><Link className="dropdown-item" href="#"> Submenu item 2 </Link></li>
			  <li><Link className="dropdown-item" href="#"> Submenu item 3 </Link></li>
		    </ul>
		</li>
	</ul>
  </div> 
 </div> 
</nav>
    </>
  );
}

export default Navigationbar;
