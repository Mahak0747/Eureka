from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import xgboost as xgb

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "http://127.0.0.1:5173"]}}) # allow frontend (React) to call the API

# ====== Load model and scaler safely ======
try:
    model = joblib.load("xgb_model.joblib")
    print("✅ Model loaded successfully!")
except Exception as e:
    print("⚠️ Could not load joblib model. Trying fallback XGBoost format...")
    model = xgb.Booster()
    model.load_model("xgb_model.json")
    print("✅ Loaded model from xgb_model.json")

try:
    scaler = joblib.load("scaler.pkl")
    print("✅ Scaler loaded successfully!")
except Exception as e:
    print("⚠️ Scaler not found. Proceeding without scaling.")
    scaler = None

# ====== Routes ======
@app.route('/')
def home():
    return "Fraud Detection API Running ✅"

@app.route('/explain', methods=['POST'])
def explain():
    try:
        data = request.get_json()
        features = np.array(data["features"]).reshape(1, -1)

        # Safe scaling: apply scaler only if it expects 1 feature (Amount)
        if scaler:
            if scaler.scale_.shape[0] == 1:
                # Assume last feature is 'Amount' if only 1 feature was scaled
                amount_col = features[:, -1].reshape(-1, 1)
                scaled_amount = scaler.transform(amount_col)
                features[:, -1] = scaled_amount.flatten()
                print("✅ Scaled only the Amount column.")
            elif features.shape[1] == scaler.scale_.shape[0]:
                features = scaler.transform(features)
                print("✅ Scaled all features.")
            else:
                print("⚠️ Skipping scaling due to mismatch.")

        # Predict
        if hasattr(model, "predict_proba"):
            pred = int(model.predict(features)[0])
            proba = float(model.predict_proba(features)[0][1])
        else:
            dmatrix = xgb.DMatrix(features)
            pred = int(round(float(model.predict(dmatrix)[0])))
            proba = float(model.predict(dmatrix)[0])

        # Demo feature importance
        top_features = [
            {"feature": "V14", "impact": 0.52},
            {"feature": "V4", "impact": 0.36},
            {"feature": "V12", "impact": 0.27},
        ]

        return jsonify({
            "prediction": pred,
            "probability": proba,
            "top_features": top_features
        })

    except Exception as e:
        print("❌ Error in /explain:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)