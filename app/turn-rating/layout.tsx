import type {Metadata} from 'next'
export const metadata: Metadata = {
    title: 'Salon panel / turn rating',
    description: 'Salon panel / turn rating',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
