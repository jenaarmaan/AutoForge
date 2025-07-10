import { AppHeader } from '@/components/app/header';
import { AppSidebar } from '@/components/app/sidebar';
import { SidebarInset } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AppHeader />
        <SidebarInset>
          <main className="flex-1 p-4 sm:px-6 sm:py-0 md:p-8">
            {children}
          </main>
        </SidebarInset>
      </div>
    </div>
  );
}
