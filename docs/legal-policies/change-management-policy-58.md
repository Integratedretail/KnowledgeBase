---
id: change-management-policy-58
title: "Change Management Policy"
slug: /legal-policies/change-management-policy
description: "Most service disruptions are not caused by attacks or hardware failure. They are caused by changes — an update applied without testing, a configuration…"
---

Last update: 4 September 2026

----------

## 1. Overview

Most service disruptions are not caused by attacks or hardware failure. They are caused by changes — an update applied without testing, a configuration adjusted without approval, a patch released during trading hours, a change nobody told the customer about.

Integrated Retail Pte Ltd makes changes to systems that customers depend on to trade. A change that goes wrong in a point-of-sale platform stops a store selling. Change management is how the Company ensures that changes are assessed, approved, tested, communicated and reversible before they reach a production environment.

This policy expands on section 4.11 of the Company's Security Policy and applies uniformly across every solution in the portfolio.

## 2. Purpose

To ensure that every change to a Company or customer production environment is:

-   **requested and recorded**, so there is a single account of what changed and when;
    
-   **assessed** for its risk, impact and dependencies;
    
-   **approved** at a level proportionate to that risk;
    
-   **tested** where practicable, and **reversible** if it fails;
    
-   **communicated** to those affected before it happens.
    

## 3. Scope

This policy applies to all Integrated Retail employees, contractors and appointed in-country service partners, and to all changes affecting:

-   Company IT systems and business applications;
    
-   customer environments the Company hosts, manages or supports;
    
-   configuration of deployed software, hardware and field devices;
    
-   integrations between a Company-supported solution and another system;
    
-   the Company's own software products.
    

Outside the scope of this policy:

-   **Changes made by a vendor within its own hosted platform**. These are the vendor's to control; section 5.9 sets out how the Company handles them.
    
-   **Changes the customer makes within their own administrative rights** — user accounts, report configuration, business parameters.
    
-   **Changes to customer-owned infrastructure**, except where the Company has contracted to manage it.
    

Accountability for this policy sits with IT Management.

  

## 4. Roles and Responsibilities

The Company is deliberately not operating a formal Change Advisory Board. At its size, a lightweight process that people actually follow is worth more than a committee that meets monthly.

|Role|Responsibility
|--|--|
|Requester|Anyone proposing a change. Raises the request with enough detail to be assessed.
|Technical Services Manager|Assesses risk and impact, classifies the change, and coordinates scheduling and testing.
|IT Management|Approves Major changes, owns this policy, and reviews the change record.
|Managing Director|Approves changes with contractual, financial or reputational consequence, and authorises emergency changes outside normal hours.
|Data Protection Officer|Assesses any change affecting personal data — what is collected, where it is stored, who can access it, or how long it is kept.
|Country Managers|Confirm local impact, customer notification and freeze periods in their market.
|Implementer|Carries out the change as approved, and no more than was approved.

No single person may approve and implement their own Major change.

  

## 5. Policy

### 5.1 Where Changes Come From

|Source|Example|Who controls it
|--|--|--|
|Company-initiated|Patching a server we host, adjusting a configuration, upgrading an integration|Integrated Retail, under this policy
|Customer-requested|New report, changed business rule, additional site or device|Integrated Retail, on the customer's written instruction
|Vendor-initiated|A platform release or forced update pushed by the software or hardware vendor|The vendor — see section 5.9
|Company-developed product|A release of one of the Company's own software products|Integrated Retail, under this policy and section 5.10
|Corrective|A fix following an incident or fault|Integrated Retail, often as an Emergency change

### 5.2 Change Classification

Every change is classified before it proceeds. The classification determines the approval needed, the testing expected and the notice given.

|Class|Description|Approval|Customer notice
|--|--|--|--|
|Standard|Routine, low-risk, well-understood, performed repeatedly with a known method — adding a user, a routine patch, a device swap|Pre-approved; recorded but not individually approved|Not required unless service-affecting
|Minor|Low impact, affects one system or site, easily reversed|Technical Services Manager|Where the customer is affected
|Major|Affects a production environment, multiple sites, an integration, personal data, or carries meaningful risk of disruption|IT Management|Required, in advance
|Emergency|Needed immediately to restore service or close a security exposure|See section 5.8|As soon as practicable

Where there is doubt about the class, the change is treated as the higher one.

### 5.3 The Change Process

1.  **Request** — recorded in the Company's ticketing or change record, stating what is changing, why, which systems and customers are affected, and the proposed timing.
    
2.  **Assess** — risk and impact are evaluated: what depends on this system, what happens if the change fails, whether personal data is affected, whether a contract or service commitment is touched.
    
3.  **Classify** — per section 5.2.
    
4.  **Approve** — at the level in section 5.2. Approval is recorded before work begins.
    
5.  **Plan** — including the rollback position (section 5.5) and the change window (section 5.7).
    
6.  **Test** — where a representative environment exists.
    
7.  **Notify** — those affected, per section 5.6.
    
8.  **Implement** — as approved, by the assigned implementer.
    
9.  **Verify** — confirm the change worked and the service is functioning. Take a configuration snapshot.
    
10.  **Record** — close the change with the outcome, including whether it succeeded, partially succeeded or was rolled back.

A change that skips assessment or approval is a policy violation regardless of whether it worked.

### 5.4 Changes Affecting Personal Data

Any change that alters what personal data a solution collects, where it is stored, who can access it, or how long it is retained is referred to the Data Protection Officer before approval.

This includes changes to a device's privacy mode, enabling an optional data-collecting feature, altering a retention setting, or moving data to a new hosting location. Where the change affects a customer's environment, we ask the customer to confirm they have a lawful basis and appropriate notices in place, as set out in the GDPR and PDPA Compliance Statements.

### 5.5 Testing and Rollback

-   Changes are tested in a controlled, representative environment before reaching production, wherever such an environment exists.
    
-   Where no test environment is feasible, this is recorded, and the change is implemented with a shortened rollback trigger and closer monitoring.
    
-   Every Major change has a documented rollback position identified before implementation — what will be reverted, how, by whom, and how long it will take.
    
-   A configuration snapshot is taken before and after the change, so the previous state can be restored.
    
-   If the change does not produce the expected result, it is rolled back rather than fixed forward under time pressure, unless rolling back would cause greater harm.
    

### 5.6 Customer Notification

-   Customers are notified in advance of any change that may affect their service, with the date, the expected impact, the duration, and who to contact.
    
-   Notice is given at least **5 working days** ahead for Major changes, and sooner where practicable for Minor ones.
    
-   Where a change alters how a customer uses the system, notification includes what they need to do.
    
-   Customer-facing communication follows the authorised channel set out in the Disaster Recovery Plan; individual employees and partners do not announce changes independently.
    
-   The customer's written acknowledgement is obtained for changes affecting a production environment.
    

### 5.7 Change Windows and Freeze Periods

Retail is seasonal, and our customers cannot absorb disruption during their busiest trading periods.

-   Changes to production environments are scheduled outside trading hours in the local time zone, unless the customer agrees otherwise.
    
-   The Company observes change freeze periods during peak retail trading, during which only Emergency changes proceed. These typically include:
    

-   the year-end and New Year trading period;
    
-   Chinese New Year;
    
-   Ramadan and Hari Raya;
    
-   Songkran;
    
-   major regional sale events;
    
-   any period a customer has notified as a freeze, such as a stocktake or financial year-end.
    

-   Freeze periods are confirmed by Country Managers for each market at the start of each year and communicated to customers.
    
-   A change during a freeze requires Managing Director approval and the customer's agreement.

    

### 5.8 Emergency Changes

An Emergency change is one where waiting for normal approval would cause greater harm than proceeding — a service outage, a security exposure, or data at risk.

-   The change may be implemented on the verbal approval of IT Management or the Managing Director.
    
-   **The normal record is completed within one working day**, retrospectively, with the same detail as any other change including the justification for treating it as an emergency.
    
-   IT Management reviews all Emergency changes at least monthly. A pattern of emergencies usually indicates a planning or capacity problem rather than genuine urgency.
    
-   Where the emergency arose from an incident, the change forms part of the post-incident review under the Security Policy.
    

### 5.9 Vendor-Initiated Changes

For platforms hosted by a vendor, the Company does not control the release schedule. It remains responsible for the customer experience of those releases.

-   We monitor vendor release notes, advisories and end-of-life notices for every product in the portfolio.
    
-   We assess each vendor release for its impact on our customers' configurations and integrations before it reaches them, where the vendor gives sufficient notice.
    
-   We pass on relevant vendor notifications to affected customers, translated into what it means for their operation rather than forwarded raw.
    
-   Where a vendor release breaks a customer's configuration or integration, we treat it as an incident and escalate to the vendor.
    
-   Where a vendor offers a choice of release timing, we schedule it in line with section 5.7.
    

### 5.10 Version Control and Releases of Company-Developed Products

For software the Company develops itself:

-   All source code is held under version control, with changes attributable to an individual.
    
-   Development, test and production environments are kept separate. Production data is not used for development or testing unless anonymised.
    
-   Code changes are reviewed and approved by someone other than the author before release.
    
-   Releases are versioned, and the version deployed to each customer is recorded.
    
-   Release notes are produced for every release and made available to affected customers.
    
-   Superseded versions are retained long enough to support rollback, in line with the Data Retention Policy.
    

### 5.11 Records and Post-Implementation Review

-   All change requests are recorded, whether approved, rejected or withdrawn, in a single central record.
    
-   The record includes the request, the assessment, the approval, the implementation, the outcome, and any rollback.
    
-   System and configuration documentation is updated on completion of each change. Superseded documentation is archived or disposed of under the Data Retention Policy.
    
-   **A failed or rolled-back change is reviewed** to establish why, and the finding is applied to the next similar change.
    
-   IT Management reviews the change record at least quarterly, looking at failure rate, emergency rate and whether classifications were applied sensibly.
    

### 5.12 Changes Affecting Agreements

Where a change alters what has been contractually agreed — scope, service levels, recovery objectives, data location, or pricing — it is not implemented on a change record alone. It requires a contractual amendment agreed with the customer, approved by the Managing Director.

  

## 6. Customer Responsibilities

Customers are responsible for:

-   raising change requests through the Company helpdesk rather than directly with individual staff, so the request is recorded;
    
-   telling us their freeze periods and trading peaks, so we can schedule around them;
    
-   providing a named contact to approve changes affecting their production environment;
    
-   testing and signing off changes made at their request, where user acceptance is needed;
    
-   controlling changes they make within their own administrative rights, and telling us where those changes may affect a Company-supported integration.
    

  

## 7. Policy Compliance

### 7.1 Compliance Measurement

IT Management verifies compliance through review of the change record, comparison of implemented changes against approvals, incident root-cause analysis, and internal and external audits. Records are retained in line with the Data Retention Policy.

### 7.2 Exceptions

Any exception to this policy must be approved by IT Management in advance, recorded with a business justification and a compensating control, and re-approved at each annual review. Emergency changes under section 5.8 follow that section and are not exceptions.

### 7.3 Non-Compliance

An employee found to have violated this policy — including by implementing an unapproved change to a production environment — may be subject to disciplinary action, up to and including termination of employment. Appointed partners found in violation may have their appointment suspended or terminated.

  

## 8. Review

This policy is reviewed and updated at least annually, and also after any change that caused a significant service disruption, any material change to the portfolio, and any change to the Company's development or hosting arrangements.

  

## 9. Contact

Questions about this policy, or about a change affecting a specific deployment, may be directed to:

**Integrated Retail Pte Ltd** Email: connect@integratedretail.co
