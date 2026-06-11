import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { CardContextProvider } from "@/context/cardContext";

export default function MarketingLayout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <>
            <CardContextProvider>
                <Header />
                    {children}
                <Footer />
            </CardContextProvider>
        </>
    )
}