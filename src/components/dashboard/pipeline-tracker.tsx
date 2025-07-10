'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Hourglass, CheckCircle2, XCircle, GitCommit, Rocket, TestTube2, Building, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

type Status = 'pending' | 'running' | 'success' | 'failure';

interface Step {
  id: number;
  name: string;
  description: string;
  status: Status;
  icon: React.ElementType;
}

const initialSteps: Step[] = [
  { id: 1, name: 'Push to `main`', description: 'Changes pushed to the main branch.', status: 'pending', icon: GitCommit },
  { id: 2, name: 'Run Automated Tests', description: 'Executing unit and integration tests.', status: 'pending', icon: TestTube2 },
  { id: 3, name: 'Build Application', description: 'Creating a production-ready build.', status: 'pending', icon: Building },
  { id: 4, name: 'Deploy to Server', description: 'Deploying to AWS EC2 instance.', status: 'pending', icon: Rocket },
];

const statusIcons: Record<Status, React.ReactElement> = {
  running: <Hourglass className="h-5 w-5 animate-spin text-primary" />,
  success: <CheckCircle2 className="h-5 w-5 text-accent" />,
  failure: <XCircle className="h-5 w-5 text-destructive" />,
  pending: <div />,
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function PipelineTracker({ onStatusChange }: { onStatusChange: (status: Status) => void }) {
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [isDeploying, setIsDeploying] = useState(false);
  const [progress, setProgress] = useState(0);

  const runDeployment = useCallback(async () => {
    setIsDeploying(true);
    onStatusChange('running');

    let overallSuccess = true;
    for (let i = 0; i < initialSteps.length; i++) {
      setSteps(prev => prev.map(s => s.id === initialSteps[i].id ? { ...s, status: 'running' } : s));
      setProgress(((i + 0.5) / initialSteps.length) * 100);
      await sleep(1500);

      const isTestStep = initialSteps[i].name.includes('Tests');
      const shouldFail = isTestStep && Math.random() > 0.8; 

      const newStatus: Status = shouldFail ? 'failure' : 'success';
      setSteps(prev => prev.map(s => s.id === initialSteps[i].id ? { ...s, status: newStatus } : s));
      
      if (newStatus === 'failure') {
        overallSuccess = false;
        break;
      }
    }
    
    setProgress(100);
    onStatusChange(overallSuccess ? 'success' : 'failure');
    await sleep(2000);
    setIsDeploying(false);
  }, [onStatusChange]);
  
  const resetPipeline = () => {
    setSteps(initialSteps);
    onStatusChange('pending');
    setProgress(0);
  }

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle>CI/CD Pipeline</CardTitle>
        <CardDescription>Visualize your automated deployment process from commit to production.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Button onClick={runDeployment} disabled={isDeploying}>
              <Rocket className="mr-2 h-4 w-4" />
              {isDeploying ? 'Deployment in Progress...' : 'Trigger Deployment'}
            </Button>
            <Button onClick={resetPipeline} variant="outline" disabled={isDeploying}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
          
          <Progress value={progress} className={cn("h-2 transition-all duration-500", progress === 0 && "opacity-0")} />

          <div className="border-l-2 border-dashed border-border ml-5 mt-6 space-y-8">
            {steps.map((step) => {
              const StatusIcon = statusIcons[step.status];
              const DefaultIcon = step.icon;
              return (
                <div key={step.id} className="flex items-start gap-4 -ml-5">
                  <div className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors", step.status === 'success' && 'bg-accent/20', step.status === 'failure' && 'bg-destructive/20')}>
                    {step.status === 'pending' ? <DefaultIcon className="h-5 w-5 text-muted-foreground" /> : StatusIcon}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <p className="font-semibold">{step.name}</p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
