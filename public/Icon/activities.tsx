import * as React from "react"
const Activities = (props:any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={26}
        stroke="none"
        fill="currentColor"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                d="M20.583 2.167H19.5V1.083a1.083 1.083 0 1 0-2.167 0v1.084H8.667V1.083a1.083 1.083 0 1 0-2.167 0v1.084H5.417A5.423 5.423 0 0 0 0 7.583v13A5.423 5.423 0 0 0 5.417 26h15.166A5.423 5.423 0 0 0 26 20.583v-13a5.423 5.423 0 0 0-5.417-5.416ZM5.417 4.333h15.166a3.254 3.254 0 0 1 3.25 3.25v1.084H2.167V7.583a3.254 3.254 0 0 1 3.25-3.25Zm15.166 19.5H5.417a3.254 3.254 0 0 1-3.25-3.25v-9.75h21.666v9.75a3.254 3.254 0 0 1-3.25 3.25Zm-1.265-9.585c.416.43.403 1.117-.027 1.532l-5.135 4.949c-.6.599-1.416.938-2.284.938a3.226 3.226 0 0 1-2.297-.953l-2.44-2.266a1.084 1.084 0 0 1 1.474-1.587l2.468 2.293c.47.466 1.152.436 1.559.029l5.15-4.964a1.084 1.084 0 0 1 1.532.028v.001Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h26v26H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default Activities
