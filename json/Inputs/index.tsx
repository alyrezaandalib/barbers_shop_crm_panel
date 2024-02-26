// ** profile inputs
export function ProfileInputs(formData: any) {
    return [
        {
            label: "نام*",
            value: "FirstName",
            type: "text",
            // isInvalid: formData.FirstName.trim() === "",
            onClearDisable: false,
            validationRegex: /^.+$/,
            message: "لطفا نام خود را وارد کنید."
        },
        {
            label: "نام خانوادگی*",
            value: "LastName",
            type: "text",
            // isInvalid: formData.LastName.trim() === "",
            onClearDisable: false,
            validationRegex: /^.+$/,
            message: "لطفا نام خانوادگی خود را وارد کنید."
        },
        {
            label: "ایمیل*",
            value: "Email",
            type: "email",
            // isInvalid: formData.Email.trim() === "" || !formData.Email.match(/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/),
            onClearDisable: false,
            validationRegex: /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/,
            message: "ایمیل وارد شده نامعتبر است."
        },
        {
            label: "رمز عبور*",
            value: "Password",
            type: "text",
            // isInvalid: formData.Password.trim() === "" || !formData.Password.match(/^.{8}$/),
            onClearDisable: false,
            validationRegex: /^.{8}$/,
            message: "رمز عبور باید شامل 8 کاراکتر باشد"
        },
        {label: "شماره تماس*", value: "PhoneNumber", isDisabled: true, onClearDisable: true},
        {label: "نام کاربری*", value: "UserName", isDisabled: true, onClearDisable: true},
    ];
}

// ** customers inputs
export function CustomersInputs(formData: any) {
    return [
        {label: "نام", value: "FirstName", type: "text", onClearDisable: false,},
        {label: "نام خانوادگی", value: "LastName", type: "text", onClearDisable: false,},
        {
            label: "شماره تماس*",
            value: "PhoneNumber",
            type: "text",
            onClearDisable: false,
            // isInvalid: formData.PhoneNumber.trim() === "" || !formData.PhoneNumber.match(/^(\+98|0)?9\d{9}$/),
            validationRegex: /^(\+98|0)?9\d{9}$/,
            message: "لطفا شماره تماس خود را به درستی وارد کنید"
        },
        {label: "مشتری ویژه است", value: "isVip", isCheckBox: true}
    ]
}

// ** employees inputs
export function EmployeesInputs(formData: any) {
    return [
        {
            label: "نام*",
            value: "FirstName",
            type: "text",
            // isInvalid: formData.FirstName.trim() === "",
            onClearDisable: false,
            validationRegex: /^.+$/,
            message: "لطفا نام خود را وارد کنید"
        },
        {
            label: "نام خانوادگی*",
            value: "LastName",
            type: "text",
            // isInvalid: formData.LastName.trim() === "",
            onClearDisable: false,
            validationRegex: /^.+$/,
            message: "لطفا نام خود را وارد کنید"
        },
        {
            label: "کد ملی(اختیاری)",
            value: "NCode",
            type: "text",
            onClearDisable: false,
            validationRegex: /^\d{10}$/,
            message: "لطفا یک کدملی معتبر وارد کنید"
        },
        {
            label: "شماره تماس*",
            value: "PhoneNumber",
            type: "text",
            // isInvalid: formData.PhoneNumber.trim() === "" || !(formData.PhoneNumber.match(/^.+$/) || formData.PhoneNumber.match(/^(\+98|0)?9\d{9}$/)),
            onClearDisable: false,
            validationRegex: /^(\+98|0)?9\d{9}$/,
            message: "لطفا شماره تماس خود را به درستی وارد کنید"
        },

        {
            label: "شماره تماس دوم(اختیاری)",
            value: "PhoneNumber2",
            type: "text",
            onClearDisable: false,
            validationRegex: /^(\+98|0)?9\d{9}$/,
            message: "لطفا یک شماره معتبر وارد کنید"
        }, {
            label: "درصد سود مشارکت*",
            value: "cooperationBenefits",
            type: "text",
            // isInvalid: formData.cooperationBenefits === null || formData.cooperationBenefits.trim() === "",
            onClearDisable: false,
            message: "لطفا درصد مشارکت را وارد کنید"
        },
        {
            label: "درصد سود مشارکت در صورت آوردن مشتری*",
            value: "cooperationBenefits2",
            type: "text",
            // isInvalid: formData.cooperationBenefits2 === null || formData.cooperationBenefits2.trim() === "",
            onClearDisable: false,
            message: "لطفا درصد مشارکت را وارد کنید"
        },
        {
            label: "ایمیل(اختیاری)",
            value: "Email",
            type: "text",
            onClearDisable: false,
            validationRegex: /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/,
            message: "لطفا یک ایمیل معتبر وارد کنید"
        },
        {
            label: "آدرس(اختیاری)",
            value: "Address",
            isTextarea: true,
        },
        {
            label: "تلفن ثابت(اختیاری)",
            value: "HomePhone",
            type: "text",
            validationRegex: /^\d{5}-\d{4}$/,
            message: "لطفا یک شماره معتبر وارد کنید"
        },
        {
            label: "کد پستی(اختیاری)",
            value: "PostalCode",
            type: "text",
            validationRegex: /^\d{5}-\d{4}$/,
            message: "لطفا یک کدپستی معتبر وارد کنید"
        },
        {
            label: "توضیحات(اختیاری)",
            value: "Description",
            type: "text",
            onClearDisable: false,
        },
        {
            label: "بیمه دارد",
            value: "Insurance",
            isCheckBox: true,
        },
        {
            label: "مقدار هزینه بیمه*",
            value: "InsuranceAmount",
            type: "text",
            // isInvalid: formData.InsuranceAmount === "" || (!formData.Insurance && formData.InsuranceAmount.trim() === ""),
            onClearDisable: false,
            isDisabled: !formData.Insurance,
            validationRegex: /^.+$/,
            message: "مقدار بیمه پرداختی را وارد کنید"
        },
    ];
}

// ** customers inputs
export function EmployeesGroupInputs(formData: any) {
    return [
        {
            label: "نام گروه*",
            value: "Name",
            type: "text",
            onClearDisable: false,
            // isInvalid: formData.Name.trim() === "",
            validationRegex: /^.+$/,
            message: "لطفا نام گروه را وارد کنید"
        }, {
            isAutoSelect: true,
            placeholder: "تخصص*",
            value: "Expertise",
            // isInvalid: formData.Expertise === null || formData.Expertise.trim() === "",
            validationRegex: /^.+$/,
            message: "لطفا یکی از تخصص های زیر را انتخاب کنید",
            Items: [
                // {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
                // {label: "Dog", value: "dog", description: "The most popular pet in the world"},
                // {label: "Elephant", value: "elephant", description: "The largest land animal"},
                // {label: "Lion", value: "lion", description: "The king of the jungle"},
                // {label: "Tiger", value: "tiger", description: "The largest cat species"},
            ]
        },
    ]
}