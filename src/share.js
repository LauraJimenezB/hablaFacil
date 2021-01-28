import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import sharePic from './share.svg'
import fbPic from './facebook.svg'
import twitterPic from './twitter.svg'
import emailPic from './email.svg'
import linkedinPic from './linkedin.svg'
import wpPic from './whatsapp.svg'

export function Share () {
    return (
    <div className='compartir'>
    <style type="text/css">
    {`
    
.btn-primary{
      color: black;
      background-color: #EFECDE;
      border-color:  #EFECDE;
  }
  
  .btn-primary:hover{
      color: black;
      background-color: #EFECDE;
      border-color:  #EFECDE;
  }
  
  .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
      color: black;
      background-color: #EFECDE;
      border-color:  #EFECDE;
  }
  
  
  .btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show>.btn-primary.dropdown-toggle:focus {
      box-shadow: 0 0 0 0.2rem  #EFECDE;
  }
  
  .btn-primary.focus, .btn-primary:focus{
      box-shadow: 0 0 0 0.2rem  #EFECDE;
      color: black;
      background-color: #EFECDE;
      border-color:  #EFECDE;
  }
  
  .dropdown-menu {
      border-radius: 0.5rem;
      box-shadow: 0 0 10px gray;
      padding-top: 0%;
      padding-bottom: 0%;
  }

  .btn {
      font-size: 1.2rem;
      height: 2.5rem;
  }
  .dropdown-toggle::after{
      border: none;
  }
  .dropdown-item::focus{
        background-color: grey;
  }
  
    `}
     </style>
        <DropdownButton id="dropdown-basic-button" title={
                    <div className='itemMenuTitle'>
                        <p>Compartir</p>
                        <img 
                            src={sharePic}
                            alt={"user pic"}
                            className='imgCompartir'
                        />
                    </div>
                } >
            <Dropdown.Item>
                  <EmailShareButton 
                        url={"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8"}
                        quote={"HablaFacil - Mantente informado"}
                        hashtag="#HablaFacil">
                  <div className='flexShare'>
                  <img 
                        src={emailPic}
                        alt={"email pic"}
                        className='imgItems'
                  />
                  <p className='itemMenu'>Email</p>
                  </div>
                  </EmailShareButton>
            </Dropdown.Item>
            <Dropdown.Item>
                  <FacebookShareButton 
                        url={"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8"}
                        quote={"HablaFacil - Mantente informado"}
                        hashtag="#HablaFacil">
                  <div className='flexShare'>
                  <img 
                        src={fbPic}
                        alt={"fb pic"}
                        className='imgItems'
                  />
                  <p className='itemMenu'>Facebook</p>
                  </div>
                  </FacebookShareButton>
            </Dropdown.Item>
            <Dropdown.Item>
                  <TwitterShareButton 
                        url={"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8"}
                        quote={"HablaFacil - Mantente informado"}
                        hashtag="#HablaFacil">
                  <div className='flexShare'>
                  <img 
                        src={twitterPic}
                        alt={"twitter pic"}
                        className='imgItems'
                  />
                  <p className='itemMenu'>Twitter</p>
                  </div>
                  </TwitterShareButton>
            </Dropdown.Item>
            <Dropdown.Item>
                  <LinkedinShareButton 
                        url={"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8"}
                        quote={"HablaFacil - Mantente informado"}
                        hashtag="#HablaFacil">
                  <div className='flexShare'>
                  <img 
                        src={linkedinPic}
                        alt={"linkedin pic"}
                        className='imgItems'
                  />
                  <p className='itemMenu'>LinkedIn</p>
                  </div>
                  </LinkedinShareButton>
            </Dropdown.Item>
            <Dropdown.Item>
                  <WhatsappShareButton 
                        url={"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8"}
                        quote={"HablaFacil - Mantente informado"}
                        hashtag="#HablaFacil">
                  <div className='flexShare'>
                  <img 
                        src={wpPic}
                        alt={"wp pic"}
                        className='imgItems'
                  />
                  <p className='itemMenu'>WhatsApp</p>
                  </div>
                  </WhatsappShareButton>
            </Dropdown.Item>
        </DropdownButton>
    </div>
    );
}