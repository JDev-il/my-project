import { Bell, Search } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { MobileNav } from "./mobile-nav";

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur lg:px-6">
      <MobileNav />

      <div className="relative max-w-md flex-1">
        <Search
          className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        {/* TODO(UI): LOGIC agent — supply symbol/company search results, then wire here */}
        <Input
          type="search"
          placeholder="Search stocks, ETFs, companies"
          aria-label="Search stocks, ETFs, companies"
          className="pl-8"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        {/* TODO(UI): LOGIC agent — supply live market status, then wire here */}
        <Badge variant="outline" className="hidden sm:inline-flex">
          Market status
        </Badge>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Notifications"
        >
          <Bell aria-hidden="true" />
        </Button>
        <Avatar>
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
