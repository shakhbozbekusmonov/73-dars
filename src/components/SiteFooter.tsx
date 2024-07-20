// import { useEffect } from 'react',
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

const navList: { id: number; label: string; href: string }[] = [
    {
        id: 1,
        label: 'Kompaniya haqida',
        href: '/kompaniya-haqida',
    },
    {
        id: 2,
        label: 'Filliallar',
        href: '/filliallar',
    },
    {
        id: 3,
        label: 'Bolalar uchun',
        href: '/bolalar-uchun',
    },
];

const navList2: { id: number; label: string; href: string }[] = [
    {
        id: 1,
        label: 'Menyu',
        href: '/menyu',
    },
    {
        id: 2,
        label: 'Bonusli karta',
        href: '/bonusli-karta',
    },
    {
        id: 3,
        label: 'Bu qanday ishlaydi?',
        href: '/bu-qanday-ishlaydi',
    },
];

const SiteFooter = () => {
    return (
        <div>
            <footer className=" ">
                <div className="container max-w-7xl mx-auto">
                    <div className="flex mb-12 mt-5">
                        <div className="flex items-center justify-between gap-[70px]">
                            <a href="./index.html">
                                <img
                                    className="mr-[138px] mb-16"
                                    src="/public/images/logo.svg"
                                    width="52"
                                    height="55"
                                    alt="MaxWay logo"
                                />
                            </a>

                            <div className="w-[115px]">
                                <h3 className="mb-4 font-medium text-[20px]">
                                    Asosiy
                                </h3>
                                <NavigationMenu>
                                    <NavigationMenuList className="block">
                                        {navList.map((item) => (
                                            <NavigationMenuItem>
                                                <a
                                                    className="text-[14px] text-start"
                                                    href={item.href}
                                                >
                                                    {item.label}
                                                </a>
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>

                            <div className="w-[120px]">
                                <h3 className="mb-4 font-medium text-[20px] ">
                                    Qo’shimcha
                                </h3>
                                <NavigationMenu>
                                    <NavigationMenuList className="block">
                                        {navList2.map((item) => (
                                            <NavigationMenuItem>
                                                <a
                                                    className="text-[14px] text-start"
                                                    href={item.href}
                                                >
                                                    {item.label}
                                                </a>
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>

                            <div className="w-[286px] ml-[300px]">
                                <h3 className="mb-4 font-medium text-[20px] ">
                                    Biz bilan aloqa
                                </h3>
                                <a
                                    href="tel:+998712005400"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className=" font-normal text-[25px]">
                                        (+998 71) 200-54-00
                                    </span>
                                </a>
                                <p className="mt-2">
                                    <a
                                        className="opacity-[70%] text-[14px]"
                                        href="https://yandex.uz/maps/-/CDSFMUZd"
                                    >
                                        100011, Toshkent sh. Shayxontohur
                                        tumani, Zarqaynar ko’chasi, 3B-uy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <span className="last-line">
                        <img
                            className="last-line__img"
                            src="./public/images/line2.png"
                            srcSet="./public/images/line2.png 1x, ./public/images/line2@2x.png 2x"
                            alt="last line"
                        />
                    </span>
                </div>

                <div className="site-footer__inform mt-8">
                    <div className="container max-w-7xl mx-auto">
                        <div className="flex">
                            <p className="mr-[780px]">© Maxway, 2020</p>
                            <ul className="flex gap-4">
                                <li className="inform2-icons">
                                    <a href="https://m.youtube.com/@maxway2010">
                                        <img
                                            src="./public/icons/youtube.svg"
                                            alt="youtobe"
                                        />
                                    </a>
                                </li>
                                <li className="inform2-icons">
                                    <a href="https://www.facebook.com/maxway.uzb/?locale=ru_RU">
                                        <img
                                            src="./public/icons/facebook.svg"
                                            alt="facebook"
                                        />
                                    </a>
                                </li>
                                <li className="inform2-icons">
                                    <a href="https://www.instagram.com/maxwayuz/">
                                        <img
                                            src="./public/icons/instagram.svg"
                                            alt="instagram"
                                        />
                                    </a>
                                </li>
                                <li className="inform2-icons">
                                    <a href="https://t.me/maxwaymasterfood_bot">
                                        <img
                                            src="./public/icons/telegram.svg"
                                            alt="telegram"
                                        />
                                    </a>
                                </li>
                                <li className="inform2-icons">
                                    <a href="https://www.tiktok.com/tag/maxway">
                                        <img
                                            src="./public/icons/tiktok.svg"
                                            alt="tiktok"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )}
// >>>>>>> e8a4e7f4dc2f1c204e250216e4885a637124a5ee

export default SiteFooter;