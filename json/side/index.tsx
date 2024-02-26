import Dashboard from "@/public/Icon/dashboard";
import Employees from "@/public/Icon/employees";
import Customer from "@/public/Icon/customer";
import Activities from "@/public/Icon/activities";
import Wallet from "@/public/Icon/Wallet";
import SMS from "@/public/Icon/sms";
import Gallery from "@/public/Icon/gallery";
import OnlineShop from "@/public/Icon/onlineShop";
import Pointer from "@/public/Icon/pointer";
import PerformanceReview from "@/public/Icon/performanceReview";
import TurnRating from "@/public/Icon/turnRating";


export const sidebarItems = [
    {
        id: 1,
        name: "داشبورد",
        icon: <Dashboard/>
        ,
        href:"/"
    },
    {
        id: 2,
        name: "کارمندان",
        icon: <Employees/>,
        href:"/employees"
    },
    {
        id: 3,
        name: "مشتری",
        icon: <Customer/>,
        href:"/customers"
    },
    {
        id: 4,
        name: "فعالیت ها",
        icon: <Activities/>,
        href:"/activities"
    },
    {
        id: 5,
        name: "کیف پول",
        icon: <Wallet/>,
        href:"/wallet"
    },
    {
        id: 6,
        name: "نوبت دهی",
        icon: <TurnRating/>,
        href:"/turn-rating"
    },   {
        id: 7,
        name: "پیامک",
        icon: <SMS/>,
        href:"/sms"
    },   {
        id: 8,
        name: "گالری",
        icon: <Gallery/>,
        href:"/gallery"
    }, {
        id: 9,
        name: "بررسی عملکرد",
        icon: <PerformanceReview/>,
        href:"/review"
    },   {
        id: 10,
        name: "فروشگاه آنلاین",
        icon: <OnlineShop/>,
        href:"/online-shop"
    },  {
        id: 11,
        name: "وب سایت",
        icon: <Pointer/>,
        href:"/web"
    },
];
