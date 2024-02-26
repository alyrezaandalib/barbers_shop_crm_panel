import * as React from "react"
const Gallery = (props:any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={26}
        stroke="none"
        fill="currentColor"
        {...props}
    >
        <g clipPath="url(#a)">
            <path d="M20.583 0H5.417A5.423 5.423 0 0 0 0 5.417v15.166A5.423 5.423 0 0 0 5.417 26h15.166A5.423 5.423 0 0 0 26 20.583V5.417A5.423 5.423 0 0 0 20.583 0ZM5.417 2.167h15.166a3.25 3.25 0 0 1 3.25 3.25v15.166a3.195 3.195 0 0 1-.325 1.392l-9.926-9.926a5.416 5.416 0 0 0-7.662 0l-3.753 3.753V5.417a3.25 3.25 0 0 1 3.25-3.25Zm0 21.666a3.25 3.25 0 0 1-3.25-3.25v-1.718l5.284-5.284a3.25 3.25 0 0 1 4.598 0l9.926 9.927c-.433.212-.91.323-1.392.325H5.417Z" />
            <path d="M17.333 11.375a3.792 3.792 0 1 0 0-7.584 3.792 3.792 0 0 0 0 7.584Zm0-5.417a1.625 1.625 0 1 1 0 3.251 1.625 1.625 0 0 1 0-3.25Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h26v26H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default Gallery