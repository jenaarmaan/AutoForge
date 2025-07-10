
<h1 align="center">🚀 AutoForge</h1>
<p align="center">⚙️ Automate. Deploy. Deliver. — A blazing-fast CI/CD pipeline powered by GitHub Actions & AWS</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" />
  <img src="https://img.shields.io/github/workflow/status/jenaarmaan/autoforge/CI%2FCD%20Pipeline?label=Build%20Status&style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" />
</p>

---

## 🌩️ What is AutoForge?

> **AutoForge** is a real-world CI/CD solution that turns every code push into a fully automated deployment to the cloud. Built for developers and cloud engineers who want real control over their delivery pipeline — without the overhead.

---

## 🎯 Key Features

- 🔁 **Automated Deployment**  
  Push to `main` → AutoForge installs dependencies, pulls latest code to your AWS EC2 instance, and restarts the app — all hands-free!

- 🔐 **Secure Secrets Management**  
  AWS credentials, host info, and private keys are stored in GitHub Secrets for safe access.

- ✅ **Testing Before Deploying**  
  The pipeline includes a test phase. If tests fail, deployment stops. Quality-first!

- 🟢 **Deployment Status Badge**  
  Realtime CI badge in the README to show current build status (success/failure).

- 📈 **Modular & Extensible**  
  Easily extend to include Docker, ECS, CloudFront, etc. — DevOps made future-proof.

---

## 🧪 Tech Stack

| Layer           | Technology         |
|----------------|--------------------|
| 💻 Application  | Node.js / Python (modular) |
| ☁️ Cloud         | AWS EC2 (Ubuntu)   |
| 🔧 CI/CD         | GitHub Actions     |
| 🔐 Secrets Mgmt  | GitHub Secrets     |
| 📜 Deployment    | PM2 / Gunicorn     |

---

## 🛠️ How It Works


```mermaid
graph TD;
    A[Developer Pushes Code] --> B[GitHub Actions Triggered];
    B --> C[Run Tests];
    C -->|If Passed| D[SSH to EC2];
    D --> E[Pull Latest Code];
    E --> F[Restart App with PM2/Gunicorn];
    C -->|If Failed| X[Cancel Deployment];
```


