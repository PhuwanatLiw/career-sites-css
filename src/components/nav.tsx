import { ThemeContext } from "@/contexts/themeContext";
import { GetColorFromTheme, GetHeaderColor } from "@/utilities/color";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useContext } from "react";

interface INav {
    navigation: {
        name: string;
        page: string;
    }[]
}
interface NavBuilderInterface {
    navData: INav
    settings: {
        homepageUrl?: string;
        name: string;
        hideFooter: boolean;
        excludeFromSiteMap: boolean;
      };
}
const NavBuilder = ({ navData, settings }: NavBuilderInterface) => {
    const navigation = navData.navigation
    const { theme } = useContext(ThemeContext)
    return <div className="w-full flex justify-between p-4 h-[52px]"
        style={{ 
            backgroundColor: theme?.headerBackgroundColor ? GetColorFromTheme(theme?.headerBackgroundColor, theme) : 'black',
            color: GetHeaderColor(theme) }}>
        <div className="flex gap-2">
            {
                navigation.map((navData) => {
                    return <Link key={navData.name}
                        href={navData.name === 'home' ? settings.homepageUrl ?? '' : navData.page}
                        className="capitalize header-button no-underline!"
                        style={{
                            color: GetHeaderColor(theme),
                            textDecoration: 'none'
                        }}>{navData.name}</Link>
                })
            }
        </div>
        <Link href={'#search-job'}
            className="flex gap-2 justify-start flex-row font-bold items-center no-underline w-fit"
            style={{ color: GetHeaderColor(theme), textDecoration: 'none' }}>
            <MagnifyingGlassIcon className="w-8 h-8"></MagnifyingGlassIcon>
            <div>
                Search Jobs
            </div>
        </Link>
    </div>
}

export default NavBuilder