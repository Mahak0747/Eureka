from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load your model and scaler
model = joblib.load("xgb_model.joblib")
scaler = joblib.load("scaler.pkl")

@app.route('/')
def home():
    return "Fraud Detection API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # JSON input from frontend
    features = np.array(data['features']).reshape(1, -1)
    features_scaled = scaler.transform(features)
    prediction = model.predict(features_scaled)
    probability = model.predict_proba(features_scaled)[0, 1]
    return jsonify({
        "prediction": int(prediction[0]),
        "probability": float(probability)
    })

if __name__ == '__main__':
    app.run(debug=True)