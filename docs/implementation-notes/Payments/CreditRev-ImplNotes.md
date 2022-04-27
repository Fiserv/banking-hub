# Implementation Notes for Reverse Credit
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Signature, Cleartouch, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Credit Keys. Used to identify the Credit record.`|||
|`Credit Identifier.`||This field is used to find the record to be deleted in the core. AcctTrnInq returns all existing pending transactions for an account.<br>Use the key returned from AcctTrnInq in the request method to find the pending transaction records that are to be deleted.|
|`Account Keys.`|||
|`Account Identifier.  Uniquely identifies an account held at a financial institution. `|||
|`Account Type.`|DDA<br>SDA<br>CDA<br>LOAN||
|`Credit Information. Details of the credit transaction. `|||
|`Credit Type. The type of credit transaction.`|Credit||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`This aggregate is used in all response messages to indicate the results of the message.`|||
|`Credit Status Record. Used in responses to return results from a add, reversal of the Object.`|||
|`Credit Keys. Used to identify the Credit record.`|||
|`Credit Identifier.`|||
|`Account Keys.`|||
|`Account Identifier.  Uniquely identifies an account held at a financial institution. `|||
|`Account Type.`|DDA<br>SDA<br>CDA<br>LOAN<br>||
|`Credit Status. Contains information of the current state of the object.`|||
|`Credit Status Code.`|Reversed||
|`Effective Date. The date that an associated action resulting in a change of state or status of an object took effect.`|||
|`Receipt. Transaction receipt.`|||
|`Account Balance. `|||
|`Balance Type.`|Avail<br>PrevLedger<br>PrevAvail<br>MemoLedger <br>|The balance types PrevLedger and PrevAvail are the current values on the core at the time of the request was went to the core.<br>MemoLeger and Avail reflect the new balance after applying the transaction.|
|`Currency Amount.`|||
|`Amount.`|||
|`Currency Code.`|||
|`Currency Code Type.`|ISO4217-Alpha||
|`Currency Code Value.`||Only USD is accepted as a currency code value.|
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
