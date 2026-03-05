import { Link } from "react-router-dom";
import { GraduationCap, Twitter, Linkedin, Globe } from "lucide-react";

interface AuthorCardProps {
    /** compact = single-row strip inside blog hero; full = full card below article */
    variant?: "compact" | "full";
}

const author = {
    name: "Anmol Gautam",
    role: "Founder, mygwacalculator.com",
    bio: "Anmol Gautam is the founder of mygwacalculator.com, a free academic tools platform built specifically for Filipino college students. He's passionate about making GWA computation, grade planning, and academic information accessible to every student across the Philippines.",
    initials: "AG",
    twitter: "#",
    linkedin: "#",
    website: "https://mygwacalculator.com/about",
};

export const AuthorCard = ({ variant = "full" }: AuthorCardProps) => {
    if (variant === "compact") {
        return (
            <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {author.initials}
                </div>
                <div>
                    <p className="text-sm font-semibold text-white/95 leading-tight">{author.name}</p>
                    <p className="text-xs text-white/70 leading-tight">{author.role}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-10 rounded-2xl border border-blue-100 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-5 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-lg">
                    {author.initials}
                </div>

                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            <GraduationCap className="h-3 w-3" /> Author
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{author.name}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">{author.role}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{author.bio}</p>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            <Globe className="h-3.5 w-3.5" /> About Page
                        </Link>
                        <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                            <Twitter className="h-3.5 w-3.5" /> Twitter
                        </a>
                        <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

/** JSON-LD Person schema for the author — embed in blog <Helmet> */
export const authorSchema = {
    "@type": "Person",
    "name": "Anmol Gautam",
    "url": "https://mygwacalculator.com/about",
    "jobTitle": "Founder",
    "worksFor": { "@type": "Organization", "name": "mygwacalculator.com" },
    "sameAs": ["https://mygwacalculator.com/about"],
};

export default AuthorCard;
