# Response Codes

Every API request to Banking Hub server returns a standard HTTP status code along with the EFX status code in the response message.

## HTTP Status Codes

HTTP status code indicates the result of an API call. 

For every successful or unsuccessful API call, one of the following HTTP Status Code is returned in the response message:

| HTTP Status Code          | Description   |
|-------------------|-----------|
| `200  OK`      | Successful request   |
| `201  Created`     | Successfully created a new resource     |
| `400  Bad request`     | Server is unable to process the request due to invalid syntax     |
| `401  Unauthorized` | Invalid authentication credentials  |
| `403  Forbidden` | Forbidden to access the valid URL  |
| `404  Not found` | Server unable to find the requested resource  |
| `405  Method not allowed` | Method not allowed  |
| `422  Un-processable Entity`  | Server is unable to process the request due to semantic errors |
| `500  Internal Server Error` | Server encountered an unexpected error while processing the request  |
| `503  Service Unavailable`        | Service is temporarily unavailable due to overload or maintenance activity    |

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
                    <td style="background-color: #fff;" rowspan="6"><code>200 OK</code></td>
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
                    <td><code>1040</code></td>
                    <td>Warning</td>
                    <td>Request declined</td>
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
                    <td><code>1140</code></td>
                    <td>Warning</td>
                    <td>Some selection criteria not supported</td>
                </tr>
                <tr>
                    <td style="background-color: #fff;" rowspan="1"><code>201 Created</code></td>
                    <td><code>0</code></td>
                    <td>Info</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td rowspan="7" style="background-color: #fff;" ><code>400 Bad request</code></td>
                    <td><code>1020</code></td> 
                    <td>Error</td>
                    <td>Required element not included</td>
                </tr>
                <tr>
                    <td><code>1050</code></td>
                    <td>Error</td>
                    <td>Invalid enum value</td>
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
                    <td rowspan="5" style="background-color: #fff;"><code>401 Unauthorized</code></td>
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
                    <td>Authorization failed</td>
                </tr>
                <tr>
                    <td><code>1910</code></td>
                    <td>Error</td>
                    <td>Request denied due to account status</td>
                </tr>
                <tr>
                    <td><code>1970</code></td>
                    <td>Error</td>
                    <td>Invalid new password</td>
                </tr>
                <tr>
                    <td rowspan="1" style="background-color: #fff;" ><code>403 Forbidden</code></td>
                    <td><code>2360</code></td>
                    <td>Error</td>
                    <td>Restricted access</td>
                </tr>
                <tr>
                    <td rowspan="1" style="background-color: #fff;" ><code>404 Not found</code></td>
                    <td><code>1121</code></td>
                    <td>Error</td>
                    <td>No records found</td>
                </tr>
                <tr>
                    <td rowspan="3" style="background-color: #fff;" ><code>405 Method not allowed</code></td>
                    <td><code>400</code></td>
                    <td>Error</td>
                    <td>Function not available</td>
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
                    <td rowspan="1" style="background-color: #fff;" ><code>409 Conflict</code></td>
                    <td><code>3500</code></td>
                    <td>Error</td>
                    <td>Data changed or truncated</td>
                </tr>                
                <tr>
                    <td rowspan="25" style="background-color: #fff;" ><code>422 Unprocessable Entity</code></td>
                    <td><code>100</code></td>
                    <td>Error</td>
                    <td>General error</td>
                </tr>
                <tr>
                    <td><code>999</code></td>
                    <td>Error</td>
                    <td>Unidentified error</td>
                </tr>
                <tr>
                    <td><code>1045</code></td>
                    <td>Error</td>
                    <td>Request denied</td>
                </tr>
                <tr>
                    <td><code>1500</code></td>
                    <td>Error</td>
                    <td>Invalid address</td>
                </tr>
                <tr>
                    <td><code>1724</code></td>
                    <td>Error</td>
                    <td>Acknowledgement of exception is required.</td>
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
                    <td>Date-time value is more that the accepted limit</td>
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
                    <td><code>2365</code></td>
                    <td>Error</td>
                    <td>Request denied due to account status</td>
                </tr>
                <tr>
                    <td><code>2380</code></td>
                    <td>Error</td>
                    <td>Unauthorized account</td>
                </tr>
                <tr>
                    <td><code>2400</code></td>
                    <td>Error</td>
                    <td>Account not available</td>
                </tr>
                <tr>
                    <td><code>2441</code></td>
                    <td>Error</td>
                    <td>Invalid account type to process the transaction</td>
                </tr>
                <tr>
                    <td><code>2600</code></td>
                    <td>Error</td>
                    <td>Invalid check number range</td>
                </tr>
                <tr>
                    <td><code>2620</code></td>
                    <td>Error</td>
                    <td>Check number not found</td>
                </tr>
                <tr>
                    <td><code>2740</code></td>
                    <td>Error</td>
                    <td>Invalid currency code</td>
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
                    <td><code>3380</code></td>
                    <td>Error</td>
                    <td>Expired card</td>
                </tr>
                <tr>
                    <td><code>5130</code></td>
                    <td>Error</td>
                    <td>Card not linked to the account</td>
                </tr>
                <tr>
                    <td><code>6335</code></td>
                    <td>Warning</td>
                    <td>Original transaction has been reversed</td>
                </tr>
                <tr>
                    <td><code>6410</code></td>
                    <td>Error</td>
                    <td>Duplicate value</td>
                </tr>
                <tr>
                    <td style="background-color: #fff;" rowspan="1"><code>503 Service Unavailable</code></td>
                    <td><code>300</code></td>
                    <td>Error</td>
                    <td>System not available</td>
                </tr>
            </tbody>
        </table>

</html>
