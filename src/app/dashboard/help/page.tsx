import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const faqs = [
  {
    question: "What is AutoForge?",
    answer:
      "AutoForge is a CI/CD platform designed to automate your development workflow. It helps you build, test, and deploy applications with ease by connecting to your code repository and running automated pipelines.",
  },
  {
    question: "How do I trigger a new deployment?",
    answer:
      "Deployments are automatically triggered when you push changes to your `main` branch. You can also manually trigger a deployment from the 'Pipeline' section on the main Dashboard.",
  },
  {
    question: "Where are my secrets stored?",
    answer:
      "Your secrets (e.g., API keys, private keys) are securely managed and are never hardcoded in your repository. They are stored using industry-standard encryption and are only injected into the environment during the deployment pipeline.",
  },
  {
    question: "Can I view logs for a specific deployment?",
    answer:
      "Yes. Navigate to the 'Deployments' page, find the deployment you're interested in, and click on 'View Logs' from the actions menu. You can also view a live stream of logs on the 'Logs' page.",
  },
];

export default function HelpPage() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Find answers to common questions about AutoForge.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Submit Feedback</CardTitle>
            <CardDescription>
              Have a suggestion or found a bug? Let us know!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="feedback" className="sr-only">Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Tell us what you think..."
                  rows={5}
                />
              </div>
              <Button className="w-full">Submit Feedback</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
