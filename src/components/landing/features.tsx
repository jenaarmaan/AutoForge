import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, ShieldCheck, TerminalSquare } from 'lucide-react';

const features = [
    {
        icon: <Rocket className="h-10 w-10 text-primary" />,
        title: 'Automated Deployment',
        description: 'Push to your main branch and watch AutoForge handle the rest, from installation to server restart.',
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: 'Secure Secrets Management',
        description: 'Keep your sensitive credentials like API keys and private keys safe and out of your codebase.',
    },
    {
        icon: <TerminalSquare className="h-10 w-10 text-primary" />,
        title: 'Automated Testing',
        description: 'Run your test suite automatically before every deployment to catch bugs before they hit production.',
    },
];

export function Features() {
  return (
    <section className="container py-12 md:py-20">
      <div className="mx-auto grid max-w-5xl justify-center gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="text-center">
            <CardHeader>
              <div className="flex justify-center">{feature.icon}</div>
              <CardTitle className="pt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
