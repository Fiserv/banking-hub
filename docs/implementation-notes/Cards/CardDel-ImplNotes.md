# Implementation Notes for Del Card
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Signature, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`CardKeys`||  |
|`CardKeys.CardId`||  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`CardStatusRec`||  |
|`CardStatusRec.CardKeys`||  |
|`CardStatusRec.CardKeys.CardId`||Card account number reference to the card of 6-10 digit is returned in the response. PAN number of 16-digit is not available through the core interface due to PCI compliance restrictive norms hence, CardId returned in response should be used as key to call ESF CardInq operation to fetch the details of card.|
|`CardStatusRec.CardStatus`||  |
|`CardStatusRec.CardStatus.CardStatusCode`|Valid|  |
|`CardStatusRec.CardStatus.EffDt`||  |
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
