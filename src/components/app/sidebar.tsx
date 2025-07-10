
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

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/deployments', label: 'Deployments', icon: Rocket },
  { href: '/logs', label: 'Logs', icon: FileText },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/help', label: 'Help', icon: LifeBuoy },
];

export function AppSidebar() {
  const { isMobile, state } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={cn("flex items-center", isMobile ? "justify-between p-2" : "p-2")}>
        <a
          href="/dashboard"
          className={cn("flex items-center gap-2 font-semibold text-lg", state === 'collapsed' && !isMobile && "hidden")}
        >
          <Workflow className="h-6 w-6 text-primary" />
          <span className="font-bold">AutoForge</span>
        </a>
        {!isMobile && (
          <div className="flex w-full items-center justify-end">
            <SidebarTrigger />
          </div>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(item.href) && (item.href === '/dashboard' ? pathname === item.href : true) }
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
