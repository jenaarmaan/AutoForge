'use client';
import { useState } from 'react';
import { Header } from '@/components/header';
import { PipelineTracker } from '@/components/dashboard/pipeline-tracker';
import { SecretsManager } from '@/components/dashboard/secrets-manager';
import { StatusBadgePreview } from '@/components/dashboard/status-badge-preview';

type BadgeStatus = 'pending' | 'in-progress' | 'success' | 'failure';
type PipelineStatus = 'pending' | 'running' | 'success' | 'failure';

export default function Home() {
  const [badgeStatus, setBadgeStatus] = useState<BadgeStatus>('pending');

  const handlePipelineStatusChange = (status: PipelineStatus) => {
      const newBadgeStatus: BadgeStatus = status === 'running' ? 'in-progress' : status;
      setBadgeStatus(newBadgeStatus);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 p-4 md:p-8 lg:p-10">
        <div className="mx-auto grid w-full max-w-7xl gap-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <PipelineTracker onStatusChange={handlePipelineStatusChange} />
              </div>
              <div className="space-y-8">
                <StatusBadgePreview status={badgeStatus} />
                <SecretsManager />
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
