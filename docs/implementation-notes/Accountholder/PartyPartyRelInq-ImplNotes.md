# Implementation Notes for Get PartyPartyRel
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`PartyPartyRelSel`||  |
|`PartyPartyRelSel.PartyKeys`||This aggregate is used to list all the parties related to the selected party|
|`PartyPartyRelSel.PartyKeys.PartyId`||  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||  |
|`PartyPartyRelRec`||This aggregate may repeat multiple times based on the number of relationships that the party has with the other parties. |
|`PartyPartyRelRec.PartyPartyRelKeys`||  |
|`PartyPartyRelRec.PartyPartyRelKeys.PartyKeys`||  |
|`PartyPartyRelRec.PartyPartyRelKeys.PartyKeys.PartyId`||  |
|`PartyPartyRelRec.PartyPartyRelKeys.RelPartyKeys`||  |
|`PartyPartyRelRec.PartyPartyRelKeys.RelPartyKeys.PartyId`||  |
|`PartyPartyRelRec.PartyPartyRelInfo`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.PartyRef`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.PartyRef.PartyKeys`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.PartyRef.PartyKeys.PartyId`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.PartyRef.PersonPartyListInfo`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.PartyRef.PersonPartyListInfo.PersonName`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.PartyRef.PersonPartyListInfo.PersonName.NameType`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.PartyRef.PersonPartyListInfo.PersonName.FullName`||Name of person whose relationships are being requested.|
|`PartyPartyRelRec.PartyPartyRelInfo.PartyRef.OrgPartyListInfo`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.PartyRef.OrgPartyListInfo.OrgName`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.RelPartyRef.OrgPartyListInfo.OrgName.NameType`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.RelPartyRef.OrgPartyListInfo.OrgName.Name`||Name of organization whose relationships are being requested.|
|`PartyPartyRelRec.PartyPartyRelInfo.RelPartyRef`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.RelPartyRef.PartyKeys`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.RelPartyRef.PartyKeys.PartyId`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.RelPartyRef.PartyRelType`|Aunt<br>Brother<br>Companion<br>Daugther<br>Father<br>Friend<br>Granddaugther<br>Grandfather<br>Grandson<br>Husband<br>Mother<br>Nephew<br>Niece<br>Sister<br>Son<br>Uncle<br>Wife<br>Grandmother<br>None|Additional client-defined values can be added to the core Premier Administrartor Name Relationship Specifications.|
|`PartyPartyRelRec.PartyPartyRelInfo.RelPartyRef.PartyRelTypeEnumDesc`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.RelPartyRef.RelEstablishDt`||  |
|`PartyPartyRelRec.PartyPartyRelInfo.RelPartyRef.Name`||Displays the name of the party related to the requested party|
|`PartyPartyRelRec.PartyPartyRelStatus`||  |
|`PartyPartyRelRec.PartyPartyRelStatus.PartyPartyRelStatusCode`|Valid|  |
|`PartyPartyRelRec.PartyPartyRelStatus.EffDt`||  |
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
