import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    // thame change state
    const [themes, setTheme] = useState('light')

    useEffect(()=>{
        localStorage.setItem('themes', themes)
        const localTheme = localStorage.getItem('themes')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[themes])

    const themeChange = e => {
        if(e.target.checked){
            setTheme('synthwave')
        }
        else{
            setTheme('light')
        }
    }


    return (
        <div className="navbar bg-base-100 shadow-lg px-5 fixed z-10 container mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-[25px] font-bold text-secondary gap-0">Bytesp <span className="text-primary">Blaze</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                   <NavLink className={({isActive})=> isActive ? 'text-base font-bold text-primary mr-5':'text-base font-bold mr-5'} to="/">Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-base font-bold text-primary mr-5':'text-base font-bold mr-5'} to="/blogs">Blog</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-base font-bold text-primary mr-5':'text-base font-bold mr-5'} to="/bookmarks">Bookmark</NavLink>
                </ul>
            </div>
            <label className="cursor-pointer grid place-items-center">
                <input
                onChange={themeChange}
                 type="checkbox" 
                 value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
        </div>
    );
};

export default Navbar;