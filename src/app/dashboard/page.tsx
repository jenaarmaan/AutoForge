'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, CheckCircle, Clock, FileText, Package, Server, XCircle } from 'lucide-react';

const recentDeployments = [
  { id: 'dpl_1a2b3c', commit: 'feat: add user auth', branch: 'main', status: 'success', time: '5m ago' },
  { id: 'dpl_4d5e6f', commit: 'fix: button alignment', branch: 'staging', status: 'success', time: '2h ago' },
  { id: 'dpl_7g8h9i', commit: 'refactor: api service', branch: 'main', status: 'failure', time: '1d ago' },
  { id: 'dpl_j0k1l2', commit: 'docs: update readme', branch: 'main', status: 'success', time: '2d ago' },
  { id: 'dpl_m3n4o5', commit: 'chore: bump version', branch: 'main', status: 'success', time: '3d ago' },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'success':
      return <CheckCircle className="h-4 w-4 text-accent" />;
    case 'failure':
      return <XCircle className="h-4 w-4 text-destructive" />;
    default:
      return <Clock className="h-4 w-4 text-muted-foreground" />;
  }
};

export default function DashboardPage() {
  return (
    <div className="flex w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 md:gap-8">
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="p-6 md:p-8 lg:p-10">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Automate Your Cloud Deployments with Confidence
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              AutoForge streamlines your CI/CD pipeline, enabling you to build, test, and deploy code faster and more reliably.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Deployment
              </Button>
              <Button size="lg" variant="outline">
                View Logs
              </Button>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
          <Card className="rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Recent Deployments</CardTitle>
               <Button asChild variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
                <a href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDeployments.map((deployment) => (
                   <div key={deployment.id} className="flex items-center">
                    <StatusIcon status={deployment.status} />
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{deployment.commit}</p>
                      <p className="text-sm text-muted-foreground">Branch: {deployment.branch}</p>
                    </div>
                    <div className="ml-auto font-medium text-sm text-muted-foreground">{deployment.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:gap-8">
            <Card className="rounded-xl">
              <CardHeader className="pb-2">
                <CardDescription>Deployment Status</CardDescription>
                <CardTitle className="text-4xl flex items-center gap-2">
                  <CheckCircle className="h-10 w-10 text-accent" />
                  <span>All Systems Go</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  Last check: 2 minutes ago
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-xl">
               <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">System Health</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm">
                <div className="flex items-center">
                  <Server className="h-4 w-4 text-muted-foreground" />
                  <span className="ml-2">EC2 Instance</span>
                  <span className="ml-auto font-mono text-xs text-accent">Healthy</span>
                </div>
                <div className="flex items-center">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span className="ml-2">Build Runner</span>
                  <span className="ml-auto font-mono text-xs text-accent">Idle</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="ml-2">Logging Service</span>
                   <span className="ml-auto font-mono text-xs text-accent">Active</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
