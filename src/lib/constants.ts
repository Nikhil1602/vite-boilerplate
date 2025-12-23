import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";
import { PiWebhooksLogo } from "react-icons/pi";
import { SiVite } from "react-icons/si";
import type { PackageTypes } from "@/types";

export const packageIncludes: PackageTypes = [
    {
        id: 1,
        name: "React 19",
        Icon: FaReact
    },
    {
        id: 2,
        name: "Vite - Typescript + React Compiler v7.2",
        Icon: SiVite
    },
    {
        id: 3,
        name: "Tailwind v4",
        Icon: RiTailwindCssFill
    },
    {
        id: 4,
        name: "Typescript 5",
        Icon: BiLogoTypescript
    },
    {
        id: 5,
        name: "Shadcn/UI (Neutral)",
        Icon: SiShadcnui
    },
    {
        id: 6,
        name: "React Icons v5.5",
        Icon: FaReact
    },
    {
        id: 7,
        name: `Custom Hooks: 
    - useBrowserStorage
    - useIsMobile 
    - useOnlineStatus`,
        Icon: PiWebhooksLogo
    }
]