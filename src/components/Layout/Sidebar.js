// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { SlHome } from 'react-icons/sl'
import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs'
import { FaTshirt, FaRedhat } from 'react-icons/fa'

import logo from '@/img/logo.svg'

export default function Sidebar({ show, setter }) {
    const router = useRouter();

    // Define our base class
    const className = "bg-white w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route, subItems }) => {
        const [showSubItems, setShowSubItems] = useState(false);
    
        const colorClass = router.pathname === route ? "" : "text-black/50 hover:text-black";
        const lineSelected = {
          border: '1px solid #000',
          margin: '20px 0',
          width: '20px',
          visibility: router.pathname === route ? 'visible' : 'hidden',
        };
    
        const handleItemClick = () => {
            console.log('handleItemClick called');
            setShowSubItems(!showSubItems);
            console.log('After Toggle:', showSubItems);
          };
    
        return (
          <div>
            <Link
              href={route}
              onClick={() => {
                setter(oldVal => !oldVal);
              }}
              className={`text-2xl flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
              style={{ fontFamily: 'Bebas Neue', fontSize: '1.2rem' }}
            >
              <hr style={lineSelected} />
              <div onClick={handleItemClick}>{name}</div>
            </Link>
    
            {showSubItems && (
              <div>
                {subItems.map((subItem, index) => (
                    
                  <Link
                    key={subItem.id}
                    href={subItem.route}
                    onClick={() => {
                      setter(oldVal => !oldVal);
                    }}
                    className={`text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
                    style={{ fontFamily: 'Bebas Neue', fontSize: '1rem' }}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      };

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-slate-300/50 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )

    return (
        <>
            <div className={`${className}${appendClass} `}>
                <div className="p-20 flex "  width={300} height={300} >
                
                
                </div>
                <div className="flex flex-col">
                    <div className="mt-6">
                    <MenuItem
                        name="Home"
                        route="/"
                        icon={<SlHome />}
                    />
                    </div>
                    <MenuItem
                    
                        name="About"
                        route="/about"
                        icon={<BsInfoSquare />}
                    />
                    <MenuItem
                        name="Achievements"
                        route="/achievements"
                        subItems={[
                            { id: 1, name: 'Awards', route: '/achievements/awards' },
                          ]}
                    />
                    <MenuItem
                        name="Hats"
                        route="/hats"
                        icon={<FaRedhat />}
                    />
                    <MenuItem
                        name="Contact"
                        route="/contact"
                        icon={<BsEnvelopeAt />}
                    />
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}
