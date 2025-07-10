import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container grid place-items-center gap-6 py-20 text-center md:py-32">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4">
        <h1 className="text-4xl font-bold md:text-6xl">
          Automate Your Cloud Deployments with Confidence
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          AutoForge is a powerful, open-source CI/CD platform designed to streamline your development workflow.
          Build, test, and deploy your applications effortlessly.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <a href="/dashboard">Get Started</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </Button>
      </div>
    </section>
  );
}
