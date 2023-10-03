const apiKey = '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'; // Replace with your OpenAI API key
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // Use the appropriate OpenAI endpoint

const questionInput = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', async () => {
    const question = questionInput.value;
    if (!question) return;

    answerDiv.textContent = 'Fetching answer...';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: question,
                max_tokens: 50, // Adjust as needed
            }),
        });
        
        const data = await response.json();
        console.log(data);
        const answer = data.choices[0].text;
        

        answerDiv.textContent = answer;
    } catch (error) {
        console.error('Error:', error);
        answerDiv.textContent = 'An error occurred while fetching the answer.';
    }
});
