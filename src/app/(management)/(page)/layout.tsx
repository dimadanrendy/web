import Side from "../components/side";
import Header from "../components/header";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <Side />
                <div className="flex flex-col">
                    <Header />
                    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
