from flask import Flask, render_template, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load the summarization model
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize():
    # Get the text input from the user
    text = request.form['text']
    
    # Generate summary using HuggingFace model
    summary = summarizer(text, max_length=250, min_length=100, do_sample=False)

    # Return the summary in the JSON format without curly braces or quotes
    return summary[0]['summary_text']


if __name__ == "__main__":
    app.run(debug=True)
