const menu_data = [
  {    
    id: 1,
    title: "Home ",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 6,
    title: "About Us",
    link: "/about",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Services",
    link: "/services",
    has_dropdown: false,
    sub_menus: [
      { link: "/digitalsolutions", title: "Digital Solutions" },
      { link: "/servicenow", title: "ServiceNow Solutions" },
      { link: "/datadesign", title: "Data Design & Architecture" },
      { link: "/aisolutions", title: "AI-Driven Solutions" },
      { link: "/dataanalytics", title: "Data and Analytics" },
    ],
  }, 

  {
    id: 7,
    title: "Services ALT",
    link: "/services-alt",
    has_dropdown: false,
  },
  
{
    id: 3,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
  
];
export default menu_data;
