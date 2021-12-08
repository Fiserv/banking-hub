# Accountholder

Accountholder is an API domain that consists of APIs essential to maintaining financial institution accountholder data, including the relationships between customers and accounts.
 
Specific to Fiserv core account processing platforms, these APIs make it possible to add or delete parties from accounts and specify their relationships to those accounts such as owner, signer, beneficiary, trustee, custodian and so forth. Calls made using these APIs enable the creation, updating or retrieval of accountholder information. 

**Who is it for:** Developers creating or integrating apps that need to tap into information about the financial institution accountholders that resides on Fiserv core account processing platforms

**How is it used:** Employ these APIs to create or integrate applications that require the ability to define relationships between individual parties and accounts and determine which accounts an individual party can access

**Potential uses:** Apps that provide customized account access or consolidated views of accounts or family finance apps that help young people pursue their financial goals with oversight from trusted adults

Begin the integration with following services of Accountholder domian in API Explorer:
* [Address Service](../api/?type=post&path=/address)
* [Party Service](../api/?type=post&path=/parties)
* [Party Account Relationship Service](../api/?type=post&path=/partyacctrel/secured)
* [Party Parties Service](../api/?type=post&path=/partyparties/secured)


## See Also
- [Accounts and Transactions](?path=docs/fintechs/acct-and-transactions.md "Click to open")
- [Cards](?path=docs/fintechs/cards.md "Click to open")
- [Operations and Servicing](?path=docs/fintechs/servicing.md "Click to open")
- [Notifications and Preferences](?path=docs/fintechs/notifi.md "Click to open")
- [Payments](?path=docs/fintechs/payments.md "Click to open")
