# Response Codes

Every API request to Banking Hub server returns a standard HTTP status code along with the EFX status code in the response message.

## HTTP Status Codes

HTTP status code indicates the result of an API call. 

For every successful or unsuccessful API call, one of the following HTTP Status Code is returned in the response message:

| HTTP Status Code          | Description   |
|-------------------|-----------|
| `200  OK `      | Successful request   |
| `201  Created `     | Successfully created a new resource     |
| `400  Bad request `     | Server is unable to process the request due to invalid syntax     |
| `401  Unauthorized` | Invalid authentication credentials  |
| `403  Forbidden` | Forbidden to access the valid URL  |
| `404  Not found` | Server unable to find the requested resource  |
| `405  Method not allowed` | Method not allowed  |
| `422  Un-processable Entity`  | Server is unable to process the request due to semantic errors |
| `500  Internal Server Error ` | Server encountered an unexpected error while processing the request  |
| `503  Service Unavailable  `        | Service is temporarily unavailable due to overload or maintenance activity    |

## EFX Status Codes
EFX status codes are the service-specific status codes and provide additional information to the returned HTTP status or error code. 

The following table lists the EFX status codes and their descriptions related to the HTTP status codes:

<html>
  <table style="width: 100%;">
            <thead>
                <tr>
                    <th> HTTP Status Code </th>
                    <th> EFX Status Code </th>
                    <th> EFX Severity</th>
                    <th> EFX Status Description</t>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="background-color: #fff;" rowspan="12"><code>200 OK</code></td>
                    <td><code>0</code></td>
                    <td>Info</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td><code>50</code></td>
                    <td>Error</td>
                    <td>General warning</td>
                </tr>
                <tr>
                    <td><code>992</code></td>
                    <td>Info</td>
                    <td>Partial success</td>
                </tr>
                <tr>
                    <td><code>1040</code></td>
                    <td>Warning</td>
                    <td>Request declined</td>
                </tr>
                <tr>
                    <td><code>1080</code></td>
                    <td>Warning</td>
                    <td>Unchanged</td>
                </tr>
                <tr>
                    <td><code>1090</code></td>
                    <td>Warning</td>
                    <td>Invalid Value</td>
                </tr>
                <tr>
                    <td><code>1100</code></td>
                    <td>Warning</td>
                    <td>Too many records request</td>
                </tr>
                <tr>
                    <td><code>1120</code></td>
                    <td>Info</td>
                    <td>No records match the selection criteria</td>
                </tr>
                <tr>
                    <td><code>1121</code></td>
                    <td>Info</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td><code>1140</code></td>
                    <td>Warning</td>
                    <td>Details not available</td>
                </tr>
                <tr>
                    <td><code>1240</code></td>
                    <td>Warning</td>
                    <td>Details not available</td>
                </tr>
                <tr>
                    <td><code>1786</code></td>
                    <td>Warning</td>
                    <td>Account type not found</td>
                </tr>
                <tr>
                    <td style="background-color: #fff;" rowspan="2"><code>201 Created</code></td>
                    <td><code>0</code></td>
                    <td>Info</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td><code>50</code></td>
                    <td>Warning</td>
                    <td>General warning</td>
                </tr>
                <tr>
                    <td rowspan="10" style="background-color: #fff;" ><code>400 Bad request</code></td>
                    <td><code>1020</code></td> 
                    <td>Error</td>
                    <td>Required element not included</td>
                </tr>
                <tr>
                    <td><code>1050</code></td>
                    <td>Error</td>
                    <td>Invalid value</td>
                </tr>
                <tr>
                    <td><code>1070</code></td>
                    <td>Error</td>
                    <td>Invalid format</td>
                </tr>
                <tr>
                    <td><code>1080</code></td>
                    <td>Error</td>
                    <td>Invalid length</td>
                </tr>
                <tr>
                    <td><code>1090</code></td>
                    <td>Error</td>
                    <td>Invalid value</td>
                </tr>
                <tr>
                    <td><code>1120</code></td>
                    <td>Error</td>
                    <td>No records found</td>
                </tr>
                <tr>
                    <td><code>1121</code></td>
                    <td>Error</td>
                    <td>No records found</td>
                </tr>
                <tr>
                    <td><code>1160</code></td>
                    <td>Error</td>
                    <td>Selection criteria not supported</td>
                </tr>
                <tr>
                    <td><code>2120</code></td>
                    <td>Error</td>
                    <td>Invalid date-time range</td>
                </tr>
                <tr>
                    <td><code>2150</code></td>
                    <td>Error</td>
                    <td>Date-time value is greater than the accepted limit</td>
                </tr>
                <tr>
                    <td rowspan="8" style="background-color: #fff;"><code>401 Unauthorized</code></td>
                    <td><code>1700</code></td>
                    <td>Error</td>
                    <td>Security violation</td>
                </tr>
                <tr>
                    <td><code>1740</code></td>
                    <td>Error</td>
                    <td>Authentication failed</td>
                </tr>
                <tr>
                    <td><code>1760</code></td>
                    <td>Error</td>
                    <td>Authentication failed</td>
                </tr>
                <tr>
                    <td><code>1910</code></td>
                    <td>Error</td>
                    <td>Password expired</td>
                </tr>
                <tr>
                    <td><code>1970</code></td>
                    <td>Error</td>
                    <td>General data error</td>
                </tr>
                 <tr>
                    <td><code>2380</code></td>
                    <td>Error</td>
                    <td>Unauthorized account</td>
                </tr>
                 <tr>
                    <td><code>2395</code></td>
                    <td>Error</td>
                    <td>Party not permitted to perform the action</td>
                </tr>
                <tr>
                    <td><code>3700</code></td>
                    <td>Error</td>
                    <td>Invalid object type</td>
                </tr>
                <tr>
                    <td rowspan="1" style="background-color: #fff;" ><code>403 Forbidden</code></td>
                    <td><code>2360</code></td>
                    <td>Error</td>
                    <td>Restricted access</td>
                </tr>
                <tr>
                    <td rowspan="4" style="background-color: #fff;" ><code>404 Not found</code></td>
                    <td><code>1120</code></td>
                    <td>Info</td>
                    <td>No records found</td>
                </tr>
                <tr>
                    <td><code>1121</code></td>
                    <td>Error</td>
                    <td>No records found</td>
                </tr>
                <tr>
                    <td><code>1420</code></td>
                    <td>Error</td>
                    <td>Invalid customer identifier</td>
                </tr>
                <tr>
                    <td><code>1421</code></td>
                    <td>Error</td>
                    <td>Invalid party reference</td>
                </tr>
                <tr>
                    <td rowspan="4" style="background-color: #fff;" ><code>405 Method not allowed</code></td>
                    <td><code>400</code></td>
                    <td>Error</td>
                    <td>Function not available</td>
                </tr>
                <tr>
                    <td><code>600</code></td>
                    <td>Warning</td>
                    <td>Authentication error</td>
                </tr>
                <tr>
                    <td><code>700</code></td>
                    <td>Error</td>
                    <td>Function not supported</td>
                </tr>
                <tr>
                    <td><code>995</code></td>
                    <td>Error</td>
                    <td>Provider implementation not supported</td>
                </tr>
                <tr>
                    <td rowspan="62" style="background-color: #fff;" ><code>422 Un-processable Entity</code></td>
                    <td><code>1</code></td>
                    <td>Error</td>
                    <td>Invalid field size</td>
                </tr>
                <tr>
                    <td><code>10</code></td>
                    <td>Error</td>
                    <td>Additional action needed</td>
                </tr>
                <tr>
                    <td><code>50</code></td>
                    <td>Warning</td>
                    <td>General warning</td>
                </tr>
                <tr>
                    <td><code>100</code></td>
                    <td>Error</td>
                    <td>General Application issue</td>
                </tr>
                <tr>
                    <td><code>200</code></td>
                    <td>Error</td>
                    <td>General data error</td>
                </tr>
                <tr>
                    <td><code>201</code></td>
                    <td>Error</td>
                    <td>Internal system error</td>
                </tr>
                <tr>
                    <td><code>810</code></td>
                    <td>Error</td>
                    <td>Message irreversable</td>
                </tr>
                <tr>
                    <td><code>999</code></td>
                    <td>Error</td>
                    <td>General error</td>
                </tr>
                <tr>
                    <td><code>1000</code></td>
                    <td>Error</td>
                    <td>Duplicate request</td>
                </tr>
                <tr>
                    <td><code>1020</code></td>
                    <td>Error</td>
                    <td>Required Element Not Included</td>
                </tr>
                <tr>
                    <td><code>1030</code></td>
                    <td>Error</td>
                    <td>Value out of range</td>
                </tr>
                <tr>
                    <td><code>1045</code></td>
                    <td>Error</td>
                    <td>Request denied</td>
                </tr>
                <tr>
                    <td><code>1060</code></td>
                    <td>Error</td>
                    <td>Cannot modify element</td>
                </tr>
                <tr>
                    <td><code>1070</code></td>
                    <td>Error</td>
                    <td>Invalid Format</td>
                </tr>
                <tr>
                    <td><code>1080<code></td>
                    <td>Error</td>
                    <td>Invalid field size</td>
                </tr>
                <tr>
                    <td><code>1121</code></td>
                    <td>Error</td>
                    <td>No records found</td>
                </tr>
                <tr>
                    <td><code>1220</code></td>
                    <td>Error</td>
                    <td>Invalid identifier</td>
                </tr>
                <tr>
                    <td><code>1300</code></td>
                    <td>Error</td>
                    <td>Value out of range</td>
                </tr>
                <tr>
                    <td><code>1421</code></td>
                    <td>Error</td>
                    <td>Invalid party reference</td>
                </tr>
                <tr>
                    <td><code>1500</code></td>
                    <td>Error</td>
                    <td>Invalid address</td>
                </tr>
                <tr>
                    <td><code>1724</code></td>
                    <td>Error</td>
                    <td>Missing acknowledgment of exception</td>
                </tr>
                <tr>
                    <td><code>1726</code></td>
                    <td>Error</td>
                    <td>Error occurred due to included override exceptions in the <code>AdditionalStatus</code> field</td>
                </tr>
                <tr>
                    <td><code>1820</code></td>
                    <td>Error</td>
                    <td>Customer session already in progress</td>
                </tr>
                <tr>
                    <td><code>2011</code></td>
                    <td>Error</td>
                    <td>General application issue</td>
                </tr>
                <tr>
                    <td><code>2020</code></td>
                    <td>Error</td>
                    <td>Amount too small</td>
                </tr>
                <tr>
                    <td><code>2030</code></td>
                    <td>Error</td>
                    <td>Amount too large</td>
                </tr>
                <tr>
                    <td><code>2050</code></td>
                    <td>Error</td>
                    <td>Invalid amount value</td>
                </tr>
                <tr>
                    <td><code>2080</code></td>
                    <td>Error</td>
                    <td>Final amount limit exceeded</td>
                </tr>
                <tr>
                    <td><code>2120</code></td>
                    <td>Error</td>
                    <td>Invalid date-time range</td>
                </tr>
                <tr>
                    <td><code>2130</code></td>
                    <td>Error</td>
                    <td>Date expired</td>
                </tr>
                <tr>
                    <td><code>2140</code></td>
                    <td>Error</td>
                    <td>Date-time value is less than the accepted limit</td>
                </tr>
                <tr>
                    <td><code>2150</code></td>
                    <td>Error</td>
                    <td>Date-time value is greater than the accepted limit</td>
                </tr>
                <tr>
                    <td><code>2180</code></td>
                    <td>Error</td>
                    <td>Request is too late to process the ACH transaction for the current day</td>
                </tr>
                <tr>
                    <td><code>2320</code></td>
                    <td>Error</td>
                    <td>Account not for party</td>
                </tr>
                <tr>
                    <td><code>2350</code></td>
                    <td>Error</td>
                    <td>Account closed</td>
                </tr>
                <tr>
                    <td><code>2360</code></td>
                    <td>Error</td>
                    <td>Restricted access</td>
                </tr>
                <tr>
                    <td><code>2365</code></td>
                    <td>Error</td>
                    <td>Request denied due to Account Status</td>
                </tr>
                <tr>
                    <td><code>2380</code></td>
                    <td>Error</td>
                    <td>Unauthorized account</td>
                </tr>
                <tr>
                    <td><code>2395</code></td>
                    <td>Error</td>
                    <td>Restricted to perform request on account</td>
                </tr>
                <tr>
                    <td><code>2400</code></td>
                    <td>Error</td>
                    <td>Account not available</td>
                </tr>
                <tr>
                    <td><code>2421</code></td>
                    <td>Error</td>
                    <td>Account not eligible for the transaction</td>
                </tr>
                <tr>
                    <td><code>2441</code></td>
                    <td>Error</td>
                    <td>Invalid account type to process the transaction</td>
                </tr>
                <tr>
                    <td><code>2600</code></td>
                    <td>Error</td>
                    <td>Invalid check number</td>
                </tr>
                <tr>
                    <td><code>2610</code></td>
                    <td>Error</td>
                    <td>Request is too late - check has been paid</td>
                </tr>
                <tr>
                    <td><code>2620</code></td>
                    <td>Error</td>
                    <td>Invalid check number</td>
                </tr>
                <tr>
                    <td><code>2740</code></td>
                    <td>Error</td>
                    <td>Invalid currency code</td>
                </tr>
                <tr>
                    <td><code>2900</code></td>
                    <td>Error</td>
                    <td>Duplicate payment/transfer exist</td>
                </tr>
                <tr>
                    <td><code>2940</code></td>
                    <td>Error</td>
                    <td>Insufficient funds</td>
                </tr>
                <tr>
                    <td><code>3060</code></td>
                    <td>Error</td>
                    <td>Usage limit exceeded</td>
                </tr>
                <tr>
                    <td><code>3080</code></td>
                    <td>Error</td>
                    <td>Withdrawal limit exceeded</td>
                </tr>
                <tr>
                    <td><code>3380</code></td>
                    <td>Error</td>
                    <td>Expired card</td>
                </tr>
                <tr>
                    <td><code>3700</code></td>
                    <td>Error</td>
                    <td>Invalid object type</td>
                </tr>
                <tr>
                    <td><code>3960</code></td>
                    <td>Error</td>
                    <td>Stop payment match</td>
                </tr>
                <tr>
                    <td><code>5130</code></td>
                    <td>Error</td>
                    <td>Card not linked to the account</td>
                </tr>
                <tr>
                    <td><code>6000</code></td>
                    <td>Error</td>
                    <td>Terminal not configured</td>
                </tr>
                <tr>
                    <td><code>6010</code></td>
                    <td>Error</td>
                    <td>Honor not allowed</td>
                </tr>
                <tr>
                    <td><code>6100</code></td>
                    <td>Error</td>
                    <td>Message not permitted from terminal</td>
                </tr>
                <tr>
                    <td><code>6130</code></td>
                    <td>Error</td>
                    <td>Function not available to user</td>
                </tr>
                <tr>
                    <td><code>6335</code></td>
                    <td>Warning</td>
                    <td>Original transaction has been reversed</td>
                </tr>
                <tr>
                    <td><code>6350</code></td>
                    <td>Error</td>
                    <td>Posting session cannot be back-dated.</td>
                </tr>
                <tr>
                    <td><code>6410</code></td>
                    <td>Error</td>
                    <td>Duplicate value</td>
                </tr>
                <tr>
                    <td><code>200437</code></td>
                    <td>Error</td>
                    <td>Invalid maximum term</td>
                </tr>
                <tr>
                    <td style="background-color: #fff;" rowspan="21"><code>500 Internal Server Error<code></td>
                    <td><code>10</code></td>
                    <td>Error</td>
                    <td>Additional action needed</td>
                </tr>
                <tr>
                    <td><code>50</code></td>
                    <td>Warning</td>
                    <td>General warning</td>
                </tr>
                <tr>
                    <td><code>300</code></td>
                    <td>Error</td>
                    <td>System not available</td>
                </tr>
                <tr>
                    <td><code>400</code></td>
                    <td>Error</td>
                    <td>Unavailable function</td>
                </tr>
                <tr>
                    <td><code>500</code></td>
                    <td>Error</td>
                    <td>Unsupported service</td>
                </tr>
                <tr>
                    <td><code>600</code></td>
                    <td>Error</td>
                    <td>Unsupported message</td>
                </tr>
                <tr>
                    <td><code>700</code></td>
                    <td>Error</td>
                    <td>Unsupported function</td>
                </tr>
                <tr>
                    <td><code>810</code></td>
                    <td>Error</td>
                    <td>Message cannot be reversed</td>
                </tr>
                <tr>
                    <td><code>1020</code></td>
                    <td>Error</td>
                    <td>Required element not included</td>
                </tr>
                <tr>
                    <td><code>1060</code></td>
                    <td>Error</td>
                    <td>Element cannot be modified</td>
                </tr>
                <tr>
                    <td><code>1070</code></td>
                    <td>Error</td>
                    <td>Invalid format</td>
                </tr>
                <tr>
                    <td><code>1090</code></td>
                    <td>Error</td>
                    <td>Invalid value</td>
                </tr>
                <tr>
                    <td><code>1220</code></td>
                    <td>Error</td>
                    <td>Invalid identifier</td>
                </tr>
                <tr>
                    <td><code>1800</code></td>
                    <td>Error</td>
                    <td>Service not enabled</td>
                </tr>
                <tr>
                    <td><code>1820</code></td>
                    <td>Error</td>
                    <td>Customer session already in progress</td>
                </tr>
                <tr>
                    <td><code>2380</code></td>
                    <td>Error</td>
                    <td>Unauthorized account</td>
                </tr>
                <tr>
                    <td><code>2400</code></td>
                    <td>Error</td>
                    <td>Account unavailable</td>
                </tr>
                <tr>
                    <td><code>3060</code></td>
                    <td>Error</td>
                    <td>Usage limit exceeded</td>
                </tr>
                <tr>
                    <td><code>6000</code></td>
                    <td>Error</td>
                    <td>Terminal not configured</td>
                </tr>
                <tr>
                    <td><code>6100</code></td>
                    <td>Error</td>
                    <td>Message not permitted from terminal</td>
                </tr>
                <tr>
                    <td><code>6130</code></td>
                    <td>Error</td>
                    <td>Function not available to user</td>
                </tr>
                <tr>
                    <td style="background-color: #fff;" rowspan="2"><code>503 Service Unavailable</code></td>
                    <td><code>300</code></td>
                    <td>Error</td>
                    <td>System not available</td>
                </tr>
                <tr>
                    <td><code>1800</code></td>
                    <td>Error</td>
                    <td>Service not enabled</td>
                </tr>
            </tbody>
        </table>

</html>
