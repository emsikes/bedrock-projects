import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({ region: 'us-west-2' });

const llamaConfig = {
    prompt: 'What is the best training schedule for Muay Thai?',
    max_gen_len: 512,
    temperature: 0,
    top_p: 0.9,
};

const llamaModelId = 'meta.llama2-13b-chat-v1';

async function invokeModel() {

    const response = await client.send(new InvokeModelCommand({
        body: JSON.stringify(llamaConfig),
        modelId: llamaModelId,
        contentType: "application/json",
        accept: "application/json",
    }));

    const responseBody = JSON.parse(new TextDecoder().decode(response.body))
    console.log(responseBody.generation)
}

invokeModel()