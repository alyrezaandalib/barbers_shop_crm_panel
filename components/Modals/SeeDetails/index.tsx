import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import React from "react";
import MedalIcon from "@/public/Icon/medalIcon";

export default function SeeDetails({open, setOpen, CustomerDetail}: any) {
    return (
        <Modal isOpen={open} onOpenChange={setOpen}>
            <ModalContent className={'flex items-center justify-center p-7 pb-5'}>
                {(onClose) => (
                    <>
                        <ModalHeader className={"w-full"}>
                            <div className={"flex justify-between items-center w-full"}>
                                <span>{CustomerDetail.FName + " " + CustomerDetail.LName}</span>
                                <MedalIcon className={"text-yellow-500 w-7"}/>
                            </div>
                        </ModalHeader>
                        <ModalBody className={"w-full"}>
                            <div className={"flex flex-col gap-1"}>
                                <span>{`شماره تماس: ${CustomerDetail.phoneNumber}`}</span>
                                <span>{`سن: ${18}`}</span>
                                <span>آخرین خدمت ها:</span>
                                <span>2 services</span>
                            </div>

                        </ModalBody>
                        <ModalFooter className={"w-full"}>
                            <Button color="secondary" radius={"sm"} onPress={onClose} fullWidth>
                                بازگشت
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}