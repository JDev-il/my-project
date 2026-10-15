import {
  Bot,
  Briefcase,
  LayoutDashboard,
  Newspaper,
  Radio,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

// TODO(UI): ROUTING agent replaces the in-page anchors below with real route
// definitions and active-link state.
export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Overview", href: "#overview", icon: LayoutDashboard },
  { label: "Portfolio", href: "#portfolio", icon: Briefcase },
  { label: "Watchlist", href: "#watchlist", icon: Star },
  { label: "Recommendations", href: "#recommendations", icon: Sparkles },
  { label: "AI assistant", href: "#assistant", icon: Bot },
  { label: "Live feed", href: "#live-feed", icon: Radio },
  { label: "News", href: "#news", icon: Newspaper },
];
