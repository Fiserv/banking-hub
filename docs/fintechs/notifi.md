# Notifications and Preferences

Notifications and Preferences is a domain consisting of APIs that make it possible to access real-time event streams of data from Fiserv solutions, including Fiserv account processing platforms, in order to monitor for specific events and respond accordingly. The capabilities delivered by these APIs also enable end users to subscribe to particular alerts and specify their preferred channel for receiving alerts. 

Among the events and alerts that can be accessed through these APIs are online banking events, deposit and debit transactions, balances, account change and broadcast alerts. 

- An Events Hub aggregates events from various Fiserv solutions, and an Alerts Hub filters alerts for delivery in accordance with user preferences
- A true broadcast system streams data and events to multiple locations at the same time
- A dynamically updated cache of account data improves system performance versus hitting the core every time a request comes in for data

**Who is it for:** Developers creating or integrating apps that need to access real-time event data streams from Fiserv solutions, as well as customer preference subscription capabilities

**How is it used:** By leveraging these APIs, developers can deliver real-time actionable information to end users

**Potential uses:** Apps that employ Fiserv real-time event streaming capabilities to detect and stop potential fraud, or apps that enable identity management systems to stay in sync as users change their passwords or addresses


Begin the integration with following services of Notfications and Preferences domain in API Explorer:
* [Notifications Preferences Service](../api/?type=post&path=/openbanking/api/v{version}/users)


## See Also

- [Accountholder](?path=docs/fintechs/accountholder.md "Click to open")
- [Accounts and Transactions](?path=docs/fintechs/acct-and-transactions.md "Click to open")
- [Cards](?path=docs/fintechs/cards.md "Click to open")
- [Operations and Servicing](?path=docs/fintechs/servicing.md "Click to open")
- [Payments](?path=docs/fintechs/payments.md "Click to open")
