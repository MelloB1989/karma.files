import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import config from '../../config';

const client = new S3Client({
    region: config.AWS_REGION,
    credentials:{
        accessKeyId: config.AWS_KEY,
        secretAccessKey: config.AWS_SECRET
    },
});

enum ACL {
    PRIVATE = "private",
    PUBLIC_READ = "public-read",
    PUBLIC_READ_WRITE = "public-read-write",
}

const input = {
  ACL: ACL.PUBLIC_READ,//"private" || "public-read" || "public-read-write" || "authenticated-read" || "aws-exec-read" || "bucket-owner-read" || "bucket-owner-full-control",
  Body: "STREAMING_BLOB_VALUE",
  Bucket: config.AWS_S3_BUCKET,
  Key: "STRING_VALUE1", // required
  /*
  CacheControl: "STRING_VALUE",
  ContentDisposition: "STRING_VALUE",
  ContentEncoding: "STRING_VALUE",
  ContentLanguage: "STRING_VALUE",
  ContentLength: Number("long"),
  ContentMD5: "STRING_VALUE",
  ContentType: "STRING_VALUE",
  ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
  ChecksumCRC32: "STRING_VALUE",
  ChecksumCRC32C: "STRING_VALUE",
  ChecksumSHA1: "STRING_VALUE",
  ChecksumSHA256: "STRING_VALUE",
  Expires: new Date("TIMESTAMP"),
  GrantFullControl: "STRING_VALUE",
  GrantRead: "STRING_VALUE",
  GrantReadACP: "STRING_VALUE",
  GrantWriteACP: "STRING_VALUE",
  Metadata: { // Metadata
    "<keys>": "STRING_VALUE",
  },
  ServerSideEncryption: "AES256" || "aws:kms" || "aws:kms:dsse",
  StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW" || "EXPRESS_ONEZONE",
  WebsiteRedirectLocation: "STRING_VALUE",
  SSECustomerAlgorithm: "STRING_VALUE",
  SSECustomerKey: "STRING_VALUE",
  SSECustomerKeyMD5: "STRING_VALUE",
  SSEKMSKeyId: "STRING_VALUE",
  SSEKMSEncryptionContext: "STRING_VALUE",
  BucketKeyEnabled: true || false,
  RequestPayer: "requester",
  Tagging: "STRING_VALUE",
  ObjectLockMode: "GOVERNANCE" || "COMPLIANCE",
  ObjectLockRetainUntilDate: new Date("TIMESTAMP"),
  ObjectLockLegalHoldStatus: "ON" || "OFF",
  ExpectedBucketOwner: "STRING_VALUE",
  */
};

const uploadToS3 = async () => {
    const command = new PutObjectCommand(input);
    const response = await client.send(command);
    console.log(response);
}

uploadToS3();