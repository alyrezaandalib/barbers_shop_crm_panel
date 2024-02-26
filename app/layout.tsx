import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Content from "@/components/Content";
import DisableRightClick from "@/components/DisableRightClick";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Salon panel',
    description: 'Salon panel',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html className={"hidden xl:block"} lang="en" dir={'rtl'}>
        <DisableRightClick/>
        <body className={"bg-secondary hidden xl:block"}>
        <Content content={children}/>
        </body>
        </html>
    )
}
