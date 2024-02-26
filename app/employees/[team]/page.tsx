'use client'
import {turns} from "@/json/home/turns";
import {Accordion, AccordionItem, Avatar, Button, Input, User} from "@nextui-org/react";
import {CiSearch} from "react-icons/ci";
import RightClickMenu from "@/components/RightClickMenu";
import AutoSelect from "@/components/AutoSelect";
import EnvelopeIcon from "@/public/Icon/envelopeIcon";
import CloseIcon from "@/public/Icon/close";
import React, {useEffect, useState} from "react";
import DeleteUser from "../../../components/Modals/DeleteUserModal";
import {truncateTextStart} from "@/services/TurncateText"
import CustomerIcon from "@/public/Icon/customerIcon";
import MedalIcon from "@/public/Icon/medalIcon";
import AddUserModal from "@/components/Modals/AddUserModal";
import SeeDetails from "@/components/Modals/SeeDetails";
import {EmployeesInputs} from "@/json/Inputs";

export default function Team({params}: {
    params: {
        method: number
    }
}) {
    // *** Add Customer Modal //////////////////////////
    const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false)
    const [formData, setFormData] = useState<any>({
        FirstName: "",
        LastName: "",
        NCode: "",
        PhoneNumber: "",
        PhoneNumber2: "",
        cooperationBenefits: "",
        cooperationBenefits2: "",
        Address: "",
        Email: "",
        HomePhone: "",
        PostalCode: "",
        Description: "",
        Insurance: false,
        InsuranceAmount: "",

    })
    const Inputs = EmployeesInputs(formData)

    // *** See Customer Modal //////////////////////////
    const [openCustomerDetail, setOpenCustomerDetail] = useState(false)
    const [customerItem, setCustomerItem]: any = useState()

    // *** modal //////////////////////////
    const [open, setOpen] = useState(false)
    const [item, setItem] = useState(
        {
            id: 0,
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
        console.log(item)
        if (action === "cancelTurn") {
            setOpen(!open)
        } else {
            setOpenAddCustomerModal(!openAddCustomerModal)
        }
    };

    const RightClickItems = [
        {Name: "ویرایش", icon: <EnvelopeIcon/>, color: "none", onClick: () => handleMenuItemClick("sendSMS")},
        {Name: "حذف کارمند", icon: <CloseIcon/>, color: "danger", onClick: () => handleMenuItemClick("cancelTurn")},
    ]

    return (
        <div className={"h-full flex flex-col w-full"}>
            {/*// *** header //////////////////////////*/}
            <div className={"bg-white rounded-lg flex items-center justify-between shadow-lg h-fit p-2"}>
                <div className={"flex items-center gap-1"}>
                    <Input
                        className={"w-fit"}
                        variant={"bordered"}
                        color={"secondary"}
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
                    کارمند جدید
                </Button>
            </div>

            {/*// *** content //////////////////////////*/}
            <div className={"flex bg-white rounded-lg shadow-lg overflow-y-auto w-full p-3 mt-1 h-full items-start"}>
                <div
                    className={"grid grid-cols-4 content-center w-full gap-1.5"}>
                    {turns.map((item, index) => {
                        return (
                            <RightClickMenu RightClickItems={RightClickItems} key={index} item={item}
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
                                    {/*// if has icon //////////////////////////*/}
                                    <></>
                                </div>
                            </RightClickMenu>
                        )
                    })}
                </div>
            </div>
            {/*// *** modal //////////////////////////*/}
            <DeleteUser open={open} setOpen={setOpen}
                        title={"حذف کارمند"}
                        body={`از حذف ${item.FName + " " + item.LName} از لیست کارمندان اطمینان دارید؟`}/>
            {/*// *** Add Customer Modal //////////////////////////*/}
            <AddUserModal open={openAddCustomerModal}
                          setOpen={setOpenAddCustomerModal}
                          inputs={Inputs}
                          formData={formData}
                          setFormData={setFormData}
                          title={formData.FirstName ? "ویرایش کارمند" : "اضافه کردن کارمند جدید"}
            />
            {/*// *** Customer Detail Modal //////////////////////////*/}
            <SeeDetails open={openCustomerDetail} setOpen={setOpenCustomerDetail} CustomerDetail={customerItem}/>
        </div>

    )
}