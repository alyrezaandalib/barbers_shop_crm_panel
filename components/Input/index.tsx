import React, {useState} from 'react';
import {Checkbox, Input, Textarea, AutocompleteItem, Autocomplete} from '@nextui-org/react';

export default function CustomInput({InputValue, formData, setFormData}: any) {
    const [inputError, setInputError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (value: string) => {
        formData[InputValue.value] = value;
        setFormData({...formData});
        validateInput(value);
    };

    const validateInput = (value: string) => {
        if (InputValue.validationRegex) {
            const regex = new RegExp(InputValue.validationRegex);
            if (!regex.test(value)) {
                setInputError(true);
                setErrorMessage(InputValue.message);
                return;
            }
        }

        setInputError(false);
        setErrorMessage('');
    };

    return (
        <div>
            {InputValue.isCheckBox ? (
                <Checkbox
                    color="secondary"
                    onChange={() => {
                        formData[InputValue.value] = !formData[InputValue.value]
                        setFormData({...formData});
                    }}
                >
                    <span className={'text-sm mr-1'}>{InputValue.label}</span>
                </Checkbox>
            ) : InputValue.isTextarea ?
                (
                    <Textarea
                        label={InputValue.label}
                        variant={"bordered"}
                        color={"secondary"}
                    />
                ) :
                InputValue.isDisabled ? (
                        <Input
                            label={InputValue.label}
                            isDisabled={InputValue.isDisabled}
                            size={'sm'}
                            color={'secondary'}
                            value={formData[InputValue.value]}
                            variant="bordered"
                            className="w-full"
                        />
                    )
                    : InputValue.isAutoSelect ? (
                            <Autocomplete
                                variant={"bordered"}
                                color={"secondary"}
                                size={"sm"}
                                value={formData[InputValue.value]}
                                placeholder={InputValue.placeholder}
                                onSelectionChange={(key) => {
                                    formData[InputValue.value] = key
                                    setFormData({...formData});
                                }}
                                errorMessage={inputError && errorMessage}
                                isInvalid={inputError}
                            >
                                {InputValue.Items.map((item: any) => <AutocompleteItem
                                    key={item.value}>{item.label}</AutocompleteItem>)}
                            </Autocomplete>
                        )
                        : (
                            <Input
                                isClearable
                                label={InputValue.label}
                                type={InputValue.type}
                                size={'sm'}
                                isInvalid={inputError}
                                color={
                                    inputError ? 'danger' : 'secondary'
                                }
                                errorMessage={inputError && errorMessage}
                                value={formData[InputValue.value]}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    const {value} = event.target;
                                    if (InputValue.value === 'PhoneNumber' || InputValue.value === 'NCode' || InputValue.value === 'PhoneNumber2' || InputValue.value === 'HomePhone' || InputValue.value === 'PostalCode' || InputValue.value === 'InsuranceAmount' || InputValue.value === 'cooperationBenefits' || InputValue.value === 'cooperationBenefits2') {
                                        event.target.value = value.replace(/\D/g, '');
                                        handleInputChange(event.target.value);
                                    } else {
                                        handleInputChange(value);
                                    }
                                }}
                                onBlur={() => {
                                    validateInput(formData[InputValue.value]);
                                }}
                                onClear={() => {
                                    formData[InputValue.value] = '';
                                    setFormData({...formData});
                                    setInputError(false);
                                    setErrorMessage('');
                                }}
                                variant="bordered"
                                className="w-full"
                            />
                        )}
        </div>
    );
}
