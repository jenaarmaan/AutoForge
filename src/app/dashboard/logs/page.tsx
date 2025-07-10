import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const sampleLogs = [
  { level: 'info', timestamp: '2023-10-27T10:00:01Z', message: 'Starting build process...' },
  { level: 'info', timestamp: '2023-10-27T10:00:05Z', message: 'Installing dependencies...' },
  { level: 'info', timestamp: '2023-10-27T10:01:20Z', message: 'Dependencies installed successfully.' },
  { level: 'info', timestamp: '2023-10-27T10:01:25Z', message: 'Running tests...' },
  { level: 'warn', timestamp: '2023-10-27T10:02:00Z', message: 'Warning: 2 tests were skipped.' },
  { level: 'info', timestamp: '2023-10-27T10:02:30Z', message: 'Tests passed.' },
  { level: 'info', timestamp: '2023-10-27T10:02:35Z', message: 'Creating production build...' },
  { level: 'info', timestamp: '2023-10-27T10:03:50Z', message: 'Build successful.' },
  { level: 'info', timestamp: '2023-10-27T10:04:00Z', message: 'Deploying to server...' },
  { level: 'error', timestamp: '2023-10-27T10:05:15Z', message: 'Error: Connection to EC2 instance timed out.' },
  { level: 'info', timestamp: '2023-10-27T10:05:20Z', message: 'Retrying deployment...' },
  { level: 'info', timestamp: '2023-10-27T10:06:00Z', message: 'Deployment successful to ec2-user@xx.xxx.xx.xx.' },
];

const logLevelStyles: Record<string, string> = {
    info: 'bg-primary/20 text-primary-foreground border-primary/50',
    warn: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50',
    error: 'bg-destructive/20 text-destructive border-destructive/50',
}

export default function LogsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-time Logs</CardTitle>
        <CardDescription>
          Live stream of logs from your deployment pipeline.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[60vh] w-full rounded-md">
          <div className="bg-muted/50 dark:bg-card-foreground/30 p-4 rounded-lg font-mono text-sm">
            {sampleLogs.map((log, index) => (
              <div key={index} className="flex items-start gap-4 mb-2">
                <span className="text-muted-foreground whitespace-nowrap">{new Date(log.timestamp).toLocaleTimeString()}</span>
                <Badge variant="outline" className={cn("px-1.5 py-0 text-xs font-semibold uppercase", logLevelStyles[log.level] || 'bg-gray-500')}>{log.level}</Badge>
                <span className="flex-1 whitespace-pre-wrap break-words text-foreground/80">{log.message}</span>
              </div>
            ))}
             <div className="flex items-start gap-4">
                <span className="text-muted-foreground invisible">{new Date().toLocaleTimeString()}</span>
                <div className="h-4 w-4 bg-primary rounded-full animate-pulse mt-1 ml-2"></div>
                <span className="flex-1 whitespace-pre-wrap break-words text-muted-foreground">Awaiting new logs...</span>
              </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
