from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)

# Load your trained model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        # Extract important features
        V1 = float(data.get("V1", 0))
        V4 = float(data.get("V4", 0))
        V12 = float(data.get("V12", 0))
        V14 = float(data.get("V14", 0))
        Amount = float(data.get("Amount", 0))

        # Prepare full 29-feature array with zeros
        features = [0.0] * 29
        features[0] = V1       # V1 → index 0
        features[3] = V4       # V4 → index 3
        features[11] = V12     # V12 → index 11
        features[13] = V14     # V14 → index 13
        features[28] = Amount  # Amount → index 28

        X = np.array([features])

        # Predict using model
        pred = model.predict(X)[0]
        probs = model.predict_proba(X)[0]
        prob = float(probs[1])  # probability of class 1

        # 🔍 Debug info (to see actual model behavior in your terminal)
        print("\n=== DEBUG INFO ===")
        print("Raw prediction:", pred)
        print("Probabilities:", probs)
        print("=================\n")

        # ✅ Threshold adjustment: label as fraud only if prob > 0.8
        result = "⚠️ Fraudulent Transaction" if prob > 0.8 else "✅ Legitimate Transaction"


        # Convert to native Python types before jsonify
        response = {
            "prediction": result,
            "probability": round(prob * 100, 2),
            "influencing_factors": ["V1", "V4", "V12", "V14", "Amount"]
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(port=5000, debug=True)
