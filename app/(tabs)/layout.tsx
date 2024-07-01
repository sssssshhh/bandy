import TabBar from "@/components/tab-bar"

export default function TapLayout({children}: {
    children: React.ReactNode
}){
    return <div>
        {children}
        <TabBar />
    </div>
}