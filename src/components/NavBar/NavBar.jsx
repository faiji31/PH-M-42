import React from 'react';
import Link from './Link';
import { Menu } from 'lucide-react';
const NavigationData=[
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Products",
    "path": "/products"
  },
  {
    "id": 4,
    "name": "Contact",
    "path": "/contact"
  },
  {
    "id": 5,
    "name": "Dashboard",
    "path": "/dashboard"
  }
]


const NavBar = () => {
    return (
        <nav className='flex justify-between mx-10 '>
            <span className='flex gap-4'>
                <Menu className='md:hidden'></Menu>
            <h3 className=''>My Navbar</h3>
            </span>
           <ul className='flex '>
             {
                NavigationData.map(route=><Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;