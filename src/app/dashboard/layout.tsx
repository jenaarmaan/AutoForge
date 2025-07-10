import { AppHeader } from '@/components/app/header';
import { AppSidebar } from '@/components/app/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <AppSidebar />
      <div className="flex flex-col sm:pl-14">
        <AppHeader />
        <main className="flex-1 gap-4 p-4 sm:px-6 sm:py-4">
          {children}
        </main>
      </div>
    </div>
  );
}
