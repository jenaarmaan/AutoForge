
'use client';
import {
  Home,
  Rocket,
  FileText,
  Settings,
  LifeBuoy,
  Workflow,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/deployments', label: 'Deployments', icon: Rocket },
  { href: '/dashboard/logs', label: 'Logs', icon: FileText },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  { href: '/dashboard/help', label: 'Help', icon: LifeBuoy },
];

export function AppSidebar() {
  const { isMobile, state } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className={cn("flex items-center", isMobile ? "p-2" : "p-2 justify-center")}>
        <a
          href="/dashboard"
          className={cn("flex items-center gap-2 font-semibold text-lg")}
        >
          <Workflow className="h-6 w-6 text-primary" />
          <span className={cn("font-bold", state === 'collapsed' && !isMobile && "hidden")}>AutoForge</span>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.label, side: 'right' }}
              >
                <a href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
