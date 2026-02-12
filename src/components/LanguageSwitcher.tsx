import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Switch Language">
                    <Globe className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("en")} className={i18n.language === 'en' ? 'font-bold' : ''}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("fil")} className={i18n.language === 'fil' ? 'font-bold' : ''}>
                    Filipino (Tagalog)
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
