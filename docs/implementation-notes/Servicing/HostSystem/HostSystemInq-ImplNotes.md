# Implementation Notes for HostSystem Inq
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field descriptions of below listed fields, please refer the API Explorer section of this API.


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`HostSystemSel`|||
|`HostSystemSel.SystemName`|InquirySystem<br>MaintenanceSystem<br>MemoPostSystem<br>AMS<br>All||
|`HostSystemSel`|||
|`HostSystemSel.SystemName`|InquirySystem<br>MaintenanceSystem<br>MemoPostSystem<br>AMS<br>All||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`HostSystemRec`|||
|`HostSystemRec.HostSystemKeys`|||
|`HostSystemRec.HostSystemKeys.HostSystemId`|||
|`HostSystemRec.HostSystemInfo`|||
|`HostSystemRec.HostSystemInfo.HostSystemData`|||
|`HostSystemRec.HostSystemInfo.HostSystemData.SystemName`|InquirySystem<br>MaintenanceSystem<br>MemoPostSystem<br>AMS<br>All|If all system statuses are requested and all systems in Premier are in Active status, ESF returns HostSystemData aggregate for each system and additional HostSystemData aggregate with "All" as the System Name.|
|`HostSystemRec.HostSystemInfo.HostSystemData.SystemStatus`|Active<br>Inactive||
|`HostSystemRec.HostSystemStatus`|||
|`HostSystemRec.HostSystemStatus.HostSystemStatusCode`|Valid||
|`HostSystemRec.HostSystemStatus.EffDt`|||
|`Status`|||
|`HostSystemRec`|||
|`HostSystemRec.HostSystemKeys`|||
|`HostSystemRec.HostSystemKeys.HostSystemId`|||
|`HostSystemRec.HostSystemInfo`|||
|`HostSystemRec.HostSystemInfo.HostSystemData`|||
|`HostSystemRec.HostSystemInfo.HostSystemData.SystemName`|InquirySystem<br>MaintenanceSystem<br>MemoPostSystem<br>AMS<br>All|If all system statuses are requested and all systems in Premier are in Active status, ESF returns HostSystemData aggregate for each system and additional HostSystemData aggregate with "All" as the System Name.|
|`HostSystemRec.HostSystemInfo.HostSystemData.SystemStatus`|Active<br>Inactive||
|`HostSystemRec.HostSystemStatus`|||
|`HostSystemRec.HostSystemStatus.HostSystemStatusCode`|Valid||
|`HostSystemRec.HostSystemStatus.EffDt`|||
<!-- type: tab-end -->
