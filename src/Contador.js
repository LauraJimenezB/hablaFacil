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
const Contador = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    if(enable==='true'){
      setCount(prevCount => {
        const newCount = Number(prevCount) + 1;
        localStorage.setItem("count", newCount);
        status = 'clicked';
        enable = 'false';
        return newCount;
      });
    } else{
      setCount(prevCount => {
        return prevCount;
      });
    }
  };
  
  useEffect(() => {
    const initialValue = localStorage.getItem("count");
    if (initialValue) setCount(initialValue);
  }, []);


  return (
    <div className='divLikeC'>
      <button onClick={() => increase()} className='btnLike'><ImgClap/></button>
      <p className='contador'>{count}</p>
      {/*<Message/>
      <h4>{contador > 1 ? "solo presionar una vez" : "Gracias por tu opinion"}</h4>*/}
    </div>
  );
};

export default Contador;
