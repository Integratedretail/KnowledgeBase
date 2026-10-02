---
id: change-management-policy-58
title: "Change Management Policy"
slug: /legal-policies/change-management-policy
description: "-   You get notice before anything changes. 5 working days for planned changes affecting your service, and at least 1 working day where a change is…"
---

Last update: 2 October 2026

----------

## At a glance

> -   **You get notice before anything changes.** 5 working days for planned changes affecting your service, and at least 1 working day where a
> change is time-constrained. Emergencies are notified as soon as
> practicable, and within 1 working day afterwards.
>     
> -   **We hold back changes during your trading peaks.** Across year-end, Chinese New Year, Hari Raya, Songkran, major sale events, and any
> period you tell us about, planned work waits. Emergency changes still
> proceed, and anything else only with senior approval on our side and
> your agreement.
>     
> -   **Changes are approved independently, tested, and recoverable.** A change is approved by someone other than the person who requested it,
> significant changes are tested in a representative environment first,
> and how we recover is agreed before approval rather than decided
> during the incident. Where a particular change can't meet one of
> these, it proceeds only as a recorded exception with closer monitoring
> — not by waiving the control.
>     
> -   **If a change fails, you hear it from us.** Not from your own operations. We recover, verify any affected data, and tell you what
> happened.
>     
> -   **An emergency means active harm** — an outage, a security exposure, data at risk. A deadline is not an emergency.
>     
> -   **Vendor releases are our problem too.** We monitor them, assess them against your configuration before they reach you, and escalate to the
> vendor when one breaks something. Where a release lands during a
> critical period and we can't defer it, we mitigate, tell you, and
> validate afterwards.

    
Detail on each point follows. The full internal Change Management Policy is available on request.

----------

Retail systems have to keep trading. Most service disruption comes not from attacks or hardware failure but from changes — an update applied without testing, a release during a busy period, a change nobody mentioned in advance.

This statement explains how Integrated Retail manages changes to the systems we host, manage or support for you. It applies across every solution in our portfolio.

It is a summary for customers. The full internal Change Management Policy is available on request.

----------

## What counts as a change

Any activity that alters the behaviour, configuration, availability, security or data of a system we support — software updates and releases, configuration adjustments, integration changes, database changes, infrastructure changes, access and security changes, and scheduled job changes.

Routine activity that doesn't alter any of those — running a report, investigating an issue, a normal transaction — isn't a change.

## Where changes come from

|Source|Example|
|--|--|
|We initiate it|Patching a server we host, upgrading an integration
|You request it|A new report, a changed business rule, an additional site
|A vendor pushes it|A platform release from the software or hardware vendor
|Something needs fixing|A corrective change following an incident

Each is handled under the same process, but we control them to different degrees. Vendor releases are covered separately below.

## How we assess a change

Before anything reaches your environment we assess it against six things: what stops working if it goes wrong, how many of your sites and users are affected, whether data is created or altered, whether security or access is affected, whether it can be reversed, and whether we have done it before in production.

That assessment sets the level of control — how it is approved, how it is tested, and how much notice you get. We assess the specific change, not the category it falls into: a configuration change isn't low risk just because it's a configuration change.

Higher-risk changes are approved by our management, and **a change is approved by someone other than the person who requested it**. Where team availability makes that impossible, the reason is recorded and reviewed.

## Notice you will receive

|Type of change|Notice|
|--|--|
|Planned change affecting your service|5 working days in advance
|Time-constrained change affecting your service|At least 1 working day in advance, where practicable
|Emergency change|As soon as practicable, and within 1 working day afterwards
|Change with no effect on your service or users|No notice needed

Every notification tells you the date, the expected impact, how long it will take, who to contact, and anything you need to do.

For significant changes to your production environment, **we ask for your written acknowledgement before proceeding**. Emergency changes are the exception — there, we act to protect the service first and tell you as soon as practicable afterwards.

## When changes happen

We schedule around how your service actually runs — outside trading hours for store systems, outside processing windows for batch services, and by agreement where a service runs continuously.

We also observe **business-critical periods**, during which planned work is held back. These typically include:

-   the year-end trading period
    
-   Chinese New Year
    
-   Ramadan and Hari Raya
    
-   Songkran
    
-   major regional sale events
    
-   any period you tell us about — a stocktake, a financial year-end, a store opening
    

Our country teams confirm these for each market at the start of the year. **Tell us your peak periods and we will schedule around them**.

During these periods, emergency changes still proceed. Anything else goes ahead only with senior approval on our side and your agreement. Vendor releases are the one category we cannot always hold back — see below.

## Testing and reversal

Significant changes are tested in a representative environment before they reach production. Where no such environment exists for a particular change, that is approved as a recorded exception on our side, with tighter recovery triggers and closer monitoring during implementation. It isn't simply skipped.

Before a change is approved, we record how it will be recovered if it fails. Depending on the change, that means reversing it, applying a corrective fix where reversal isn't possible, or containing the impact — decided in advance, not during the incident. For higher-risk changes we also record who can call the recovery and how long we will spend attempting it before switching to alternative restoration.

We also agree beforehand what "working" looks like, so success is measured against a standard set in advance rather than judged afterwards.

## If a change fails

-   We recover using the plan agreed before the change.
    
-   If your service is affected, we handle it as an incident alongside the recovery.
    
-   Where data may have become inconsistent, we verify it before returning the service to normal use.
    
-   **We tell you**. You should hear about a failure and its recovery from us, not from your own operations.
    
-   We don't re-attempt until we understand the failure and the corrective approach well enough to avoid an uncontrolled repeat, and the revised plan has been re-approved.
    

## Emergency changes

An emergency is active or developing harm — an outage, serious degradation, a security exposure, or data at risk. In those cases we act first and complete the full record within one working day.

**A deadline is not an emergency**. Neither is commercial pressure, late planning, or wanting to avoid a freeze period. Time-constrained work that isn't an emergency goes through a shortened route that still preserves assessment, approval and recovery planning.

## Vendor-initiated changes

For platforms hosted by a vendor, we don't control the release schedule — but we remain responsible for your experience of it. We:

-   monitor vendor release notes, advisories and end-of-life notices for every product we supply;
    
-   assess each release against your configuration and integrations before it reaches you, where notice allows;
    
-   pass on what's relevant, translated into what it means for your operation rather than forwarded raw;
    
-   treat a release that breaks your configuration as an incident, and escalate it to the vendor.
    

Where we can't defer or decline a vendor change, we tell you what we're doing about it rather than implying we approved it.

**This includes during your critical periods**. A freeze we observe does not bind a vendor, and a release may land in the middle of one. Where we cannot defer or decline it, we apply the available mitigation, notify you, and validate your environment afterwards.

## Changes you make yourself

Changes you make within your own administrative rights are yours to control and don't need our approval.

If such a change affects something we're accountable for — a supported integration, a configuration we maintain, a service level we've committed to — **please tell us beforehand**. We'd rather help you plan it than diagnose it afterwards.

## Changes affecting our agreement

If a change alters what we've contractually agreed — scope, service levels, recovery objectives, data location or pricing — it isn't done on a change record alone. It requires a contractual amendment agreed with you.

----------

## What we ask of you

-   Raise change requests through our helpdesk, so they're recorded rather than sitting in someone's inbox.
    
-   Tell us your business-critical periods and trading peaks.
    
-   Give us a named contact who can approve and acknowledge changes to your production environment.
    
-   Sign off changes made at your request where user acceptance applies.
    
-   Tell us before making your own changes that could affect something we support.
    

----------

## Contact

**Integrated Retail Pte Ltd** Email: connect@integratedretail.com

The full Change Management Policy, and our related security, data protection and continuity documentation, are available on request.
