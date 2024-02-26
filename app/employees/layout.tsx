'use client'
import {Avatar, Button, ScrollShadow} from "@nextui-org/react";
import {turns} from "@/json/home/turns";
import Link from "next/link";
import {IoIosAdd} from "react-icons/io";
import {usePathname} from "next/navigation";
import EnvelopeIcon from "@/public/Icon/envelopeIcon";
import CloseIcon from "@/public/Icon/close";
import React, {useEffect, useState} from "react";
import RightClickMenu from "@/components/RightClickMenu";
import DeleteUser from "../../components/Modals/DeleteUserModal";
import CustomerIcon from "@/public/Icon/customerIcon";
import AddUserModal from "@/components/Modals/AddUserModal";
import {EmployeesGroupInputs} from "@/json/Inputs";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    // *** Add EmployeesGroup Modal //////////////////////////
    const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false)
    const [formData, setFormData] = useState<any>({
        Name: "",
        Expertise: ""

    })
    console.log(formData)
    const Inputs = EmployeesGroupInputs(formData)
    // *** Modal //////////////////////////
    const [open, setOpen] = useState(false)
    const [item, setItem] = useState(
        {
            Name: "",
            Expertise: ""
        },
    )

    useEffect(() => {
    }, [item]);

    const handleMenuItemClick = (action: string) => {
        if (action === "cancelTurn") {
            setOpen(!open)
        } else {
            setOpenAddCustomerModal(!openAddCustomerModal)
        }
    };

    const RightClickItems = [
        {Name: "ویرایش گروه", icon: <EnvelopeIcon/>, color: "none", onClick: () => handleMenuItemClick("sendSMS")},
        {Name: "حذف گروه", icon: <CloseIcon/>, color: "danger", onClick: () => handleMenuItemClick("cancelTurn")},
    ]

    return (
        <div className={"w-full h-full flex justify-between items-center gap-1"}>

            {/*// *** aside //////////////////////////*/}
            <div
                className={"w-[25%] bg-white h-full rounded-lg shadow-lg flex flex-col relative "}>

                {/*// *** title //////////////////////////*/}
                    <div className={"flex items-center gap-2 mt-4 mb-2 pr-2 w-full"}>
                        <div className={"w-7 h-7 shadow-lg bg-secondary rounded-full border-2 border-white"}></div>
                        <div className={"font-bold text-lg"}>گروه های زیبایی</div>
                    </div>
                    <ScrollShadow className="w-full h-full">
                        {turns.map((item, index) => {
                            return (
                                <RightClickMenu RightClickItems={RightClickItems} key={index} item={item}
                                                setItem={setItem}>
                                    <Link key={index} href={`/employees/${index + 1}`}>
                                        <div
                                            className={`${pathname === `/employees/${index + 1}` ? "bg-[#aaa]/10" : ""} w-full p-3 rounded-none border-b flex items-center gap-2 hover:bg-[#aaa]/20`}>
                                            <Avatar
                                                showFallback
                                                isBordered
                                                className={"w-8 h-8"}
                                                icon={<CustomerIcon className={"text-black/40"}/>}
                                                classNames={{
                                                    base: "bg-white",
                                                }}
                                            />
                                            <div>{item.FName + " " + item.LName}</div>
                                        </div>
                                    </Link>
                                </RightClickMenu>)
                        })}
                    </ScrollShadow>
                <Button onClick={() => {
                    setFormData({
                        Name: "",
                        Expertise: ""
                    });
                    setOpenAddCustomerModal(!openAddCustomerModal)
                }}
                        size={"lg"}
                        variant={"solid"}
                        isIconOnly
                        className={"rounded-full bg-secondary text-white text-2xl m-2 absolute bottom-0 left-0"}>
                    <IoIosAdd/>
                </Button>
            </div>
            {children}

            {/*// *** modal //////////////////////////*/}
            <DeleteUser open={open} setOpen={setOpen}
                        title={"حذف گروه"}
                        body={`از حذف گروه ${item.Name} اطمینان دارید؟`}/>

            {/*// *** Add Customer Modal //////////////////////////*/}
            <AddUserModal open={openAddCustomerModal}
                          setOpen={setOpenAddCustomerModal}
                          inputs={Inputs}
                          formData={formData}
                          setFormData={setFormData}
                          item_read={item}
                          title={formData.Name ? "ویرایش گروه" : "اضافه کردن گروه جدید"}
            />
        </div>
    )
}
