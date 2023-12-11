import React from "react";
import Cards from "../componants/cards";
import Myskills from "../componants/myskills";

function About() {
  return (
    <>
    <section className="text-start">
      <span className="mini-title">INTRODUCTION</span> <h2 className="ot-title">Overview.</h2>
      <p className="all-des">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum<br /> dicta eaque cumque inventore molestias, beatae ea
        quaerat alias accusamus voluptas autem! Alias<br /> odit voluptates in totam
        vitae dignissimos minus eaque culpa unde tempore dolore aperiam<br />
        obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
        veniam dolorum ipsum doloribus.
      </p>
      <div className="d-inline-flex p-2">
     <Cards  
              title="patil" 
              description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum"/>
     <Cards
            
           title="patil" 
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum"  />
     <Cards 
          title="patil" 
           description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum" />
        <Cards 
          title="patil" 
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum" />  
        </div>
    </section>
    <section className="center">
      <Myskills />
    </section>
    </>
  );
}

export default About;
