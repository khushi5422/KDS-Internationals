import Caard from '@/components/Caard';
import { SetStateAction, useEffect, useState } from 'react';


const App = () => {
  const [section, setSection] = useState("section1");

  const handleClick = (section: SetStateAction<string>) => {
    setSection(section);
  };

  return (
    // <>
    // <style>
    //   {`
    //   .wid{
    //     width: fit-content;
    //     flex-wrap: nowrap
    //   }

    //   `}
    // </style>
    // <div className='container mt-2 '>
    //   <div className='row wid'>
    //   {/* width: fit-content */}
    //     <button className='btn btn-dark color-white' onClick={() => handleClick("section1")}>Section 1</button>
    //     <button className='btn btn-dark color-white' onClick={() => handleClick("section2")}>Section 2</button></div>
    //   <div>{section === "section1" ? <Section1 /> : <Section2 />}</div>
    // </div>
    // </>
    <>
      <div>
        <Caard img1="blackcardemon.png" title1="Black Cardemon"
         description1=" oreganoLoremipsumdolorsitametconsect etueradipiscingeliteruehnvwoeuhwrjngvrughvjrgneoiuivhnkjriuheu"
          img2="dillseeds.jpg" title2="Dill seeds " 
          description2=" oreganoLoremipsumdolorsitametconsect etueradipiscingeliteruehnvwoeuhwrjngvorughvjrgneoiuivhnkjriuheu"
          img3="fenugreekseeds.jpg" title3="Fenugreek Seeds" 
          description3=" oreganoLoremipsumdolorsitametconsect etueradipiscingeliteruehnvwoeuhwrjngvorughvjrgneoiuivhnkjriuheu."/>
        
      </div>
    </>
  );
};

const Section1 = () => {
  return <div>This is Section 1</div>;
};

const Section2 = () => {
  return <div>This is Section 2</div>;
};

export default App;
