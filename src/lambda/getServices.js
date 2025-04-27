import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

const dynamodbClient = new DynamoDBClient({ region: "ap-southeast-2" });

export const handler = async (event, context) => {
  const params = {
    TableName: "Services"
  };

  try {
    const command = new ScanCommand(params);
    const data = await dynamodbClient.send(command);
    return {
      statusCode: 200,
      body: JSON.stringify(data.Items)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};