---
id: disaster-recovery-plan-61
title: "Disaster Recovery Plan"
slug: /legal-policies/disaster-recovery-plan
description: "Since disasters happen so rarely, disaster recovery planning is easily deferred. Having a contingency plan in place gives Integrated Retail Pte Ltd a…"
---

Disaster Recovery Plan

Last update: 13 August 2026

 

 

## 1. Overview

Since disasters happen so rarely, disaster recovery planning is easily deferred. Having a contingency plan in place gives Integrated Retail Pte Ltd a competitive advantage, particularly with enterprise customers who require evidence of a documented recovery capability before awarding business.

Integrated Retail supplies, deploys and supports a range of IT solutions across Singapore, Malaysia, Thailand and Indonesia. Customers contract with the Company and look to the Company first when service is disrupted, regardless of whether the underlying cause lies with the Company, an upstream vendor, a customer site or a third-party carrier. The Company therefore maintains its own recovery capability rather than relying solely on the arrangements of the vendors whose products it supplies.

Disasters are not limited to adverse weather conditions. Any event that could cause an extended delay of service should be considered, including cyber incidents, loss of premises, carrier or hosted-platform outages, supply chain disruption, and loss of key personnel. This plan forms part of the Company's Business Continuity Plan, and operates alongside the disaster recovery requirements of the Company's principal vendors.

## 2. Purpose

This plan describes the process by which Integrated Retail Pte Ltd will recover the IT systems, applications, data and field service capability required to deliver and support its solutions following any type of disaster that causes a major outage.

The plan is deliberately solution-independent. It applies uniformly across the Company's portfolio, so that the addition or withdrawal of a solution does not require the plan to be rewritten.

## 3. Scope

This plan applies to all Integrated Retail employees, contractors and appointed in-country service partners involved in the sale, deployment or support of Company solutions. It covers Company IT systems and business applications, customer-facing services delivered by the Company, hardware and spare parts inventory, data held on behalf of customers, and Company premises.

The following are outside the scope of this plan:

- The internal recovery arrangements of vendors for platforms they host. These remain the vendor's responsibility; this plan defines the Company's escalation route and customer-facing response.

- Customer-owned infrastructure, including site networks, connectivity and electrical supply, except where the Company has contracted to manage it.

- Life safety and evacuation, which are governed by local emergency procedures and always take precedence over recovery activity.

Accountability for developing, testing and maintaining this plan sits with IT Management, who must ensure it is kept up to date. Country Managers are accountable for the accuracy of local arrangements.

## 4. Plan

### 4.1 Contingency Plans

The following contingency plans are maintained by Integrated Retail and apply to every solution in the portfolio:

- Computer Emergency Response Plan: Who is to be contacted, when and how, and what immediate actions must be taken. Any employee aware of a potential disaster reports it immediately to the Technical Services Manager. Only the DR Coordinator, or the Managing Director in their absence, may formally declare a disaster and activate this plan. Life safety is confirmed first; a suspected cyber incident is contained before recovery is attempted; and an incident log is opened and maintained throughout.

- Succession Plan: Every recovery role has a named primary and at least one named alternate. Authority passes automatically to the alternate if the primary cannot be contacted within 30 minutes. At least two people per country are trained to install and diagnose each solution the Company supports in that market, and administrative credentials are held in the Company password vault with break-glass access for more than one person.

- Data Study: Customer operational data, site and device configuration, licence and asset records, contracts and account data are recorded in the Company data inventory with their criticality and confidentiality classification. Personal data held by the Company as controller is limited to named user accounts and employee records. Personal data held on behalf of customers — which may include customer, loyalty, transaction and workforce records depending on the solution deployed — is classified as Restricted and recorded in the data inventory against the relevant customer environment. Any deployment capturing video, images or other sensitive data is separately registered and treated as high sensitivity.

- Criticality of Service List: Services are ranked in three tiers and recovered in the order set out in Section 4.2, in both short-term and long-term timeframes.

- Data Backup and Restoration Plan: All critical data is backed up daily to encrypted storage, with one copy held off-site in a separate location and one copy immutable or offline. Backups are retained for 12 months and a restoration test is performed quarterly. Where a solution buffers data locally on field devices during a loss of connectivity, any outage approaching half of that buffer window is escalated as critical.

- Equipment Replacement Plan: A regional spare pool is held in Malaysia, with a secondary store in Singapore and local buffer stock in Thailand and Indonesia. Replacement priority is field devices, then network and power equipment, then connectivity hardware, then server hardware, then engineer field kits. Equipment is sourced first from the spare pool, then from the vendor, then from approved local distributors. A pre-qualified customs broker is retained in each country.

- Mass Media Management: The Managing Director is the sole authorised spokesperson to media, and the Customer Communications Lead is the sole authorised channel to customers. No other employee or partner may comment on an incident, including on personal social media. Communications may confirm the services and regions affected, current status and the next update time. They must not disclose customer names, unremediated vulnerabilities, speculation as to cause, or any statement on liability.

### 4.2 Recovery Priorities

Services are recovered in the following order. Recovery Time Objective (RTO) is the maximum acceptable time to restore service; Recovery Point Objective (RPO) is the maximum acceptable data loss. Where a recovery objective depends on a vendor-hosted platform, the committed figure is that stated in the applicable vendor Service Level Agreement, and the Company's commitment to its customers is set out in the relevant customer contract.

Tier

Service Category

RTO

RPO

1

Data capture and processing at customer sites

4 hours

Nil where the solution buffers locally

1

Vendor-hosted customer platforms

Per vendor SLA

Per vendor SLA

1

Company-hosted or on-premise customer systems

8 hours

24 hours

1

Connectivity and data upload path, where Company-supplied

8 hours

Nil where the solution buffers locally

1

Customer helpdesk, ticketing and email

8 hours

4 hours

2

Remote support access, licence and asset records

24 hours

24 hours

2

CRM, contracts, spare parts and finance systems

48 hours

24 hours

3

Scheduling tools, website, HR and internal systems

5 working days

7 days

In the short term (0–24 hours) the Company confirms staff safety, contains the incident, verifies backup integrity, restores Tier 1 services and notifies affected customers. In the longer term (24 hours to 30 days) the Company restores Tier 2 and Tier 3 services, reconciles any data gap across the outage window, replaces damaged equipment, returns to normal production configuration and completes a post-incident review.

Once the plans above are in place, they must be practised to the extent possible. Management sets aside time to test implementation, so that weaknesses which would cause the plan to fail are found and corrected in conditions that carry few consequences. A tabletop exercise is held annually with the recovery team, using a different scenario and a different solution each year. A backup restoration test is performed quarterly and the result logged whether it passes or fails. Emergency contact details are verified quarterly, with a notification test twice yearly. Following any invocation of this plan, a post-incident review is completed within ten working days.

The plan, at a minimum, will be reviewed and updated on an annual basis, and also after any invocation, any change to the recovery team, any addition of a solution to the portfolio, and any material change to the countries of operation. Current copies are held online, in print at each country office, and on offline media, so that the plan remains available when Company systems are not.

## 5. Plan Compliance

### 5.1 Compliance Measurement

IT Management will verify compliance to this plan through various methods, including but not limited to business tool reports, evidence of completed test exercises, internal and external audits, and feedback to the plan owner. Evidence of testing is retained for a minimum of three years.

### 5.2 Exceptions

Any exception to this plan must be approved by IT Management in advance, recorded with a business justification and a compensating control, and re-approved at each annual review.

### 5.3 Non-Compliance

An employee found to have violated this plan may be subject to disciplinary action, up to and including termination of employment. Appointed partners found in violation may have their appointment suspended or terminated.

 
