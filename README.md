# Communication Improvement Chatbot
This project is a React Native application designed to help users improve their communication skills. The chatbot corrects grammatical errors, suggests better ways to phrase sentences, and enhances vocabulary. It also offers tips and insights on negotiation skills, IT-related communication, and more.

## Features
1. Real-time Communication: Interact with the bot for immediate feedback.
2. Grammar Correction: Get corrections for any grammatical errors in your prompts.
3. Phrase Suggestions: Receive alternative ways to phrase your sentences.
4. Vocabulary Enhancement: Learn new words and their meanings.

## Installation
Clone the repository:
```
git clone https://github.com/shoyeabaslam/chatwithme-react-native.git
```
Install dependencies:
```
npm install
```
Before running the application go to ```services``` folder add [YOUR_GOOGLE_GEMINI_API_KEY](https://ai.google.dev/gemini-api)  inside ```api.ts``` file
```
services
|--api.ts
```
Run Application
```
npx react-native run-android
npx react-native run-ios
```

## File Structure
```
communication-improvement-chatbot/
├── assets/
│   └── images/
│       └── send.png
|       └── chatbot.png
├── components/
|   |__ BotTextArea.tsx
|   |__ Header.tsx
|   |__ UserTextArea.tsx
│   ├── ChatInput.tsx
│   ├── ChatMessage.tsx
│   ├── MessageList.tsx
│   └── Loading.tsx
├── Context/
│   ├── MessagesContext.ts
│   └── ContextProvider.tsx
├── services/
│   └── api.ts
|   └── systemInstruction.ts
├── types/
│   └── ChatDataType.ts
├── App.tsx
├── README.md
└── package.json
```
## Demo

![Untitled design](https://github.com/shoyeabaslam/chatwithme-react-native/assets/118368907/f3a69c91-0e32-4457-8681-626531de4681)

