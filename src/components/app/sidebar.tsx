
'use client';
import {
  Home,
  Rocket,
  FileText,
  Settings,
  LifeBuoy,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col gap-2 p-4">
        {menuItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? 'default' : 'ghost'}
            className="justify-start"
            asChild
          >
            <a href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </a>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
