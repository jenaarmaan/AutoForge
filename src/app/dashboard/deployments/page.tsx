import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, CheckCircle, XCircle, Clock, ArrowUpRight } from 'lucide-react';

const deployments = [
  { id: 'dpl_1a2b3c', commit: 'feat: add user auth', commitHash: 'a1b2c3d', branch: 'main', status: 'success', time: '5m ago' },
  { id: 'dpl_4d5e6f', commit: 'fix: button alignment', commitHash: 'f4e5d6c', branch: 'staging', status: 'success', time: '2h ago' },
  { id: 'dpl_7g8h9i', commit: 'refactor: api service', commitHash: 'i7g8h9i', branch: 'main', status: 'failure', time: '1d ago' },
  { id: 'dpl_j0k1l2', commit: 'docs: update readme', commitHash: 'j0k1l2m', branch: 'main', status: 'success', time: '2d ago' },
  { id: 'dpl_m3n4o5', commit: 'chore: bump version', commitHash: 'm3n4o5p', branch: 'main', status: 'success', time: '3d ago' },
  { id: 'dpl_p6q7r8', commit: 'feat: implement new pipeline', commitHash: 'p6q7r8s', branch: 'feature/pipeline', status: 'in-progress', time: '5d ago' },
  { id: 'dpl_s9t0u1', commit: 'fix: resolve merge conflicts', commitHash: 's9t0u1v', branch: 'main', status: 'success', time: '6d ago' },
  { id: 'dpl_v2w3x4', commit: 'refactor: move to new server', commitHash: 'v2w3x4y', branch: 'infra-updates', status: 'success', time: '1w ago' },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'success':
      return <CheckCircle className="h-4 w-4 text-accent" />;
    case 'failure':
      return <XCircle className="h-4 w-4 text-destructive" />;
    case 'in-progress':
        return <Clock className="h-4 w-4 text-primary animate-spin" />;
    default:
      return <Clock className="h-4 w-4 text-muted-foreground" />;
  }
};

export default function DeploymentsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Deployments</CardTitle>
          <CardDescription>
            A history of all your deployments.
          </CardDescription>
        </div>
        <Button>
            <ArrowUpRight className="mr-2 h-4 w-4" />
            New Deployment
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Status</TableHead>
              <TableHead>Commit</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deployments.map((deployment) => (
              <TableRow key={deployment.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <StatusIcon status={deployment.status} />
                    <span className="capitalize">{deployment.status === 'in-progress' ? 'Running' : deployment.status}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div>{deployment.commit}</div>
                  <div className="text-xs text-muted-foreground font-mono">{deployment.commitHash}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{deployment.branch}</Badge>
                </TableCell>
                <TableCell>{deployment.time}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>View Logs</DropdownMenuItem>
                      <DropdownMenuItem>Rollback</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
