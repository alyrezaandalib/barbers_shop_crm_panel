'use client'
import React, {MouseEvent, useEffect, useRef, useState} from 'react';
import {Button} from "@nextui-org/react";

interface CustomContextMenuProps {
    x: number;
    y: number;
    onClose: () => void;
    RightClickItems: any;
    item2: any
    setItem: any
}


const CustomContextMenu: React.FC<CustomContextMenuProps> = ({
                                                                 x,
                                                                 y,
                                                                 onClose,
                                                                 RightClickItems,
                                                                 item2,
                                                                 setItem,
                                                             }) => {
    return (
        <div
            className="absolute bg-white border shadow-2xl p-1.5 rounded-lg flex flex-col gap-1 text-xs text-center z-20"
            style={{top: y, left: x, zIndex: 20}}
        >
            {RightClickItems.map((item: any, index: any) =>
                <Button key={index}
                        variant={"solid"}
                        color={item.color}
                        radius={"sm"}
                        onClick={() => {
                            setItem(item2)
                            item.onClick(item2);
                            onClose();
                        }}
                        className={"flex items-center gap-4 justify-between"}>
                    <span className={"text-xs"}>{item.Name}</span>
                    {item.icon}
                </Button>)}
        </div>
    );
};

interface ReusableContextMenuProps {
    children: React.ReactNode;
    RightClickItems: any;
    item: any
    setItem: any
}

const ReusableContextMenu: React.FC<ReusableContextMenuProps> = ({
                                                                     children,
                                                                     RightClickItems,
                                                                     item,
                                                                     setItem,
                                                                 }) => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
        setPosition({x: event.clientX, y: event.clientY});
        setShowMenu(true);
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        // @ts-ignore
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // @ts-ignore
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div onContextMenu={handleContextMenu} className={"h-fit"}>
            {showMenu && (
                <div ref={menuRef}>
                    <CustomContextMenu x={position.x} y={position.y} onClose={handleCloseMenu}
                                       RightClickItems={RightClickItems} item2={item} setItem={setItem}/>
                </div>
            )}
            {children}
        </div>
    );
};

export default ReusableContextMenu;
