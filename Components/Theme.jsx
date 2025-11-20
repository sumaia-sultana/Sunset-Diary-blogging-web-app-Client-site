import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Theme = () => {

    const [theme, setTheme] = useState("light");

     useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // const Icon = theme === "light" ? FaMoon : FaSun;

    return (
    <div className="  dark:bg-[#2C2C2C]" data-theme={theme}>
    <div className="container dark:text-[#E4E4E4]">
    <div className=" ">
 <input
  type="checkbox"
  value="dark"
  className="toggle theme-controller "
  checked={theme === "dark"}
  onChange={handleToggleTheme}/>
        </div>
         
      </div>
    </div>
    );
};

export default Theme;

// import React, { useEffect, useState } from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';

// const Theme = () => {

//     const [theme, setTheme] = useState("");

//      useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//    if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.classList.toggle("dark", savedTheme === "dark");
//     } else {
//       // Detect system preference
//       const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       const initialTheme = prefersDark ? "dark" : "light";
//       setTheme(initialTheme);
//       document.documentElement.classList.toggle("dark", prefersDark);
//     }
//   }, []);
  
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark");
//     localStorage.setItem("theme", theme);
//   }, [theme]);



//   const handleToggleTheme = () => {
//      setTheme((prev) => (prev ===  "light" ? "dark" : "light"));
    
//   };

//   const Icon = theme === "light" ? FaMoon : FaSun;

//     return (
//     <div className="flex items-center justify-center">
//       <input
//         type="checkbox"
//         className="toggle theme-controller"
//         checked={theme === "dark"}
//         onChange={handleToggleTheme}
//       />
//       <Icon className="ml-2 text-xl" />
//     </div>
//     );
// };

// export default Theme;