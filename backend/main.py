from typing import List
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    base_url="https://openrouter.ai/api/v1"
)

class EntitiesModel(BaseModel):
    attributes: List[str]
    colors: List[str]
    animals: List[str]

with client.responses.stream(
    model="openai/gpt-5-nano",
    input=[
        {"role": "system", "content": "Extract entities from the input text"},
        {"role": "user", "content": "The quick brown fox jumps over the lazy dog with piercing blue eyes"},
    ],
    text_format=EntitiesModel,
) as stream:
    for event in stream:
        if event.type == "response.refusal.delta":
            print(event.delta, end="")
        elif event.type == "response.output_text.delta":
            print(event.delta, end="")
        elif event.type == "response.error":
            print(event.error, end="")
        elif event.type == "response.completed":
            print("Completed")

    final_response = stream.get_final_response()
    final_response = stream.get_final_response()
    parsed = final_response.output[0].content[0].parsed
    print(parsed.model_dump_json(indent=2))
