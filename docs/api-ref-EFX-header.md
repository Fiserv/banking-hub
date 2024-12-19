# EFX Header Parameters

EFX is a framework used for exchange of information between service-providers, clients and vendors.

EFXHeader is a mandatory parameter that needs to be sent in the request message of every API request to Banking Hub. Header parameters should be sent as a JSON object under the EFXHeader header parameter, refer the sample EFXHeader example below:

```
"EFXHeader": {
  "OrganizationId": "999990301",
  "TrnId": "f262cfa4-9da4-4a10-b48c-2e947ce3e66c",
  "VendorId": "112233",
  "Context": {
    "Channel": "WEB"
  }
}

```

> #### Note
>
> The following sample EFX header is applicable only for teller based service implementations:
> ```
> "EFXHeader": {
>   "OrganizationId": "999990301",
>   "TrnId": "f262cfa4-9da4-4a10-b48c-2e947ce3e66c",
>   "VendorId": "112233",
>   "Context": {
>     "Channel": "Teller",
>     "TellerTrnData": {
>       "BranchIdent": "129834765",
>       "TellerIdent": "112233",
>       "TillIdent": "87643",
>       "AMPMCode": "AM",
>       "ReentryType": "Auto"
>     }
>   }
> }
> ```

List of parameters that can be sent under the EFXHeader:
|Parameter | Description | Data Type | Required|
|---------|----------|---------|-----------|
|OrganizationId | Unique identifier to represent the financial institution or holding company. <br><b>Note:</b> ‘OrganizationId’ can be an alphanumeric value in combination of upper case (A-Z) or lower case (a-z) with digits (0-9). <br>For example, 999990308, 039095237SF and PrmOrg10 <br><br>*Max length: 30* | string | Required |
| TrnId | Transaction UUID (Universal Unique Identifier) of the current message. <br><b>Note:</b> ‘TrnId’ can be a free formatted value. <br>For example, 01333456782132, getParty-2024-03-22T03:14:31.811Z, 8824de2a-1bf1-4809-9b10-09324ad1279 <br><br>*Max length: 36*| string | Optional|
| VendorId | Fiserv provided unique vendor identification number. <br><b>Note:</b> ‘VendorId’ can be an alphanumeric value in combination of upper case (A-Z) or lower case (a-z) with digits (0-9). <br>For example, Fiserv, NCRCSP, 039095237SF <br><br>*Max length: 255*| string| Optional |
| MultiSystemInd | Feature enabled for Multi-System Service (MSS) used internally.| boolean | Optional |
| SvcNbr | For organizations processing the Multi-System Service  feature (MSS), this identifies the Service Provider (account processor).<br><br> *maxLength: 36* | string | Optional |
| Context  | Additional information related to the specific channels. | object  | Optional |
| Context.ClientAppName| Name of the client application that is used to send the service request, such as Architect, Commercial Center and others. <br><b>Note:</b> ‘Context.ClientAppName’ can be an alphanumeric value in combination of upper case (A-Z) or lower case (a-z) with digits (0-9), hyphen and underscore. <br>For example, App1, SecondApp_2, Fintech-App | string| Optional|
| Context.Channel|Name of channel used by the client application, such as, Online, Branch, Phone, EFT and Teller. <br><b>Note:</b> ‘Context.Channel’ can be an alphanumeric value in combination of upper case (A-Z) or lower case (a-z) with digits (0-9), hyphen and underscore. <br>For example, Channel-1, OtherChannel_2, Teller |string | Optional|
| Context.isOverridden|Value to indicate the sender has overridden the previous exception. |boolean | Optional|
| Context.TrnIdent| Client-defined unique identification value of the transaction.  <br>Also known as 'TraceNumber' or 'Sequence' in some systems. When used by a network defined transaction, the value of this identifier is typically set to narrow character of 12. | string | Optional|
| Context.ClientDateTime| Client date and time as reported by the client application while sending the service request. <br><br> *Format: YYYY-MM-DD* <br> *Example: 2022-12-31* |string | Optional|
| Context.ClientTerminalSeqNum| Sequence number of the client terminal. <br><br> *maxLength: 36*|string | Optional|
| Context.OriginatorType| Type of the organization industry that the originator represents. This is usually a coded value representing the industry that the organization operates in. It contains the SIC code. For ISO 8583 (DE18) the element is restricted to 4 narrow characters.   <br> Valid values are: <br> <ul><li> 6010 (Financial institution - bank, savings and loan (S and L), or credit union)</li><li>6011 (Financial institution - ATM)</li> <li>6012 (Financial institution - merchandise sale)</li><li>6999 (Financial institution - home banking)</li></ul>|int64 | Optional|
| Context.TerminalIdent| Unique code to identify a terminal at the card acceptor location, such as terminal code or terminal number of ATM. For ISO 8583 (DE41) the element is restricted to a narrow character with maximum length of 8. <br><br> *maxLength: 36* |string | Optional|
| Context.TerminalAddr1| Terminal address 1. <br><br> *maxLength: 64*| string|Optional |
| Context.TerminalAddr2| Terminal address 2. <br><br> *maxLength: 64*| string| Optional|
| Context.TerminalAddr3| Terminal address 3. <br><br> *maxLength: 64*| string| Optional|
| Context.TerminalAddr4| Terminal address 4. <br><br> *maxLength: 64*| string| Optional|
| Context.TerminalCity| Name of the city where the terminal is located. <br><br> *maxLength: 32*|string | Optional|
| Context.TerminalCounty|Name of the country where the terminal is located. <br><br> *maxLength: 32* | string| Optional|
| Context.TerminalStateProv| State province value as per <a href="https://en.wikipedia.org/wiki/ISO_3166-2:US" title="Click to open in a new tab" target="_blank"> ISO 3166-2:US </a>codes where the terminal is located. | string|Optional |
| Context.TerminalPostalCode| Postal code of the location where the terminal is located. <br><br> *maxLength: 32*| string| Optional|
| Context.TerminalCountryCodeSource|  Standard country code format where the terminal is located.<br> Valid values are: <ul><li> <a href="https://en.wikipedia.org/wiki/ISO_3166-1_numeric" title="Click to open in a new tab" target="_blank"> ISO3166-Numeric</a> </li> <li>  <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3" title="Click to open in a new tab" target="_blank"> ISO3166-Alpha-3</a> </li></ul>| string|Optional |
| Context.TerminalCountryCodeValue| Country code value as per the ISO source code set in the *TerminalCountryCodeSource* field. <br><br>For example, if the country code format is set to ISO3166-Alpha-3, then the country code value for the United States would be USA. <br><br> *maxLength: 80*| string|Optional |
| Context.PhoneType|  Type of a phone. <br> Valid values are: <br> <ul><li>EvePhone</li> <li>DayPhone</li> <li>EveFax</li> <li>DayFax</li> <li>Home</li> <li>Work</li> <li>Mobile</li> <li>Fax</li> <li>Pager</li> <li>Modem</li> <li>Other</li></ul> | string|Optional |
| Context.PhoneNum| Phone number.|string | Optional|
| Context.PhoneExchange| Phone exchange.|string |Optional |
| Context.TerminalOwnerName| Name of the owner or operator of the terminal. <br>For ISO 8583 (DE43) the element is restricted to 15 characters. | string|Optional |
| Context.SystTraceAuditNum| Unique trace number assigned by the transaction originator to identify the transaction. The trace number remains unchanged for all messages throughout the life of a transaction. The originating processor increments the trace number by one for each transaction sent to the switch. <br> For ISO 8583 (DE11) the element is restricted to 6 narrow characters.<br><br>  *maxLength: 36*|string |Optional |
| Context.NetworkIdent| Identifier of the interchange network for the transaction. The transaction is applied to the specified network settlement counts and balances. For ISO 8583 (DE62) the element is restricted to 6 narrow characters. <br><br> *maxLength: 80*| string| Optional|
| Context.NetworkRefIdent|Document reference supplied by the system retaining the original source document and used to assist in locating that document. The acquirer of a transaction assigns this number. The issuer processor must retain it in the event that a chargeback is submitted for the transaction. <br>For ISO 8583 (DE37) the element is restricted to 12 characters.<br><br> *maxLength: 36*| string| Optional|
| Context.AcquirerIdent| Identifier of the acquirer who processes the transaction. EPOC considers the acquirer as the terminal owner for reporting purposes.<br>For ISO 8583 (DE32) the element is restricted to 12 characters.<br><br> *maxLength: 36* | string| Optional|
| Context.AcquirerCountryCodeSource|Standard country code format where the acquirer is located.<br> Valid values are: <ul><li> <a href="https://en.wikipedia.org/wiki/ISO_3166-1_numeric" title="Click to open in a new tab" target="_blank"> ISO3166-Numeric</a> </li> <li>  <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3" title="Click to open in a new tab" target="_blank"> ISO3166-Alpha-3</a> </li></ul> | string| Optional|
| Context.AcquirerCountryCodeValue| Country code value of Acquirer as per the ISO source code set in the *AcquirerCountryCodeSource* field. <br><br> For example, if the country code format is set to ISO3166-Alpha-3, then the country code value for the United States would be USA. | string| Optional|
| Context.MerchNum|Unique identification number of a merchant. <br>For ISO 8583 (DE42) the element is restricted to 15 characters. <br><br> *maxLength: 23* | string| Optional|
| Context.SettlementDate| Date on which the transaction is settled. Used by ISO 8583 (DE63).<br><br> *Format: YYYY-MM-DD* <br>*Example: 2022-12-31*| string| Optional|
| Context.SettlementIdent| Identifier of the settlement account in which the transaction is to be settled.| string| Optional|
| Context.BusinessApplIdent| Identifier of the business application. <br>Valid values are: <table><thead><td>Value</td>	<td>Description</td></thead><tbody><tr><td>P2P</td>	<td>Person-to-Person</td></tr><tr><td>C2B</td>	<td>Consumer-to-Business</td></tr>  <tr><td>A2A</td>	<td>Account-to-Account</td></tr>  <tr><td>B2C</td>	<td>Business-to-Consumer</td></tr>  <tr><td>B2B</td>	<td>Business-to-Business</td></tr>  <tr><td>G2C</td>	<td>Government-to-Consumer</td></tr>  <tr><td>C2G</td>	<td>Consumer-to-Government</td></tr></tbody></table>| string| Optional|
| Context.BranchIdent| Identifier of the branch. <br><br> *maxLength: 22*| string|Optional |
| Context.TellerIdent| Identifier of the teller.| string| Optional|
| Context.TillIdent| Identifier of the till.| string| Optional|
| Context.AMPMCode| Transaction Posting Code. <br> Valid values are: <br> <ul><li>AM</li> <li>PM</li></ul>| string| Optional|
| Context.ReentryType| Type of re-entry. <br> Valid values are: <ul><li>Manual</li><li>Auto</li></ul>| string| Optional|
| Context.GroupIdent| Identifier of the group transactions.| string| Optional|
| Context.AdditionalSettings|Additional information required to successfully process the transaction. <br> <b>Note:</b> Required for Cleartouch services.| object| Optional|
| Context.TellerTrnData| Details of the teller transaction.| object| Optional|
| Context.TellerTrnData.BranchIdent| Identifier of the branch. <br> <b>Note:</b> Applicable only for teller based service implementations.| string| Optional|
| Context.TellerTrnData.TellerIdent| Identifier of the teller.| string| Optional|
| Context.TellerTrnData.TillIdent| Identifier of the till. <br> <b>Note:</b> Applicable only for teller based service implementations.| string| Optional|
| Context.TellerTrnData.AMPMCode| Transaction posting code. <br>Valid values are: <br> <ul><li>AM</li> <li>PM</li></ul><b>Note:</b> Applicable only for teller based service implementations. | string| Optional|
| Context.TellerTrnData.ReentryType| Type of re-entry. <br> Valid values are: <ul><li>Manual</li><li>Auto</li></ul><b>Note:</b> Applicable only for teller based service implementations.| string| Optional|
| Context.TellerTrnData.TrnConductorData| Details of the data element that identifies the transaction conductor at the teller line.| object| Optional Repeating|
| Context.TellerTrnData.TrnConductorData.TrnConductorIdent| Identifier of the person conducting the transaction.| string| Optional|
| Context.TellerTrnData.TrnConductorData.NoConductorReason| Reason used when a conductor cannot be identified.<br> Valid values are: <ul><li>ArmoredCarSvc</li> <li>MailDeposit</li> <li>NightDeposit</li> <li>ATM</li> <li>AggregatedTransaction</li> <li>CourierSvc</li></ul>| enum| Optional|
