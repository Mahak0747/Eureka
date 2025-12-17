# 🚀 Eureka – AI-Powered Explainable Credit Card Fraud Detection

### 🔍 XGBoost • SHAP • SMOTE • PCA Dataset • Flask • React (Vite)

An end-to-end **AI-powered fraud detection system** designed to identify fraudulent credit card transactions while providing **clear, human-understandable explanations** for every prediction. The system combines a high-performance machine learning model with Explainable AI (XAI) techniques and is deployed as a **full-stack web application**.

---

## 📌 Project Overview

Credit card fraud detection is a high-stakes problem where incorrect decisions can lead to financial loss or customer dissatisfaction. This project addresses that challenge by not only detecting fraudulent transactions with high accuracy but also explaining **why** a transaction was classified as fraud.

The solution uses **XGBoost** for robust prediction, **SHAP** for explainability, and a **Flask + React (Vite)** stack for deployment, making the system practical, transparent, and user-friendly.

---

## 📂 Dataset

This project uses the **Credit Card Fraud Detection Dataset** from Kaggle.

🔗 **Dataset Link:**  
https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud

**Dataset highlights:**
- Real European credit card transaction data
- Highly imbalanced dataset (fraud < 1%)
- Features **V1–V28** are PCA-transformed to protect confidentiality
- **Class** is the target variable:
  - `0` → Legitimate transaction
  - `1` → Fraudulent transaction

---

## 🧹 Data Preprocessing

The following preprocessing steps were applied to prepare the data for modeling:

- Dropped the **Time** feature as it did not contribute significantly to prediction
- Standardized the **Amount** feature using `StandardScaler`
- Conducted **Exploratory Data Analysis (EDA)** to analyze fraud distribution and feature behavior
- Applied **SMOTE** to handle severe class imbalance
- Split the dataset into training and testing sets

### Exploratory Data Analysis (EDA)
<img width="537" height="452" alt="Image" src="https://github.com/user-attachments/assets/99565b0b-3ea4-4c45-89c5-573d6db6a7f2" />
<img width="537" height="257" alt="Image" src="https://github.com/user-attachments/assets/0abe5e5d-8201-4df3-9140-d5ee981640bc" />

---

## 🤖 Model: XGBoost

**XGBoost** was selected due to its strong performance on structured/tabular data and its ability to handle class imbalance effectively.

**Why XGBoost?**
- Excellent performance on imbalanced datasets
- Captures complex, non-linear relationships
- High predictive accuracy and ROC-AUC scores
- Efficient and scalable

---

## 🔍 Explainability with SHAP (XAI)

To avoid black-box predictions, **SHAP (SHapley Additive exPlanations)** was integrated into the system.

SHAP enables:
- Feature-level contribution analysis for each prediction
- Local and global interpretability
- Visual explanations showing why a transaction was flagged as fraud

This improves trust, transparency, and accountability—critical factors in financial applications.

### SHAP Summary Plot 
<img width="537" height="572" alt="Image" src="https://github.com/user-attachments/assets/e82a8386-99c1-4e5b-91b9-5108a471dc4a" />

---

## 📊 Model Evaluation

The model was evaluated using multiple metrics:

- **Accuracy:** ~99.5%
- **Precision:** ~91%
- **Recall:** ~82%
- **F1-Score**
- **ROC-AUC Score**
- **Confusion Matrix**

Given the imbalanced nature of the dataset, **Recall and ROC-AUC** were prioritized over raw accuracy.

### Confusion Matrix
<img width="535" height="390" alt="Image" src="https://github.com/user-attachments/assets/3d4ff52b-795a-46e4-bcea-61bd290dce01" />

### Precision–Recall Curve
<img width="531" height="367" alt="Image" src="https://github.com/user-attachments/assets/f1d0bf55-4816-4a37-ae57-8ed3db8f73e9" />

### ROC Curve
<img width="542" height="350" alt="Image" src="https://github.com/user-attachments/assets/06060711-861f-47e8-b1ab-ed93d0b1813d" />

---

## 🌐 Web Application & Deployment

The trained model was exported and integrated into a full-stack web application:

- **Backend:** Flask REST API for model inference and SHAP explanation generation
- **Frontend:** React (Vite) for an interactive and responsive UI
- **Model Integration:** Real-time predictions with explainability
- **Packaging:** The complete application was packaged and delivered as an **APK**

This ensures smooth end-to-end functionality—from transaction input to prediction and explanation.

### 🔴 Live Fraud Detection Dashboard
<img width="1900" height="862" alt="Image" src="https://github.com/user-attachments/assets/7eaeb2a5-dbf1-4d80-9571-53146863b18d"/>

---

## 🛠️ Tech Stack

### Machine Learning & Data Science
- Python
- Pandas, NumPy
- Scikit-learn
- XGBoost
- SHAP
- Imbalanced-Learn (SMOTE)

### Web & Deployment
- Flask (Backend / REST API)
- React (Vite) (Frontend)
- Model Serialization
- RESTful APIs

---

## 👥 Team Contribution Note

This project was developed as a collaborative team effort. I was primarily responsible for the **deployment and full-stack implementation** of the system. My contributions included exporting and optimizing the trained **XGBoost model**, developing the **Flask-based backend API**, and building the **frontend interface using React (Vite)**.

I handled the **end-to-end model integration**, enabling real-time fraud prediction and SHAP-based explainability within the web application. Additionally, I packaged the complete solution as an **APK**, ensuring seamless usability from model inference to user interaction.

---

## 📈 Key Highlights

- High-performance fraud detection with explainability
- Real-world imbalanced dataset handling
- SHAP-based transparent AI decisions
- Full-stack deployment with modern web technologies
- End-to-end system from ML to APK delivery

---

⭐ If you find this project useful, feel free to star the repository!
