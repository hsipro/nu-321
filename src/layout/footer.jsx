import React from "react";

const footer_data = [
  {
    id: 1,
    title: "About",
    cls: "col-xl-2",
    footer_col: "footer-col-1",
    links: [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about" },
      { name: "Opportunities", link: "/opportunities" },
    ],
  },
  {
    id: 2,
    title: "Services",
    cls: "col-xl-3",
    footer_col: "footer-col-2",
    links: [
      { name: "CRM Planning And Development", link: "/services#crm" },
      { name: "Website Design & Software Development", link: "services#website-design" },
      { name: "Risk Assessment and Management", link: "services#additional-services" },
    ],
  },
  {
    id: 3,
    title: "Managed Services",
    footer_col: "footer-col-3",
    cls: "col-xl-3",
    links: [
      { name: "Proactive monitoring, maintenance, and issue resolution", link: "services#managed-services" },
      { name: "Ongoing management, updates, and support ", link: "services#managed-services" },
    ],
  },
];


// social_links
const social_links = [
  // {
  //   link: "http://facebook.com",
  //   target: "_blank",
  //   icon: "fab fa-facebook-f",
  //   name: "Facebook",
  // },
  // {
  //   link: "https://www.youtube.com/",
  //   target: "_blank",
  //   icon: "fab fa-youtube",
  //   name: "Youtube",
  // },
  // {
  //   link: "https://www.basketball.com/",
  //   target: "_blank",
  //   icon: "fa-light fa-basketball",
  //   name: "Instagram",
  // },

  // {
  //   link: "http://whatsapp.com",
  //   target: "_blank",
  //   icon: "fa-brands fa-whatsapp",
  //   name: "Twitter",
  // },
];

const copyright = {
  logo: "/assets/img/logo/logo.png",
  copyright_text: (
    <>Copyright © 321datapro {new Date().getFullYear()}, All Rights Reserved</>
  ),
};

const { logo, copyright_text } = copyright;
const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer-bg bg-bottom"
          // style={{ backgroundImage: `url(/assets/img/bg/shape-bg-02.png)` }}
        >
          <div className="f-border pt-115 pb-70">
            <div className="container">
              <div className="row">
                     <div className="col-xl-4 col-lg-6 col-md-8">
                  <div className="footer-widget footer-col-4  mb-50">
                 
              
                  <div className="f-copyright__logo mb-30">
                    <a href="/contact">
                      <img src={logo} alt="logo 321 Datapro" />
                    </a>
                  </div>
                      
                         <div className="footer-widget__text mb-35">
                      <a className="btn-lgt-green">Contact Us</a>
                    </div>
                                
                    <div className="footer-widget__social d-flex align-items-center">
                      {social_links.map((link, i) => (
                        <a href={link.link} target={link.target} key={i}>
                          <i className={link.icon}></i>
                        </a>
                      ))}
                    </div>
                      
                      
                        <div className="f-copyright__text mb-30">
                    <span>{copyright_text}</span>
                  </div>
                      
                  </div>
                </div>
             
                  
                {footer_data.map((item) => (
                  <div key={item.id} className={`${item.cls} col-md-4`}>
                    <div className={`footer-widget ${item.footer_col} mb-50`}>
                      <div className="footer-widget__text mb-35">
                        <h3 className="footer-widget__title">{item.title}</h3>
                      </div>
                      <div className="footer-widget__link">
                        <ul>
                          {item.links.map((link, i) => (
                            <li key={i}>
                             <a href={link.link} target={link.target} key={i}>
                               {link.name}
                             </a>
                               
                            
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
