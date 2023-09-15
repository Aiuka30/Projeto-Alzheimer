// components/Resgate.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Message {
  id: number;
  text: string;
}

const Resgate: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/messages');
        setMessages(res.data);
      } catch (error) {
        console.error("Erro ao buscar mensagens", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="p-40 h-96 w-96 bg-yellow-500">
    <h1 className="text-2xl mb-40">Mensagens:</h1>
    {messages.map(message => (
      <p key={message.id} className="mb-2">
        {message.text}
      </p>
    ))}
  </div>
  );
};

export default Resgate;