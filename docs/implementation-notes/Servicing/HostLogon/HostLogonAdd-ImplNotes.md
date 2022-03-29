# Implementation Notes for Host Logon

This section provides the provider-specific request schema and implementation notes applicable for Host Logon Add API.


<!--
type: tab
titles: Premier
-->

## Premier - Implementation Notes

 The following table lists the provider-specific fields and implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

 <table cellspacing="0">
            <col  />
            <col />
            <col />
            <col />
            <tbody>
                <tr>
                    <td>Field Name</td>
                    <td>Core Usage</td>
                    <td>Core Field Length</td>
                    <td>Implementation Note</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRqHdr</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRqHdr.SecTokenLogin</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRqHdr.SecTokenLogin.LoginName</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>LoginName is the service provider defined user ID of the person logged into the system for which the credentials are requested. Typically, LoginName is a user name and not a numeric value.</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRqHdr.SecTokenLogin.SubjectPswd</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRqHdr.SecTokenLogin.SubjectPswd.CryptType</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRqHdr.SecTokenLogin.SubjectPswd.Pswd</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Password should be Base-64 Encoded.</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRqHdr.SecTokenLogin.SubjectPswd.CryptPswd</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRqHdr.SecTokenLogin.SubjectPswd.CryptPswd.BinLength</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRqHdr.SecTokenLogin.SubjectPswd.CryptPswd.BinData</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRsHdr</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRsHdr.SessKey</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>SessKey value is used in future communication with ESF for the same user.</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRsHdr.AuthCode</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRsHdr.UserCode</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRsHdr.UserName</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRsHdr.Assertion</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRsHdr.Assertion.AssertionType</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This field should be combined with the values for the AssertionValueInd and Operation fields to determine the proper authority level for the requested user.

Presently only a subset of the supported of assertion type by Precision are made available for integration.</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRsHdr.Assertion.AssertionValueInd</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This field should be used in addition with the AssertionType and Operation fields to  determine whether the requested user has the permission to perform the action.</td>
                </tr>
                <tr>
                    <td><code>HostCredentialsRsHdr.Assertion.Operation</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This field in combination with the AssertionType and AssertionValueInd fields depicts the action intitled to the request user.</td>
                </tr>
            </tbody>
        </table>

---

<!--
type: tab-end -->
