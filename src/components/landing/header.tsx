import { Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Workflow className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              AutoForge
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <a href="/dashboard">Go to Dashboard</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
