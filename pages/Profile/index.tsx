'use client'
import {Button, Input, useDisclosure} from "@nextui-org/react";
import React, {useState} from "react";
import CustomInput from "@/components/Input";
import AccountExitModal from "@/components/Modals/AccountExitModal";
import ImageEditModal from "@/components/Modals/ImageEditModal";
import UpdateIcon from "@/public/Icon/update";
import EditIcon from "@/public/Icon/editIcon";
import {ProfileInputs} from "@/json/Inputs";

export default function ProfilePage() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isOpenImageModal, setOpenImageModal] = useState<any>(false)

    const [formData, setFormData] = useState<any>({
        FirstName: "ali",
        LastName: "andalib",
        Email: "aliraza.a@gmail.com",
        Password: "ali13811",
        PhoneNumber: "09103639826",
        UserName: "09103639826",
        NCode: "09103639826"
    })

    const Inputs = ProfileInputs(formData)

    return (
        <div className={"bg-white rounded-lg shadow-lg h-full w-full flex flex-col"}>
            <div className={"w-full h-[155px] shadow-lg bg-secondary rounded-t-lg relative p-5"}>
                <div className={"flex items-center absolute top-5"}>
                    <div className={"w-52 h-52 rounded-full bg-white shadow-lg"}></div>
                    <div className={"flex flex-col justify-center mr-5"}>
                        <div><span className={"font-bold text-white/80 text-2xl"}>علیرضا عندلیب</span></div>
                        <div className={"font-bold text-white/80 text-xl mt-5 mb-10"}>مدیریت سالن</div>
                        <div onClick={() => setOpenImageModal(!isOpenImageModal)}
                             className={"text-xs text-secondary cursor-pointer"}>+ اضافه کردن عکس
                        </div>
                    </div>

                    {/*// *** image edit button //////////////////////*/}
                    <Button
                        onClick={() => setOpenImageModal(!isOpenImageModal)}
                        variant={"solid"}
                        color={"secondary"}
                        radius={"full"}
                        className="capitalize border-2 border-white absolute top-40 right-[9.5rem] shadow-lg"
                        isIconOnly
                    >
                        <EditIcon/>
                    </Button>
                </div>
                <Button key={"logout"}
                        className={"absolute top-[130px] left-5"}
                        color={"danger"}
                        onClick={onOpen}
                        radius={"sm"}>خروج از حساب
                </Button>
            </div>

            {/*// *** form ///////////////////////////////*/}

            <div className={"flex items-center gap-2 mr-5 mt-28"}>
                <span className={"text-xl"}><UpdateIcon/></span>
                <span className={"text-xl"}>بروز رسانی اطلاعات</span>
            </div>
            <div className={"p-5 mx-1 h-[50%] overflow-y-auto"}>

                <form>
                    <div className={"grid grid-cols-2 gap-3"}>
                        {Inputs.map((item, index) =>
                            <CustomInput key={index} InputValue={item} formData={formData} setFormData={setFormData}/>
                        )}
                        <Input
                            label={"کدملی(اختیاری)"}
                            isDisabled={formData.NCode.length > 9}
                            type={"text"}
                            size={'sm'}
                            color={"secondary"}
                            value={formData.NCode}
                            onChange={(event: any) => {
                                formData.NCode = event.target.value
                                setFormData({...formData})
                            }}
                            variant="bordered"
                            className="w-full"
                        />
                        <div className={"w-full flex justify-end"}>
                            <Button color={"secondary"}
                                    type={"submit"} size={"lg"}
                                    radius={"sm"}
                                    isDisabled={Inputs.some((input: any) => input.isInvalid)}>
                                بروز رسانی اطلاعات
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

            {/*// *** logeOut modal //////////////////////*/}
            <AccountExitModal isOpen={isOpen} onOpenChange={onOpenChange}/>
            {/*// *** image edit modal //////////////////////*/}
            <ImageEditModal isOpenImageModal={isOpenImageModal} setOpenImageModal={setOpenImageModal}/>
        </div>
    )
}