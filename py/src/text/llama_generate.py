import boto3
import json
import pprint

client = boto3.client(service_name='bedrock-runtime', region_name='us-west-2')

llama_model_id = 'meta.llama2-13b-chat-v1'

prompt=input("Enter the subject you would like to ask about: ")


llama_config = json.dumps({
    "prompt": prompt,
    "max_gen_len": 512,
    "temperature": 0,
    "top_p": 0.9
})


response = client.invoke_model(
    body=llama_config,
    modelId=llama_model_id,
    accept="application/json",
    contentType="application/json"
)

response_body = json.loads(response.get('body').read())

pp = pprint.PrettyPrinter(depth=4)
pp.pprint(response_body["generation"]) # llama config