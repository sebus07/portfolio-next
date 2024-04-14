// Header.js
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"

function Header() {
    return (
        <section className="flex justify-center bg-[url('/images/photo3.jpg')]	shadow-2xl bg-pink-50">
            <div className="header ">
                <div className="uk-navbar-item uk-logo flex justify-center items-center flex-col">
                    <Image src="/images/logo/KOENIG.png" alt="Description" className="uk-align-center uk-margin-large-top" />
                    <Menubar className="w-64 flex justify-center items-center">
                    <MenubarMenu>
                        <MenubarTrigger className="">menu</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <a href="/">Accueil</a>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                <a href="/portfolio">Portfolio</a>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                <a href="/contact">Contact</a>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
                </div>
                
            </div>

        </section>
    );
}

export default Header;