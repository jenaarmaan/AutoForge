'use client';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Status = 'success' | 'failure' | 'in-progress' | 'pending';

interface StatusBadgePreviewProps {
  status: Status;
}

const statusConfig: Record<Status, { text: string; className: string }> = {
  success: { text: 'passing', className: 'bg-accent text-accent-foreground hover:bg-accent/90' },
  failure: { text: 'failing',className: 'bg-destructive text-destructive-foreground hover:bg-destructive/90' },
  'in-progress': { text: 'in-progress', className: 'bg-primary/80 text-primary-foreground animate-pulse' },
  pending: { text: 'pending', className: 'bg-muted text-muted-foreground' },
};

export function StatusBadgePreview({ status }: StatusBadgePreviewProps) {
  const { text, className } = statusConfig[status];

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Deployment Status</CardTitle>
        <CardDescription>
          A dynamic status badge for your `README.md`.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 rounded-lg bg-card-foreground p-3 dark:bg-muted">
          <Badge className="border-transparent bg-neutral-600 text-neutral-100 hover:bg-neutral-600">build</Badge>
          <Badge className={cn(className, "transition-colors")}>{text}</Badge>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Provides instant visibility into your pipeline's health.
        </p>
      </CardContent>
    </Card>
  );
}
