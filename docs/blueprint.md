# **App Name**: AutoForge

## Core Features:

- Automated Deployment: Automatically deploys code to a live server when changes are pushed to the `main` branch. The pipeline installs dependencies, pulls the latest code onto an AWS EC2 instance via SSH, and restarts the app (Node.js with PM2 or Python with Gunicorn)
- Secrets Management: Sensitive credentials (e.g., `AWS_HOST`, `EC2_USERNAME`, `PRIVATE_KEY`) are securely stored in GitHub Secrets — ensuring no hardcoded values in the workflow files or repo.
- Deployment Status Badge: Displays a dynamic status badge in the `README.md` that reflects the latest build's success or failure, boosting transparency, credibility, and DevOps hygiene.
- Testing Phase: Before deployment, the CI/CD pipeline runs automated tests. This tool acts as a gate, and if any test fails, the deployment halts — ensuring code quality and stable delivery.

## Style Guidelines:

- Primary Color: #77B5FE (Soft Blue). Calm and professional; reflects cloud-native reliability.
- Background Color: #F0F0F0 (Light Gray). Clean, neutral layout that emphasizes core content and code blocks.
- Accent Color: #8FBC8F (Muted Green). Used for success states, buttons (CTAs), and test pass indicators — visually communicates stability.
- Font: 'Inter', sans-serif. Modern, readable, and minimalist — suitable for UI components, documentation, and status displays.
- Icons to indicate progress: Checkmark for successful test or deployment, X for failure, Hourglass for in-progress steps
- Subtle animations for Deployment triggers and Build/test progress. All animations should be smooth and non-distracting, maintaining focus on the core workflow.