# EFX Header Parameters


EFX Header parameters listed in the table below are required to send as a JSON object in the request. 

Sample EFX Header JSON object:

```
{
  "EFXHeader": {
    "OrganizationId": "CTOrg",
    "TrnId": "622182",
    "VendorId": "112233",
    "Context": {
      "Channel": "WEB"
    }
    }
}

```



|Parameter | Description | Data Type | Required|
|---------|----------|---------|-----------|
|OrganizationId | Identification number of the organization. | string | Required |
| TrnId | Transaction identification number. <br> maxLength: 30| string | Optional|
| VendorId | Unique identification number provided by Fiserv to identify the vendor.| string| Optional |
| Context  | Details of the context object. | object  | Optional |
| Context.ClientAppName| Name of the client application making the service request, such as Architect, Commercial Center and others. | string| Optional|
|Context.NoConductorReason|No Conductor Reason. Used when a conductor cannot be identified. |String |Optional |
| Context.Channel|Channel name used by the client application. |string | Optional|
| Context.TrnIdent| Transaction identification number. | string| Optional|
| Context.ClientDateTime| Client date and time value in {yyyy-MM-ddTHH:mm:ss.SSS} format as reported by the client application that is making the service request. <br> example: 2021-01-31T23:59:59.999 |string | Optional|
| Context.ClientTerminalSeqNum| Used to allow the client terminal to set a unique identifier for the transaction. When used by a Network defined transaction the value of this identifier is typically set to narrow character of 12. <br> maxLength: 36|string | Optional|
| Context.OriginatorType| Type of the originator. This is usually a coded value representing the industry of the organization. |int64 | Optional|
| Context.TerminalIdent| Unique code to identify a terminal at the card acceptor location, such as terminal code or terminal number of ATM. <br> maxLength: 36 |string | Optional|
| Context.TerminalAddr1| Terminal Address 1. <br> maxLength: 64| string|Optional |
| Context.TerminalAddr2| Terminal Address 2. <br> maxLength: 64| string| Optional|
| Context.TerminalAddr3| Terminal Address 3. <br> maxLength: 64| string| Optional|
| Context.TerminalAddr4| Terminal Address 4. <br> maxLength: 64| string| Optional|
| Context.TerminalCity| Terminal city name. <br> maxLength: 32|string | Optional|
| Context.TerminalCounty|Terminal county name. <br> maxLength: 32 | string| Optional|
| Context.TerminalStateProv| State province value as per ISO 3166-2:US codes. <br> maxLength: 32| string|Optional |
| Context.TerminalPostalCode| Terminal postal code. <br> maxLength: 32| string| Optional|
| Context.TerminalCountryCodeSource|  Standard country code format.<br> Valid values are: <ul><li>ISO3166Numeric</li> <li>ISO3166Alpha3</li></ul>| string|Optional |
| Context.TerminalCountryCodeValue| Terminal country code value. <br> maxLength: 80| string|Optional |
| Context.PhoneType|  Type of a phone | string|Optional |
| Context.PhoneNum| Phone number.|string | Optional|
| Context.PhoneExchange| Phone exchange.|string |Optional |
| Context.TerminalOwnerName| Name of the owner or operator of the terminal.| string|Optional |
| Context.SystTraceAuditNum| Number assigned by the transaction originator to assist in identifying a transaction uniquely. <br>  maxLength: 36|string |Optional |
| Context.NetworkIdent|Network identifier is used to identify the interchange network for the transaction. <br> maxLength: 80| string| Optional|
| Context.NetworkRefIdent|Document reference supplied by the system retaining the original source document and used to assist in locating that document.  <br> maxLength: 36| string| Optional|
| Context.AcquirerIdent|Identifies the acquirer of the authorization or financial transaction.<br> maxLength: 36 | string| Optional|
| Context.AcquirerCountryCodeSource|Standard country code source value.<br> Valid values are: <ul><li>US</li> <li>IND</li></ul> | string| Optional|
| Context.AcquirerCountryCodeValue| Acquirer country code value.| string| Optional|
| Context.MerchNum|Merchant Number.  <br> maxLength: 23 | string| Optional|
| Context.SettlementDate| Transaction settlement date.| string| Optional|
| Context.SettlementIdent| Identification of the settlement account in which the transaction will be settled.| string| Optional|
| Context.BusinessApplIdent| Business application identification.| string| Optional|
| Context.BranchIdent| Branch identification number. <br> maxLength: 22| string|Optional |
| Context.TellerIdent| Teller identification number| string| Optional|
| Context.AMPMCode| AMPM code| string| Optional|
| Context.ReentryType| Reentry type <br> Valid values are: <ul><li>Manual</li><li>Auto</li></ul>| string| Optional|


## Jump To
Click the links below to refer the API documentation of respective services.

- [Add Card](../api/?type=post&path=/cards)
- [Delete Card](../api/?type=put&path=/cards/secured)
- [Get Card](../api/?type=post&path=/cards/secured)
- [Update Card](../api/?type=put&path=/cards)
- [Get Card Account Relationship](../api/?type=post&path=/cardAccounts/secured)
