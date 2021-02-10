import React from "react";
/* import clapPic from './clapWhite.svg'
import clapPicSelect from './clap.svg' */
import happyPic from './assets/img/happy.svg'
import happyPicSelect from './assets/img/happyClick.svg'
import sadPic from './assets/img/sad.svg'
import sadPicSelect from './assets/img/sadClick.svg'

import firebase from './firebase';


let happyStatus = 'notclicked';
let sadStatus = 'notclicked';

function ImgHappy () {
    if(happyStatus==='notclicked') {
        return (<img src={happyPic} alt={"like pic"} className='imgLikeFace'/>);
    } else {
        return (<img src={happyPicSelect} alt={"like pic"} className='imgLikeFace'/>);
    }
}
function ImgSad () {
  if(sadStatus==='notclicked') {
      return (<img src={sadPic} alt={"like pic"} className='imgLikeFace'/>);
  } else {
      return (<img src={sadPicSelect} alt={"like pic"} className='imgLikeFace'/>);
  }
}

let enable='true';

const Contador = (props) => {
  let likes = props.numberOfLikes;
  const likesId = props.likesId;
  
  const increase = (likesId) => {
    if(enable==='true'){
      const newCount = likes + 1;
      firebase.firestore().collection('articulos').doc(likesId).update({likes: newCount});
      happyStatus = 'clicked';
      enable = 'false';
    } else{
      firebase.firestore().collection('articulos').doc(likesId).update({likes: likes});
    }
  } 

  const decrease = (likesId) => {
    if(enable==='true'){
      const newCount = likes - 1;
      firebase.firestore().collection('articulos').doc(likesId).update({likes: newCount});
      sadStatus = 'clicked';
      enable = 'false';
    } else{
      firebase.firestore().collection('articulos').doc(likesId).update({likes: likes});
    }
  } 

  return (
    <div className='divLikeButtons'>
      {/* <p>¿Te sirvió esta info?</p> */}
      <button onClick={() => increase(likesId)} className='btnLike'><ImgHappy/></button>
      <button onClick={() => decrease(likesId)} className='btnLike'><ImgSad/></button>
      <p className='contador'>{likes}</p> 
    </div>
  );
};

export default Contador;
