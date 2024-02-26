import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import React from "react";
import ImageUploader from "@/components/ImageUploader";

export default function ImageEditModal({isOpenImageModal, setOpenImageModal}: any) {
    return (
        <Modal isOpen={isOpenImageModal} onOpenChange={setOpenImageModal}>
            <ModalContent className={'flex items-center justify-center p-7 pb-5'}>
                {(onClose) => (
                    <>
                        <ModalBody>
                            <ImageUploader/>
                        </ModalBody>
                        <ModalFooter className={"w-full"}>
                            <Button color="danger" variant="flat" onPress={onClose} fullWidth>
                                لغو
                            </Button>
                            <Button color="secondary" onPress={onClose} fullWidth>
                                بارگذاری عکس
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}