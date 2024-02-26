'use client'
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

type SidebarItem = {
    id: number;
    name: string;
    icon: any;
    href: any
};

type SidebarProps = {
    items: SidebarItem[];
};

const Sidebar: React.FC<SidebarProps> = ({items}) => {

    const pathName = usePathname()

    return (
        <aside className={'hidden xl:block mx-auto w-[9%] pb-10 bg-secondary h-screen'} style={{overflowY: "auto" , overflowX:"clip", direction: 'ltr'} }>
            <ul className={"mx-auto text-center"} style={{direction: 'rtl'}}>
                <div className={"text-white text-3xl mt-8 mb-10"} style={{fontWeight: 500}}>سالن</div>
                {items.map((item, index) =>
                    <Link href={item.href} key={index}>
                        <li
                            className={`${pathName === item.href ? "bg-[#fff] text-secondary" : "text-white"} flex flex-col items-center pr-5 py-3 my-1 hover:bg-[#fff] hover:text-secondary w-[80%] rounded-l-lg`}>
                           <div>{item.icon}</div>
                            <span className={"text-[0.8rem] mt-1"}> {item.name}</span>
                        </li>
                    </Link>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;
