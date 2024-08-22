import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({ region: 'us-west-2' });

const titanConfig = {
    inputText: 'What is the best training schedule for Muay Thai?',
    textGenerationConfig: {
        maxTokenCount: 4096,
        stopSequences: [],
        temperature: 0,
        topP: 1,
    }
};

const titanModelId = 'amazon.titan-text-express-v1';

async function invokeModel() {

    const response = await client.send(new InvokeModelCommand({
        body: JSON.stringify(titanConfig),
        modelId: titanModelId,
        contentType: "application/json",
        accept: "application/json",
    }));

    const responseBody = JSON.parse(new TextDecoder().decode(response.body))
    console.log(responseBody)
}

invokeModel()