---
id: security-uptime-and-recovery-faq-35
title: "Security, Uptime, and Recovery FAQ"
slug: /kb/cegid/security-uptime-and-recovery-faq-35
description: "At Integrated Retail, we understand that your data is your most valuable asset. Our approach to Integrated Retail system security and retail ERP uptime is…"
---

At **Integrated Retail**, we understand that your data is your most valuable asset. Our approach to Integrated Retail system security and retail ERP uptime is built on proactive monitoring, multi-layered authentication, and robust business continuity features.

Below is an FAQ detailing how we ensure your store operations remain secure and resilient, even in the face of technical challenges.

# Integrated Retail: Security, Uptime, and Recovery FAQ

## How does Integrated Retail protect my sensitive business data?

We implement a multi-layered security strategy to ensure secure retail IT support. This includes:

- **Advanced Authentication:** User passwords are never stored in plain text; they use a secure "hash + salt" format that cannot be recovered from the database. For higher-security environments, we support staff identification via biometric fingerprints and magnetic stripe badges.

- **Granular Access Rights:** Using our Access Right Management (GDA) module, administrators can define exactly which menus and actions each user group can access, preventing unauthorized data modification.

- **Comprehensive Traceability:** Every significant action—from price changes to register openings—is recorded in a secure Event Log, providing a full audit trail for your peace of mind.

## What happens to my store operations if the internet goes down?

Ensuring maximum retail ERP uptime is our priority. If your store loses connection to the central server, Cegid Retail Y2 automatically prompts a switch to Standalone Mode.

- **Seamless Trading:** In Standalone Mode, your registers continue to process sales, identify customers, and even apply loyalty rewards using a local database.

- **Automated Recovery:** The system runs a background service that periodically tests for a restored connection. Once back online, our two-phase integration process ensures all offline receipts are synchronized with the central database without manual data entry.

## How do you monitor and prevent system slowdowns before they impact sales?

We use a specialized tool called CBR Network Control (CBRNC) to proactively manage performance. This independent program runs in the background and measures the exact response time for SQL queries between your store and the headquarters. By identifying network slowdowns or latency in real-time, we can address infrastructure issues before they escalate into downtime.

## What is your strategy for POS disaster recovery and data integrity?

Our POS disaster recovery strategy is centered on preserving data accuracy through:

- **Inventory Snapshots and Statements:** We preserve "duplicate" inventory records for specific dates. These snapshots serve as a reference point for audits and recovery, ensuring you always have a point-in-time record of your stock levels.

- **Automated Database Maintenance:** The Cegid Database Maintenance (CDM) tool performs regular checks on dictionaries and database structures to prevent data corruption.

- **Remote Connection Management:** In the event of a machine failure or a frozen session, administrators have the power to Reset Connections, safely disconnecting users and releasing locked registers to restore operations quickly.

## How does regular maintenance contribute to long-term stability?

A lean database is a fast database. We implement a proactive Data Purge and Archiving system that removes obsolete records and movement logs that are no longer needed for active management. By preventing database "clutter," we ensure that processing times remain rapid and that your retail ERP uptime stays at peak levels.

## Can I restrict data visibility so stores only see what they need?

Yes. To further enhance Integrated Retail system security, we utilize User Restrictions. This allows us to configure the system so that staff in a specific region or franchise can only view the inventory, sales, and customer data relevant to their authorized locations, protecting the privacy and security of your entire network.
