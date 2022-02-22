# Implementation Notes
This section describes the service provider implementation notes applicable for the Update Account Hold API.

|Field Name   |Core Usage  |Core Field Length   |Implementation Note   | 
|---|---|---|---|
|AcctHoldKeys.AcctKeys.AcctId	|Required	|Default	| |
|AcctHoldKeys.AcctHoldIdent	|Required	|Default	||
|AcctHoldInfo.CurAmt.Amt	|Default	|Default	|This field is optional if the account is pledged as a collateral for a loan and the loan amount is specified. In such cases, Premier automatically calculates the hold amount. |
|AcctHoldInfo.EffDt	|Default	|Default	|Effective date can be current date or any date in the past, and it must be prior to the expiration date.|
|AcctHoldInfo.AcctHoldOption	|Default	|Default	|If loan or hold amount is specified, then set this value to FixedAmt. If account hold amount is not specified and the account is not used as collateral for the loan, then set this value to either AvailBal or LedgerBal. <br><br> AvailBal option is available only for Deposits and Savings account. <br><br> Please note that any invalid value sent in the request is ignored by Primer. However, the record will be updated per the other valid values sent in the request.|
|AcctHoldInfo.PendingHoldDt	|Default	|Default	| Pending hold date must be prior to the expiration date.|
