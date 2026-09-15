# 🚀 [SmartFleet AI - Supply Chain Disruption Assistant & Fleet Utilisation Optimizer]

> Supply Chain Disruption Assistant & Fleet Utilisation Optimizer

---

## 👥 Team

| Field | Value |
|---|---|
| **Team Name** | [Codeforge] |
| **Track** | [AI] |
| **Team Lead** | [kansara Maanya] — [24bsit023@charusat.edu.in] |
| **Members** | [Ghona Hardi], [Vekariya Vigna], [Savaliya Tanvi] |

---

## 🎯 Problem Statement

> Supply-chain operations can be disrupted by road blocks, heavy traffic, vehicle breakdowns and other unexpected events. These disruptions can cause delivery delays while some fleet vehicles may remain underutilised.

Logistics managers need a faster way to identify affected deliveries, understand fleet utilisation and select suitable vehicles for reassignment.


---

## 💡 Solution

> SmartFleet AI is a web-based decision-support application that monitors fleet utilisation, identifies supply-chain disruptions and analyses affected deliveries.

The system evaluates vehicle availability, remaining capacity, current utilisation and disruption information to generate an explainable vehicle reassignment recommendation. It also provides an AI Assistant interface for asking logistics-related questions.



## ✨ Key Features

- **Fleet Utilisation Monitoring:** Calculates and displays the utilisation percentage of each vehicle.
- **Disruption Detection:** Displays road blocks, heavy traffic and vehicle breakdown alerts with route, severity and expected delay.
- **Affected Delivery Analysis:** Identifies deliveries operating on disrupted routes.
- **AI Fleet Optimisation:** Recommends an available vehicle based on capacity, utilisation and disruption context.
- **Explainable Recommendations:** Shows why a particular vehicle is recommended.
- **AI Assistant:** Allows users to ask questions about fleet utilisation, disruptions, affected deliveries and recommended actions.
- **Interactive Dashboard:** Provides a single view of fleet KPIs, utilisation and active disruptions.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | HTML, CSS, JavaScript |
| **Frameworks** | None — lightweight browser-based prototype |
| **IBM Technologies** | IBM BoB Hackathon environment / AI platform integration |
| **Databases** | None — prototype uses sample CSV/data |
| **Other** | GitHub, GitHub Actions |

> **Note:** The current prototype uses a local recommendation engine with sample logistics data. IBM AI/BoB integration should be connected according to the official hackathon environment and requirements before final submission.

---

## 📁 Repository Structure

```text
├── app/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── data/
│   ├── vehicles.csv
│   ├── deliveries.csv
│   └── disruptions.csv
│
├── documentation/
│   ├── PROJECT_DOCUMENTATION.md
│   ├── ARCHITECTURE.md
│   └── TEST_CASES.md
│
├── demo/
│   └── DEMO_SCRIPT.md
│
├── screenshots/
│   ├── dashboard_top.png
│   ├── dashboard_details.png
│   └── SCREENSHOTS.md
│
├── presentation/
│   └── PPT_CONTENT.md
│
└── README.md

---

## ⚡ How to Run

Option 1 — Simple Method
Clone the repository:
git clone https://github.com/[YOUR-GITHUB-USERNAME]/[YOUR-REPOSITORY].git
Open the repository folder.
Open:
app/index.html
The SmartFleet AI application will open in your browser.
Option 2 — Using a Local Server

If you have Python installed:

cd [YOUR-REPOSITORY]
python -m http.server 8000

Then open:
http://localhost:8000/app/

---

## 🖥️ Demo

| Artifact | Link |
|---|---|
| 📹 Demo Video | [See demo/demo-video-link.txt](demo/demo-video-link.txt) |
| 🌐 Live Demo | [See demo/live-demo-url.txt](demo/live-demo-url.txt) |
| 🖼️ Screenshots | [See demo/screenshots/](demo/screenshots/) |
| 📊 Presentation | [See presentation/slides.pdf](presentation/) |

---

## ⚠️ Known Limitations

> The current prototype uses sample/fictitious fleet, delivery and disruption data.
Real-time GPS tracking is not currently connected.
Real-time traffic and weather APIs are not currently connected.
The current recommendation engine is a local prototype and is not a production-grade optimisation system.
Authentication and user management are not implemented.
The current prototype does not use a production database.
The AI Assistant currently responds using the application's available sample data.
Final IBM AI/BoB integration depends on the approved hackathon environment and configuration.
---

## 🏅 What We're Most Proud Of

We are proud of building a complete decision-support prototype that connects three important logistics factors — fleet utilisation, supply-chain disruptions and delivery requirements — into one application.

Instead of simply displaying data, SmartFleet AI analyses the available information and provides an understandable vehicle reassignment recommendation with reasons behind the decision.

The project demonstrates how AI-assisted decision support can help logistics teams respond faster to disruptions and make better use of available fleet capacity.

---
