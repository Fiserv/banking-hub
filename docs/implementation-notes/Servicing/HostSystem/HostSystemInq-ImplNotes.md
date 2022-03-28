# Implementation Notes for Host System Inquiry

This section provides the provider-specific request schema and implementation notes applicable for Host System Inquiry API.


<!--
type: tab
titles: Premier
-->

## Premier - Implementation Notes

 The following table lists the provider-specific fields and implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

<table cellspacing="0">            
<col  />
<col />
<col  />
<col  />
<tbody>
    <tr>
        <td>Field Name</td>
        <td>Core Usage</td>
        <td>Core Field length</td>
        <td>Implementation Note</td>
    </tr>
    <tr>
        <td><code>Status</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemSel</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemSel.SystemName</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemRec</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemRec.HostSystemKeys</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemRec.HostSystemKeys.HostSystemId</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemRec.HostSystemInfo</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemRec.HostSystemInfo.HostSystemData</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemRec.HostSystemInfo.HostSystemData.SystemName</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>If all system statuses are requested and all systems in Premier are in Active status, ESF returns HostSystemData aggregate for each system and additional HostSystemData aggregate with "All" as the System Name.</td>
    </tr>
    <tr>
        <td><code>HostSystemRec.HostSystemInfo.HostSystemData.SystemStatus</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemRec.HostSystemStatus</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemRec.HostSystemStatus.HostSystemStatusCode</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>HostSystemRec.HostSystemStatus.EffDt</code></td>
        <td>Default</td>
        <td>Defaut</td>
        <td>&#160;</td>
    </tr>
</tbody>
</table>

---     

<!-- type: tab-end -->