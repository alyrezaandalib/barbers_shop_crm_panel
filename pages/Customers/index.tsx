'use client'
import {Button, Input, User, Avatar} from "@nextui-org/react";
import {CiSearch} from "react-icons/ci";
import DeleteUser from "../../components/Modals/DeleteUserModal";
import {turns} from "@/json/home/turns";
import AutoSelect from "@/components/AutoSelect";
import RightClickMenu from "@/components/RightClickMenu";
import React, {useEffect, useState} from "react";
import EnvelopeIcon from "@/public/Icon/envelopeIcon";
import CloseIcon from "@/public/Icon/close";
import {truncateTextStart} from "@/services/TurncateText";
import CustomerIcon from "@/public/Icon/customerIcon";
import AddUserModal from "@/components/Modals/AddUserModal";
import SeeDetails from "@/components/Modals/SeeDetails";
import MedalIcon from "@/public/Icon/medalIcon";
import {CustomersInputs} from "@/json/Inputs";

export default function CustomersPage() {

    // *** Add Customer Modal //////////////////////////
    const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false)
    const [formData, setFormData] = useState<any>({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        isVip: false,
    })

    const Inputs = CustomersInputs(formData)

    // *** See Customer Modal //////////////////////////
    const [openCustomerDetail, setOpenCustomerDetail] = useState(false)
    const [customerItem, setCustomerItem]: any = useState()

    // *** Modal //////////////////////////
    const [open, setOpen] = useState(false)
    const [item, setItem] = useState(
        {
            id:0,
            FName: "",
            LName: "",
            phoneNumber: '',
            isVip: false,
            time: "",
        },
    )

    useEffect(() => {
        setFormData({
            FirstName: item.FName,
            LastName: item.LName,
            PhoneNumber: item.phoneNumber,
            isVip: item.isVip,
        });
    }, [item]);

    const handleMenuItemClick = (action: string) => {
        if (action === "cancelTurn") {
            setOpen(!open)
        } else {
            setOpenAddCustomerModal(!openAddCustomerModal)

        }
    };

    const RightClickItems = [
        {Name: "ویرایش", icon: <EnvelopeIcon/>, color: "none", onClick: () => handleMenuItemClick("sendSMS")},
        {Name: "حذف مشتری", icon: <CloseIcon/>, color: "danger", onClick: () => handleMenuItemClick("cancelTurn")},
    ]

    return (
        <div className={"h-full flex flex-col w-full"}>

            {/*// *** header //////////////////////////*/}
            <div className={"bg-white rounded-lg flex items-center justify-between shadow-lg h-fit p-2"}>
                <div className={"flex items-center gap-1"}>
                    <Input
                        variant={"bordered"}
                        color={"secondary"}
                        className={"w-fit"}
                        size={"sm"}
                        type="text"
                        placeholder="Search..."
                        labelPlacement="outside"
                        startContent={
                            <CiSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                    />
                    <AutoSelect/>
                </div>
                <Button onClick={() => {
                    setFormData({
                        FirstName: "",
                        LastName: "",
                        PhoneNumber: "",
                        isVip: false,
                    });
                    setOpenAddCustomerModal(!openAddCustomerModal)
                }} variant={"solid"} radius={"sm"}
                        color={"secondary"}>
                    مشتری جدید
                </Button>
            </div>

            {/*// *** content //////////////////////////*/}
            <div className={"flex bg-white rounded-lg shadow-lg overflow-y-auto w-full p-3 mt-1 h-full items-start"}>
                <div
                    className={"grid grid-cols-5 content-center w-full gap-1.5"}>
                    {turns.map((item, index) => {
                        return (
                            <RightClickMenu key={index}
                                            item={item}
                                            RightClickItems={RightClickItems}
                                            setItem={setItem}>
                                <div
                                    className={"flex items-start justify-between border rounded-lg px-3 py-7 cursor-pointer"}
                                    onClick={() => {
                                        setOpenCustomerDetail(!openCustomerDetail)
                                        setCustomerItem(item)
                                    }}>
                                    <div className={"flex items-center"}>
                                        <Avatar
                                            icon={<CustomerIcon className={"text-black/40"}/>}
                                            classNames={{
                                                base: "bg-white",
                                            }}
                                        />
                                        <div className={"flex flex-col text-[14px] mr-1.5"}>
                                            <span>{truncateTextStart(13, item.FName + " " + item.LName)}</span>
                                            <span>{item.phoneNumber}</span>
                                        </div>
                                    </div>
                                    <MedalIcon className={"text-yellow-500 w-5"}/>
                                </div>
                            </RightClickMenu>
                        )
                    })}
                </div>
            </div>
            {/*// *** Delete Modal //////////////////////////*/}
            <DeleteUser open={open} setOpen={setOpen}
                        title={"حذف مشتری"}
                        body={`از حذف ${item.FName + " " + item.LName} از لیست مشتریان اطمینان دارید؟`}/>
            {/*// *** Add Customer Modal //////////////////////////*/}
            <AddUserModal open={openAddCustomerModal}
                          setOpen={setOpenAddCustomerModal}
                          inputs={Inputs}
                          formData={formData}
                          setFormData={setFormData}
                          item_read={item}
                          title={formData.FirstName ? "ویرایش مشتری" : "اضافه کردن مشتری جدید"}
            />
            {/*// *** Customer Detail Modal //////////////////////////*/}
            <SeeDetails open={openCustomerDetail} setOpen={setOpenCustomerDetail} CustomerDetail={customerItem}/>
        </div>
    )
}