# Implementation Notes for Host System Inquiry

This section provides the provider-specific request schema and implementation notes applicable for Host System Inquiry API.


<!--
type: tab
titles: Premier
-->

## Premier - Implementation Notes

 The following table lists the provider-specific fields and implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

 <table cellspacing="0">
    <col style="width : 126px;" />
    <col style="width : 57px;" />
    <col style="width : 85.5px;" />
    <col style="width : 108px;" />
    <tbody>
        <tr>
            <td>Field Name</td>
            <td>Core Usage</td>
            <td>Core Field length</td>
            <td>Implementation Note</td>
        </tr>
        <tr>
            <td>Status</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemSel</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemSel/SystemName</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemRec</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemRec/HostSystemKeys</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemRec/HostSystemKeys/HostSystemId</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemRec/HostSystemInfo</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemRec/HostSystemInfo/HostSystemData</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemRec/HostSystemInfo/HostSystemData/SystemName</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>If all system statuses are requested and all systems in Premier are in Active status, ESF returns HostSystemData aggregate for each system and additional HostSystemData aggregate with "All" as the System Name.</td>
        </tr>
        <tr>
            <td>HostSystemRec/HostSystemInfo/HostSystemData/SystemStatus</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemRec/HostSystemStatus</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemRec/HostSystemStatus/HostSystemStatusCode</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>HostSystemRec/HostSystemStatus/EffDt</td>
            <td>Default</td>
            <td>Defaut</td>
            <td>&#160;</td>
        </tr>
    </tbody>
</table>

---     

<!-- type: tab-end -->