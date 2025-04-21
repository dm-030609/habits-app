const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");
require("dotenv").config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function listarBuckets() {
  try {
    const data = await s3.send(new ListBucketsCommand({}));
    console.log("✅ Buckets disponíveis:");
    data.Buckets.forEach((bucket) => {
      console.log(`- ${bucket.Name}`);
    });
  } catch (err) {
    console.error("❌ Erro ao conectar com o S3:", err);
  }
}

listarBuckets();
