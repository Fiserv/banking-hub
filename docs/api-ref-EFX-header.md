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
List of parameters that can be sent under the EFXHeader:
|Parameter | Description | Data Type | Required|
|---------|----------|---------|-----------|
|OrganizationId | Unique identification value to represent the financial institution or holding company. <br><br>*Example: 999990301* | string | Required |
| TrnId | Transaction UUID (Universal Unique Identifier) of the current message. This ID is usually used for tracking messages.<br><br> *maxLength: 36*| string | Optional|
| VendorId | Unique vendor identification number provided by Fiserv to identify the vendor.| string| Optional |
| Context  | Additional information related to the specific channels used by the client application. | object  | Optional |
| Context.ClientAppName| Name of the client application that is used to send the service request, such as Architect, Commercial Center and others.| string| Optional|
| Context.Channel|Name of channel used by the client application, such as, Internet, Mobile, and Teller. |string | Optional|
| Context.TrnIdent| Transaction identification number. | string| Optional|
| Context.ClientDateTime| Client date and time as reported by the client application while sending the service request. <br><br> *Format: yyyy-MM-ddTHH:mm:ss.SSS* <br> *Example: 2021-01-31T23:59:59.999* |string | Optional|
| Context.ClientTerminalSeqNum| Unique identification value of transaction defined by the client. Also known as TraceNumber or Sequence in some systems.When used by a Network defined transaction, the value of this identifier is typically set to narrow character of 12. <br><br> *maxLength: 36*|string | Optional|
| Context.OriginatorType| Type of the organization industry that the originator represents. It is a 4-digit SIC code.  <br> Valid values are: <br> <ul><li> 6010 (Financial institution - bank, savings and loan (S and L), or credit union)</li><li>6011 (Financial institution - ATM)</li> <li>6012 (Financial institution - merchandise sale)</li><li>6999 (Financial institution - home banking)</li></ul>|int64 | Optional|
| Context.TerminalIdent| Unique code to identify a terminal at the card acceptor location, such as terminal code or terminal number of ATM. For ISO 8583 (DE41) the element is restricted to a narrow character with maximum length of 8. <br><br> *maxLength: 36* |string | Optional|
| Context.TerminalAddr1| Terminal address 1. <br><br> *maxLength: 64*| string|Optional |
| Context.TerminalAddr2| Terminal address 2. <br><br> *maxLength: 64*| string| Optional|
| Context.TerminalAddr3| Terminal address 3. <br><br> *maxLength: 64*| string| Optional|
| Context.TerminalAddr4| Terminal address 4. <br><br> *maxLength: 64*| string| Optional|
| Context.TerminalCity| Terminal city name. <br><br> *maxLength: 32*|string | Optional|
| Context.TerminalCounty|Name of the city where the terminal is located. <br><br> *maxLength: 32* | string| Optional|
| Context.TerminalStateProv| State province value as per <a href="https://en.wikipedia.org/wiki/ISO_3166-2:US" title="Click to open in a new tab" target="_blank"> ISO 3166-2:US </a>codes where the terminal is located. | string|Optional |
| Context.TerminalPostalCode| Postal code of the location where the terminal is located. <br><br> *maxLength: 32*| string| Optional|
| Context.TerminalCountryCodeSource|  Standard country code format where the terminal is located.<br> Valid values are: <ul><li> <a href="https://en.wikipedia.org/wiki/ISO_3166-1_numeric" title="Click to open in a new tab" target="_blank"> ISO3166-Numeric</a> </li> <li>  <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3" title="Click to open in a new tab" target="_blank"> ISO3166-Alpha-3</a> </li></ul>| string|Optional |
| Context.TerminalCountryCodeValue| Country code value as per the ISO source code set in the *TerminalCountryCodeSource* field. <br><br>For example, if the country code format is set to ISO3166-Alpha-3, then the country code value for the United States would be USA. <br><br> *maxLength: 80*| string|Optional |
| Context.PhoneType|  Type of a phone | string|Optional |
| Context.PhoneNum| Phone number.|string | Optional|
| Context.PhoneExchange| Phone exchange.|string |Optional |
| Context.TerminalOwnerName| Name of the owner or operator of the terminal. <br>For ISO 8583 (DE43) the element is restricted to C-15. | string|Optional |
| Context.SystTraceAuditNum| Unique trace number assigned by the transaction originator to identify the transaction uniquely. The trace number remains unchanged for all messages throughout the life of a transaction. The originating processor increments the trace number by one for each transaction sent to the switch. <br> For ISO 8583 (DE11) the element is restricted to NC-6.<br><br>  *maxLength: 36*|string |Optional |
| Context.NetworkIdent|Network identifier is used to identify the interchange network for the transaction. <br> For ISO 8583 (DE62) the element is restricted to NC-6. <br><br> *maxLength: 80*| string| Optional|
| Context.NetworkRefIdent|Document reference supplied by the system retaining the original source document and used to assist in locating that document. The acquirer of a transaction assigns this number. The issuer processor must retain it in the event that a chargeback is submitted for the transaction. <br>For ISO 8583 (DE37) the element is restricted to C-12.<br><br> *maxLength: 36*| string| Optional|
| Context.AcquirerIdent|Identifier of the acquirer who processes the transaction. EPOC considers the acquirer as the terminal owner for reporting purposes.<br>For ISO 8583 (DE32) the element is restricted to C-12<br><br> *maxLength: 36* | string| Optional|
| Context.AcquirerCountryCodeSource|Standard country code format where the acquirer is located.<br> Valid values are: <ul><li> <a href="https://en.wikipedia.org/wiki/ISO_3166-1_numeric" title="Click to open in a new tab" target="_blank"> ISO3166-Numeric</a> </li> <li>  <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3" title="Click to open in a new tab" target="_blank"> ISO3166-Alpha-3</a> </li></ul> | string| Optional|
| Context.AcquirerCountryCodeValue| Country code value of Acquirer as per the ISO source code set in the *AcquirerCountryCodeSource* field. <br><br> For example, if the country code format is set to ISO3166-Alpha-3, then the country code value for the United States would be USA. | string| Optional|
| Context.MerchNum|Unique identification number of a merchant. <br>For ISO 8583 (DE42) the element is restricted to C-15 <br><br> *maxLength: 23* | string| Optional|
| Context.SettlementDate| Transaction settlement date. <br><br> *Format: mm:dd:yyyy* <br>*Example: 12:31:2021*| string| Optional|
| Context.SettlementIdent| Identification of the settlement account in which the transaction is to be settled.| string| Optional|
| Context.BusinessApplIdent| Identification of the business application. <br>Valid values are: <table><thead><td>Value</td>	<td>Description</td></thead><tbody><tr><td>P2P</td>	<td>Person-to-Person</td></tr><tr><td>C2B</td>	<td>Consumer-to-Business</td></tr>  <tr><td>A2A</td>	<td>Account-to-Account</td></tr>  <tr><td>B2C</td>	<td>Business-to-Consu er</td></tr>  <tr><td>B2B</td>	<td>Business-to-Business</td></tr>  <tr><td>G2C</td>	<td>Government-to-Consumer</td></tr>  <tr><td>C2G</td>	<td>Consumer-to-Government</td></tr></tbody></table>| string| Optional|
| Context.BranchIdent| Branch identification number. <br><br> *maxLength: 22*| string|Optional |
| Context.TellerIdent| Teller identification number.| string| Optional|
| Context.AMPMCode| Transaction Posting Code. <br> <table><thead><td>Value</td>	<td>Description</td></thead><tbody><tr><td>AM</td>	<td>Transactions are processed on the same day</td></tr><tr><td>PM</td>	<td>Transactions are memo posted on the posting day and permanently posted next business day.</td></tr> </tbody></table> | string| Optional|
| Context.ReentryType| Type of re-entry. <br> Valid values are: <ul><li>Manual</li><li>Auto</li></ul>| string| Optional|
