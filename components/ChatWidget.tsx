import React, { useState } from 'react';
import { ChatMessage, FaqButton } from '@/types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');

  const faqButtons: FaqButton[] = [
    { text: "How does the process work?", response: "Our process is simple: Upload your license, get a quick valuation, and receive payment once you accept our offer." },
    { text: "Is it legal?", response: "Yes! We follow all legal protocols for software license transfers and ensure compliance with relevant regulations." },
    { text: "How long does it take?", response: "Most transactions are completed within 24-48 hours after license verification." }
  ];

  const handleFaqClick = (response: string) => {
    setMessages(prev => [
      ...prev,
      { text: response, isUser: false }
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages(prev => [
      ...prev,
      { text: inputText, isUser: true },
      { text: "Thanks for your message! Our team will get back to you soon.", isUser: false }
    ]);
    setInputText('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <span className="text-2xl">💬</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
      <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <h3 className="font-semibold">Chat with Us</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">Common questions:</p>
          {faqButtons.map((faq, index) => (
            <button
              key={index}
              onClick={() => handleFaqClick(faq.response)}
              className="block w-full text-left text-sm p-2 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              {faq.text}
            </button>
          ))}
        </div>

        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.isUser ? 'ml-auto bg-blue-600 text-white' : 'mr-auto bg-gray-100 dark:bg-gray-700'
            } max-w-[80%] rounded-lg p-3`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;
