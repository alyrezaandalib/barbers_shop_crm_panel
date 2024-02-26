import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import CustomInput from "@/components/Input";

export default function AddUserModal({setOpen, open, inputs, formData, setFormData , title}: any) {
    return (
        <Modal isOpen={open} onOpenChange={setOpen} className={"max-h-[82vh] overflow-y-auto"}>
            <ModalContent className={'flex items-center p-7 pb-5 '}>
                {(onClose) => (
                    <>
                        <ModalHeader>{title}</ModalHeader>
                        <ModalBody className={"w-full px-0"}>

                            {inputs.map((item: any, index: any) =>
                                <CustomInput key={index} InputValue={item} formData={formData}
                                             setFormData={setFormData}/>
                            )}

                        </ModalBody>
                        <ModalFooter className={"w-full"}>
                            <Button color="danger" radius={"sm"} variant="flat" onPress={onClose} fullWidth>
                                لغو
                            </Button>
                            <Button color="secondary" radius={"sm"} isDisabled={inputs.some((input:any) => input.isInvalid)} fullWidth>
                                تایید
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}