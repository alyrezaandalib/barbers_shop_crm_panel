import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import React from "react";

export default function AccountExitModal({isOpen, onOpenChange}: any) {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className={'flex items-center justify-center pt-3'}>
                {(onClose) => (
                    <>
                        <ModalHeader>خروج از حساب کاربری</ModalHeader>
                        <ModalBody>
                            <p>آیا میخواهید از حساب خود خارج شوید؟</p>
                        </ModalBody>
                        <ModalFooter className={"w-full"}>
                            <Button color="danger" variant="flat" onPress={onClose} fullWidth>
                                لغو
                            </Button>
                            <Button color="secondary" onPress={onClose} fullWidth>
                                خروج
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}