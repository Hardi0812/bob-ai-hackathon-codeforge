# SmartFleet AI — Project Documentation

## 1. Problem Statement
Supply-chain operations can be affected by road disruptions, traffic, vehicle breakdowns and inefficient fleet allocation. Logistics managers need fast visibility into vehicle utilisation and practical recommendations when disruptions occur.

## 2. Proposed Solution
SmartFleet AI is a web-based decision-support prototype. It combines fleet, delivery and disruption information to identify low-utilisation vehicles, affected deliveries and suitable reassignment options.

## 3. Main Workflow
1. Read fleet information.
2. Calculate vehicle utilisation.
3. Detect routes with disruptions.
4. Identify deliveries using affected routes.
5. Find available vehicles with sufficient remaining capacity.
6. Rank suitable vehicles.
7. Present a human-readable recommendation.

## 4. AI/Intelligence Component
The prototype contains a local recommendation engine. It evaluates availability, remaining capacity, utilisation and disruption context. An AI assistant provides natural-language answers for common logistics questions.

For a production version, the recommendation engine can be connected to an approved IBM BoB/LLM service and real-time logistics APIs.

## 5. Key Formula
Vehicle utilisation (%) = Current Load / Vehicle Capacity × 100

## 6. Example
V004 has 1000 kg capacity and 200 kg current load:
20% utilisation.

Delivery D003 requires 600 kg. V004 has 800 kg remaining capacity, so it can support the delivery. The system can recommend V004, subject to operational constraints.

## 7. Benefits
- Faster disruption response
- Better fleet visibility
- Improved utilisation
- Reduced manual decision effort
- Explainable recommendations

## 8. Limitations
This is a prototype using fictional sample data. It does not claim real-time GPS, traffic or production-level optimisation.

## 9. Future Scope
- Live GPS integration
- Real-time traffic/weather data
- Demand forecasting
- Predictive maintenance
- Multi-stop route optimisation
- Cost and fuel optimisation
- Integration with enterprise transport systems
