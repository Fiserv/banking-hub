# Transactions

Transactions is an API domain consisting of APIs that are specific to Fiserv core account processing platforms and enable users to retrieve information about transactions and balances related to accounts within a financial institution. 

These APIs can be used to access transaction data and balance information related to deposit, savings and loan accounts.

**Who is it for:** Any developer creating or integrating apps that need to interact with transaction data maintained on Fiserv core account processing platforms

**How is it used:** Employ these APIs to develop apps that offer unique experiences or novel channels through which users can view and manage transactions on those accounts

**Potential uses:** Apps that enable consumers and businesses to monitor and manage their financial transactions and balances through channels they access in everyday life

Begin the integration using the following services in the Transactions domain in API Explorer:
* [Account Hold Service](../api/?type=post&path=/acctholdservice/stophold/accountHolds)
* [Credit Service](../api/?type=post&path=/creditservice/payments/credits)
* [Debit Service](../api/?type=post&path=/debitservice/payments/debits)
* [Memo Tickler Service](../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler)
* [Stop Check Service](../api/?type=post&path=/stopchkservice/stophold/stopChecks)
* [Stop Item Service](../api/?type=post&path=/stopitemservice/stophold/stopitem)
* [Account Transaction Service](../api/?type=post&path=/accttrnservice/acctmgmt/acctTrn/secured)

## See Also
- [Accountholder](?path=docs/fintechs/accountholder.md "Click to open")
- [Accounts](?path=docs/fintechs/accounts.md "Click to open")
- [Debit Cards](?path=docs/fintechs/cards.md "Click to open")
- [Operations and Servicing](?path=docs/fintechs/servicing.md "Click to open")
- [Transfers](?path=docs/fintechs/transfers.md "Click to open")
