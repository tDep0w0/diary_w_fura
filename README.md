## Run Frontend Server

```bash
npm run dev
```

## Run Backend Server
```bash
python -m venv venv
source ./venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
