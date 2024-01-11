package com.fiserv.dpop.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.algorithms.Algorithm;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.nimbusds.jose.util.Base64URL;
import org.apache.commons.io.IOUtils;

import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.KeyFactory;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.*;
import java.util.stream.Collectors;


public class DPoPJWTGenerator {

    public static String simplify(String json) {
        Gson gson = new GsonBuilder().create();

        JsonElement el = JsonParser.parseString(json);
        return gson.toJson(el);
    }


    public static void main(String[] args) throws IOException, NoSuchAlgorithmException {
        String privateKey = "-----BEGIN RSA PRIVATE KEY-----\n" +
                "MIIJKQIBAAKCAgEAtHbpuel7XlqUKcGhfOLUR9l6OsIOa8qRLLaB+aerdreUiLpt\n" +
                "++whbEe9Gg+FJj0AxTZEHOMWQoMwwmkC2n55t/dvKxDCkVTpuliAuOkBSU43FTIn\n" +
                "cQKb0RoD6hMQ2kPFplk3SkzaTYV8nFEwLrWRMSFXpF8SXCk6tMmQrL8wJVMaPC29\n" +
                "nsX4Vldm+FZpqAv6Iqyx/XQkXUbZquvFTroe32JtK+A7dUL+Y7dHYow+3lwsrnSp\n" +
                "V2RvS5Kg2Y8j5qNRYBvt2zQv4jc2UyIP3B03/XiP2/UmwLUpIDYXTOuGSUy+Uprh\n" +
                "jKcBByqv/hQA2aKe09/RZKigIwPlbhDs54l9QsAylSQVFH3T1ZlunKNPw7NXHXVP\n" +
                "vXPHyJ7dvIPPswXDY2hMZ5XpYf29KwtS0Xm9Q3uj/IosNBS5vDEeU3gfLelnexp4\n" +
                "fOpNFk/dyDpX+8edPV4ESsuUgsKse8d/w8gTbNWvo6gFRgsOYNvJZItqktw80//0\n" +
                "IKJ8OvvoxZ2dwuk0HXPvoGgVr1oJWvJYbUiQzQKGftN3sSLnRBHPqy/U+QJ1D5Qy\n" +
                "8nWLpSq5H6KDn94JPybcey4AH8AaHNq7FYpUcX7wMwZYuMhgXmVx/4y6XJAsU3I4\n" +
                "ZJ3KpOF98goXD/sIK2Q0tCg5JMxp8T+snomSd8QKMdPDIn79kgMRRc8JUskCAwEA\n" +
                "AQKCAgB2LLh5Se/DpcUIYwgA4/jm4/8qoxEWfRv8D7elaKrbnvPhZVPIeKSaZ4/p\n" +
                "lOg4VhI/En4f/IUDIS244VNBCTljwuBFb0A6M0SrBnGkpNB21IU1mBZD5tVqZILT\n" +
                "sZCDnYW8nQeb3B/IS/WB15iZvcRKS+88cBVxzH3pDWVz+e7pQjYX2kwlwLYStEF1\n" +
                "tgCSTuWJ91THCFsXyeGYD7SxDShSV/3tkXTeIPS9D7PrULOKoQmRZEvQMrC+6FH0\n" +
                "pct4qNINAb0MomwI0ub8IX4JQgj8Lwrlmu+5mehIc6Nmd4UEUwD+zvWMSYBe1RFS\n" +
                "bH7yBY/EZviT1einhVGkdejs5hfjlheIKEUHm3ym80GW+GcxfFdvuV5l47rWimPL\n" +
                "/lo3JekCeCUv55OmzxQm+MEU/zYJipH+sBIRSFRVwZ38sDYpcnZ1OgdhIt6jjHYN\n" +
                "ByfnwbjnZsbSdEa0EV8C5RNve9Okgcjz4ydBn2BMXnfmf6RYWd+xSp3F3A8yZfW4\n" +
                "nRyTN2H5nwS9Qa2XHjBG5fTMSOliegzAfWIMoZT3ZQspvpqJrI4JV1Csu36gmbqU\n" +
                "cnOmgqb72YbgZcbjM0TDtIk9bprTMIEHFy+sJifkWculqLYweY6RowNXXWozuP8W\n" +
                "5k/gSG27VrrKF5nQsHMwXLpN3lbF6LmYEdLuF9/pkHGZFGBpQQKCAQEA9o+xy0KU\n" +
                "e7bbvIDuBCk7P6IxODirlIa3wGvchGUvi2xZGg2YRu4lZsgOfjCeS/r2ztlzSt6h\n" +
                "334AeKa/y5lEH9JP/gIj/0g5vP922iVtGm9m9PHgHAIlDQ3Pn2O70LHLJzdwIh4E\n" +
                "jkSqZP2iPEhi7iYfVmda2uXRr/uutHjRkIXhqTU62CQ1Y8jC93RFOlCQWAAPm5no\n" +
                "N4HEvaStcTx+GUSDA6oh7ikHGeqEfI2c4V8Ct2iIARrvH1qKqGeWhiBYe+GfhOfA\n" +
                "TiSguCm/Vp+EBDR/DLH17EZumcV1k7lT4/KoyyiIIiziYstVPwyDszl8zJRgsG9W\n" +
                "FytpqfhwtqrKpQKCAQEAu19386V500X6USBNCz/1BTP0wIZ6rclweIvYTUKJxr2X\n" +
                "OCDvopFOLreD4tEKKSLDZsl6j4qlZsIagce8DoZ52pJtIWXXPw6nZNT0pXumEvC/\n" +
                "b0MuLknN1G3mYD1QMliWH96+dmYqX+3W04pT3H2Mo5JnY1V2ALowAB7Sy7eWfFI4\n" +
                "ouoj3BbWWfIDrF4wnIWCAh8y0Hy7XnFNcr3uiOhdFzHNaNegL7OTZdna8f35sQSg\n" +
                "+xGVzhn80FOVk7gm8rA1rCfMmkmayjzS1MV/iP9T3BLeVkW7cscWHvM1KJyjugon\n" +
                "ZmcZhHYy14vBM5l630qdY3TDKL/pQpYjw8I7u0fCVQKCAQEAxrySSczz1DhTK8Ec\n" +
                "mPwHBsacN73uBz0DdbU7PPg2d4Iw28AjguDIAu20SOC1Z3b1Y0uBE9MZ1QRCKv31\n" +
                "UI3MjH2//nUJQOadq4qa6UELjShIa51e0BSmerwsI0SHibMVlhmoZ8ecUnRkiBys\n" +
                "nTyXiW/vCH0sjY57EweiDVPpTz2q4/HE6Z1d731OMZllh5iSkGwUKI7Iz5zo0Reg\n" +
                "ucpRtdo0ZErJKKenUqtmeOLIlhw4G0/FeGaWYcZgR1efy6Lcz5XQN5d5uULqzSbR\n" +
                "VGglSCJsWfZDzFwFICs6F4VlajIY/hBAkpNtMsbEgpp6uYbX4iqjOPO1B931QIzB\n" +
                "hWtrBQKCAQEAnQS7+KnLFYmm4yU2ax8FrX6EtHH9jHUqk1pdwSDpZGqstpSjPJCX\n" +
                "+/49v21+HkrLhO+CjZeaVCqFHAzNQz7eDpR2b25wmp8lGBJ9kc+0tFqbkhmyMYgX\n" +
                "vNT8Ido/wnEKHVsEMSQcjpc5V7yr2jI8ETc2/L85TBK69t7dt2n56eTdIWkk8+MP\n" +
                "bgCpo2CrS/91m2GZq61bNyGrzWPs6T4QBMfvYtSPoGnUM54FJJW5EObYII30A+sz\n" +
                "OUFSL6A6w1V3JPWVOBZGaQPfif6Xia6uD9agC5wUIXNEzlrxST861UR9EAuGDsMe\n" +
                "iBLNrPgJR+W3TwkiIpvwVaSMBBhZBfB0oQKCAQAOxLbgEvf3iSQbPNTtOy+vx2Eu\n" +
                "IUQKd92G9URg9cOdG86fwd2F8rBPW39nRa9cGEqFH3BRoaNzh7zrlxOO/0yKwZDo\n" +
                "N+Ns5A0CKX/5Fz55ghzjn9tLF3316G6t1fJdL1m29Rp6wdxw3Wn7xffZDFVED0GP\n" +
                "Eki8fdye++q/e4LHAk3FeKefCAYQSvRP0UotBoF1TsIG8BqTGECqIq/njswDpL7T\n" +
                "d4dkSc6+ITYyWBZvbXkC1TIJ6m91x1NYR6VjLPn1E+OuscE0z1xH6j2S/b8UiHKa\n" +
                "EO9VqmA5WCRSCyLRS2e8M8X2WxZzuUmmzxNs5UTsGMMjoYQqEgrmj32Y+EnW\n" +
                "-----END RSA PRIVATE KEY-----";

        String publicKey = "-----BEGIN PUBLIC KEY-----\n" +
                "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAtHbpuel7XlqUKcGhfOLU\n" +
                "R9l6OsIOa8qRLLaB+aerdreUiLpt++whbEe9Gg+FJj0AxTZEHOMWQoMwwmkC2n55\n" +
                "t/dvKxDCkVTpuliAuOkBSU43FTIncQKb0RoD6hMQ2kPFplk3SkzaTYV8nFEwLrWR\n" +
                "MSFXpF8SXCk6tMmQrL8wJVMaPC29nsX4Vldm+FZpqAv6Iqyx/XQkXUbZquvFTroe\n" +
                "32JtK+A7dUL+Y7dHYow+3lwsrnSpV2RvS5Kg2Y8j5qNRYBvt2zQv4jc2UyIP3B03\n" +
                "/XiP2/UmwLUpIDYXTOuGSUy+UprhjKcBByqv/hQA2aKe09/RZKigIwPlbhDs54l9\n" +
                "QsAylSQVFH3T1ZlunKNPw7NXHXVPvXPHyJ7dvIPPswXDY2hMZ5XpYf29KwtS0Xm9\n" +
                "Q3uj/IosNBS5vDEeU3gfLelnexp4fOpNFk/dyDpX+8edPV4ESsuUgsKse8d/w8gT\n" +
                "bNWvo6gFRgsOYNvJZItqktw80//0IKJ8OvvoxZ2dwuk0HXPvoGgVr1oJWvJYbUiQ\n" +
                "zQKGftN3sSLnRBHPqy/U+QJ1D5Qy8nWLpSq5H6KDn94JPybcey4AH8AaHNq7FYpU\n" +
                "cX7wMwZYuMhgXmVx/4y6XJAsU3I4ZJ3KpOF98goXD/sIK2Q0tCg5JMxp8T+snomS\n" +
                "d8QKMdPDIn79kgMRRc8JUskCAwEAAQ==\n" +
                "-----END PUBLIC KEY-----";

        String url = "https://qa.api.firstdata.com/validate-dpop-demo";
        String httpMethod = String.valueOf(RequestMethod.POST);

        String dpopToken;

        //dpopToken = noPayloadGenerateDPoP(privateKey, publicKey, url, httpMethod);
        dpopToken = requestBodyPayloadGenerateDPoP(privateKey, publicKey, url, httpMethod);
        //dpopToken = formUrlEncodedPayloadGenerateDPoP(privateKey, publicKey, url, httpMethod);
        //dpopToken = selectivePayloadGenerateDPoP(privateKey, publicKey, url, httpMethod);

        System.out.println("DPoP Token :: " + dpopToken);
    }

    private static String selectivePayloadGenerateDPoP(String privateKey, String publicKey, String url, String httpMethod) {
        String dpopToken = null;

        try {

            LinkedHashMap<String, String> mapSelectivePayload = new LinkedHashMap<>();
            mapSelectivePayload.put("/accountNumber", "9876543210");
            mapSelectivePayload.put("/amount", "$49");
            mapSelectivePayload.put("/personalDetails/name", "ankit ostwal");
            mapSelectivePayload.put("/products/99/productName", "belt");
            mapSelectivePayload.put("/products/99/productPrice", "$4");

            List<String> selectivePayloadKeyList = new LinkedList<>(mapSelectivePayload.keySet());

            System.out.println(convertMapToString(mapSelectivePayload));
            String selectivePayloadHash = createSHAHash(convertMapToString(mapSelectivePayload));
            dpopToken = generateDPoP(privateKey, publicKey, url, httpMethod, null, null,
                    null, selectivePayloadKeyList, selectivePayloadHash,
                    null, null);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return dpopToken;
    }

    private static String formUrlEncodedPayloadGenerateDPoP(String privateKey, String publicKey, String url, String httpMethod) {
        String dpopToken = null;

        try {


            LinkedHashMap<String, String> mapForm = new LinkedHashMap<>();
            mapForm.put("accountNumber", "9876543210");
            mapForm.put("amount", "$49");
            mapForm.put("accountName", "Ankit Ostwal");

            List<String> formParamKeyList = new LinkedList<>(mapForm.keySet());

            String formParamHash = createSHAHash(convertMapToString(mapForm));
            dpopToken = generateDPoP(privateKey, publicKey, url, httpMethod, null, null, null, null, null,
                    formParamKeyList, formParamHash);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return dpopToken;
    }

    private static String requestBodyPayloadGenerateDPoP(String privateKey, String publicKey, String url, String httpMethod) {
        String dpopToken = null;
        try {

            FileInputStream fis = new FileInputStream("src/main/resources/1kb.json");
            String requestBody = IOUtils.toString(fis, "UTF-8");
            requestBody = simplify(requestBody);

            // mapRequestHeader is an optional field (just for demo adding 3 fields, its optional,
            // send null for requestHeaderKeyList, requestHeaderHash if not required)
            LinkedHashMap<String, String> mapRequestHeader = new LinkedHashMap<>();
            mapRequestHeader.put("org", "bank of america");
            mapRequestHeader.put("key", "abc1234");
            mapRequestHeader.put("SSN", "234156789012");

            // requestHeaderKeyList is an optional field. But if mapRequestHeader exist then  requestHeaderKeyList has to exist
            List<String> requestHeaderKeyList = new LinkedList<>(mapRequestHeader.keySet());

            System.out.println(requestHeaderKeyList.stream().collect(Collectors.toList()));

            String requestHeaderHash = createSHAHash(convertMapToString(mapRequestHeader));
            String requestBodyHash = createSHAHash(requestBody);

            dpopToken = generateDPoP(privateKey, publicKey, url, httpMethod, requestBodyHash, requestHeaderKeyList, requestHeaderHash,
                    null, null, null, null);

        } catch (Exception e) {
            e.printStackTrace();
        }

        return dpopToken;
    }

    private static String noPayloadGenerateDPoP(String privateKey, String publicKey, String url,
                                                String httpMethod) {
        return generateDPoP(privateKey, publicKey, url, httpMethod,
                null, null,
                null, null, null,
                null, null);
    }

    // convertMapToString
    public static String convertMapToString(Map<String, ?> map) {
        String mapAsString = map.keySet().stream()
                .map(key -> key + "=" + map.get(key))
                .collect(Collectors.joining(", ", "{", "}"));
        return mapAsString;
    }


    // using auth0 generate dpop
    public static String generateDPoP(String privateKey, String publicKey, String url,
                                      String httpMethod, String requestBodyHash, List<String> requestHeaderKeyList,
                                      String requestHeaderHash, List<String> selectivePayloadKeyList, String selectivePayloadHash,
                                      List<String> formParamKeyList, String formParamHash) {

        String dpopToken = null;
        try {

            java.security.Security.addProvider(
                    new org.bouncycastle.jce.provider.BouncyCastleProvider()
            );

            RSAPrivateKey rsaPrivateKey;
            privateKey = privateKey.replace("\n", "");
            privateKey = privateKey.replace("-----BEGIN RSA PRIVATE KEY-----", "");
            privateKey = privateKey.replace("-----END RSA PRIVATE KEY-----", "");

            byte[] decodedPv = Base64.getDecoder().decode(privateKey);
            PKCS8EncodedKeySpec keySpecPv = new PKCS8EncodedKeySpec(decodedPv);
            KeyFactory kf = KeyFactory.getInstance("RSA");
            rsaPrivateKey = (RSAPrivateKey) kf.generatePrivate(keySpecPv);

            RSAPublicKey rsaPublicKey;
            publicKey = publicKey.replace("\n", "");
            publicKey = publicKey.replace("-----BEGIN PUBLIC KEY-----", "");
            publicKey = publicKey.replace("-----END PUBLIC KEY-----", "");

            byte[] data = Base64.getDecoder().decode(publicKey);
            X509EncodedKeySpec spec = new X509EncodedKeySpec(data);
            rsaPublicKey = (RSAPublicKey) kf.generatePublic(spec);


            Algorithm algorithm = Algorithm.RSA256(null, rsaPrivateKey);

            Map<String, Object> headerClaim = new HashMap<>();
            headerClaim.put("typ", "dpop+jwt");
            headerClaim.put("jwk", generateJWK(rsaPublicKey));

            JWTCreator.Builder builder = JWT.create();

            builder.withJWTId(UUID.randomUUID().toString())
                    .withHeader(headerClaim)
                    .withIssuedAt(new Date(System.currentTimeMillis()))
                    .withClaim("htm", httpMethod)
                    .withClaim("htu", url);

            if (requestBodyHash != null)
                builder.withClaim("requestBodyHash", requestBodyHash);
            else if (selectivePayloadHash != null && selectivePayloadKeyList != null) {
                builder.withClaim("selectivePayloadHash", selectivePayloadHash);
                builder.withClaim("selectivePayloadKeyList", selectivePayloadKeyList);
            } else if (formParamHash != null && formParamKeyList != null) {
                builder.withClaim("formParamHash", formParamHash);
                builder.withClaim("formParamKeyList", formParamKeyList);
            }

            if (requestHeaderHash != null && requestHeaderKeyList != null) {
                builder.withClaim("requestHeaderKeyList", requestHeaderKeyList);
                builder.withClaim("requestHeaderHash", requestHeaderHash);
            }

            dpopToken = builder.sign(algorithm);

            System.out.println("token :: " + dpopToken);
            return dpopToken;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return dpopToken;
    }

    private static Map<String, String> generateJWK(RSAPublicKey rsa) {


        Map<String, String> values = new HashMap<>();
//        {
//            "kty": "RSA",
//                "n": "tHbpuel7XlqUKcGhfOLUR9l6OsIOa8qRLLaB-aerdreUiLpt--whbEe9Gg-FJj0AxTZEHOMWQoMwwmkC2n55t_dvKxDCkVTpuliAuOkBSU43FTIncQKb0RoD6hMQ2kPFplk3SkzaTYV8nFEwLrWRMSFXpF8SXCk6tMmQrL8wJVMaPC29nsX4Vldm-FZpqAv6Iqyx_XQkXUbZquvFTroe32JtK-A7dUL-Y7dHYow-3lwsrnSpV2RvS5Kg2Y8j5qNRYBvt2zQv4jc2UyIP3B03_XiP2_UmwLUpIDYXTOuGSUy-UprhjKcBByqv_hQA2aKe09_RZKigIwPlbhDs54l9QsAylSQVFH3T1ZlunKNPw7NXHXVPvXPHyJ7dvIPPswXDY2hMZ5XpYf29KwtS0Xm9Q3uj_IosNBS5vDEeU3gfLelnexp4fOpNFk_dyDpX-8edPV4ESsuUgsKse8d_w8gTbNWvo6gFRgsOYNvJZItqktw80__0IKJ8OvvoxZ2dwuk0HXPvoGgVr1oJWvJYbUiQzQKGftN3sSLnRBHPqy_U-QJ1D5Qy8nWLpSq5H6KDn94JPybcey4AH8AaHNq7FYpUcX7wMwZYuMhgXmVx_4y6XJAsU3I4ZJ3KpOF98goXD_sIK2Q0tCg5JMxp8T-snomSd8QKMdPDIn79kgMRRc8JUsk",
//                "e": "AQAB",
//                "alg": "RS256",
//                "kid": "sdfsdfsd",
//                "use": "enc"
//        }

        ////System.out.println(Base64URL.encode(rsa.getModulus())+" modulus");
        values.put("kty", rsa.getAlgorithm()); // getAlgorithm() returns kty not algorithm
        values.put("e", Base64.getUrlEncoder().encodeToString(rsa.getPublicExponent().toByteArray()));
        values.put("kid", UUID.randomUUID().toString());
        values.put("n", String.valueOf(Base64URL.encode(rsa.getModulus())));

        //System.out.println(">>>>>>>>>>>>>>>>>>>>"+values.get("n"));

        return values;
    }

    private static String createSHAHash(String input) throws NoSuchAlgorithmException {

        String hashtext = null;
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] messageDigest =
                md.digest(input.getBytes(StandardCharsets.UTF_8));

        hashtext = convertToHex(messageDigest);
        return hashtext;
    }

    private static String convertToHex(final byte[] messageDigest) {
        BigInteger bigint = new BigInteger(1, messageDigest);
        String hexText = bigint.toString(16);
        while (hexText.length() < 32) {
            hexText = "0".concat(hexText);
        }
        return hexText;
    }

    public enum RequestMethod {
        GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS, TRACE;
    }


}
