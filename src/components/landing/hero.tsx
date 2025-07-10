import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full bg-[#4285F4]">
      <div className="container grid place-items-center gap-6 py-20 text-center md:py-32">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Automate Your Cloud Deployments with Confidence
          </h1>
          <p className="max-w-xl text-lg text-blue-100">
            AutoForge is a powerful, open-source CI/CD platform designed to streamline your development workflow.
            Build, test, and deploy your applications effortlessly.
          </p>
        </div>
        <div className="flex gap-4">
          <Button size="lg" variant="secondary" asChild>
            <a href="/dashboard">Get Started</a>
          </Button>
          <Button size="lg" variant="outline" className="bg-white text-[#4285F4] hover:bg-white/90 hover:text-[#4285F4]" asChild>
            <a href="https://github.com/jenaarmaan/AutoForge" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
