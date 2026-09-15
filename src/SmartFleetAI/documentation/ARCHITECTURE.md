# Architecture

```text
                ┌───────────────────────┐
                │      User / Manager   │
                └───────────┬───────────┘
                            │
                            ▼
                ┌───────────────────────┐
                │   SmartFleet Web UI   │
                └───────────┬───────────┘
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
        Fleet Data     Delivery Data   Disruption Data
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                ┌───────────────────────┐
                │ Recommendation Engine │
                │ Utilisation + Capacity│
                │ + Disruption Context  │
                └───────────┬───────────┘
                            ▼
                ┌───────────────────────┐
                │ AI Recommendation /   │
                │ AI Assistant Response │
                └───────────────────────┘
```
