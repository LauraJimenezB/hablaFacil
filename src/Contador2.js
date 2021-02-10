import React from "react";
import clapPic from './clapWhite.svg'
import clapPicSelect from './clap.svg'
import { useState, useEffect } from "react";


let status = 'notclicked';
function ImgClap () {
    if(status==='notclicked') {
        return (<img src={clapPic} alt={"like pic"} className='imgLikeHomeC'/>);
    } else {
        return (<img src={clapPicSelect} alt={"like pic"} className='imgLikeHomeC'/>);
    }
}

let enable='true';
const Contador2 = () => {
  const [count2, setCount2] = useState(0);
  const increase = () => {
    if(enable==='true'){
      setCount2(prevCount2 => {
        const newCount2 = Number(prevCount2) + 1;
        localStorage.setItem("count2", newCount2);
        status = 'clicked';
        enable = 'false';
        return newCount2;
      });
    } else{
      setCount2(prevCount2 => {
        return prevCount2;
      });
    }
  };
  
  useEffect(() => {
    const initialValue2 = localStorage.getItem("count2");
    if (initialValue2) setCount2(initialValue2);
  }, []);


  return (
    <div className='divLikeC'>
      <button onClick={() => increase()} className='btnLike'><ImgClap/></button>
      <p className='contador'>{count2}</p>
      {/*<Message/>
      <h4>{contador > 1 ? "solo presionar una vez" : "Gracias por tu opinion"}</h4>*/}
    </div>
  );
};

export default Contador2;
