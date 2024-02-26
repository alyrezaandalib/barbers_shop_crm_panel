import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import React from "react";

export default function DeleteUser({open, setOpen, body , title}: any) {
    return (
        <Modal isOpen={open} onOpenChange={setOpen}>
            <ModalContent className={'flex items-center justify-center p-7 pb-5'}>
                {(onClose) => (
                    <>
                        <ModalHeader>{title}</ModalHeader>
                        <ModalBody>
                            {body}
                        </ModalBody>
                        <ModalFooter className={"w-full"}>
                            <Button color="danger" radius={"sm"} variant="flat" onPress={onClose} fullWidth>
                                لغو
                            </Button>
                            <Button color="secondary" radius={"sm"} onPress={onClose} fullWidth>
                                تایید
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}