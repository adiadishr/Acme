import SideNav from "@/app/ui/dashboard/sidenav"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <SideNav />
            {children}
        </div>
    )
}

export default Layout