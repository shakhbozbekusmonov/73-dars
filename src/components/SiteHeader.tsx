import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Account from './Account';

const navList: { id: number; label: string; href: string }[] = [
    {
        id: 1,
        label: 'Menyu',
        href: '/menyu',
    },
    {
        id: 2,
        label: 'Bolalar uchun',
        href: '/bolalar-uchun',
    },
    {
        id: 3,
        label: 'Filliallar',
        href: '/filliallar',
    },
];

const SiteHeader = () => {
    return (
        <header className="py-6 bg-gradient-to-r from-white from-60% to-[#800A7A] to-40%">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="w-full lg:w-[60%] flex justify-between items-center">
                        <a href="/">
                            <img src="/images/logo.svg" alt="" />
                        </a>

                        <NavigationMenu>
                            <NavigationMenuList className="gap-10">
                                {navList.map((item) => (
                                    <NavigationMenuItem key={item.id}>
                                        <a href={item.href}>{item.label}</a>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="w-full lg:w-[40%] flex gap-5 items-center justify-center">
                        <a
                            className='flex items-center before:inline-block before:border-[""] before:w-6 before:h-6 before:bg-[url("/icons/phone.svg")] before:mr-4'
                            href="tel:+998712005400"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex flex-col">
                                <span className="text-white text-[12px]">
                                    +99871
                                </span>
                                <span className="text-white text-2xl font-bold">
                                    200-54-00
                                </span>
                            </div>
                        </a>

                        <a
                            className='flex items-center before:inline-block before:border-[""] before:w-6 before:h-6 before:bg-[url("/icons/cart.svg")] before:mr-4'
                            href="tel:+998712005400"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex flex-col">
                                <span className="text-white text-2xl font-bold">
                                    Korzina
                                </span>
                                <span className="text-white text-[12px]">
                                    0 uzs
                                </span>
                            </div>
                        </a>

                        <Account />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
