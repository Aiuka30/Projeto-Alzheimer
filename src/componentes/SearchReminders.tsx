"use client"// Componente SearchReminders

import React, { useState, useEffect } from 'react';

interface Reminder {
  id: number;
  text: string;
}

interface SearchRemindersProps {
  reminders: Reminder[];
}

export const SearchReminders: React.FC<SearchRemindersProps> = ({ reminders }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  }, [search]);

  const filteredReminders = reminders.filter((reminder) =>
    reminder.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border-2 border-blue-500 focus:ring-2 focus:ring-blue-600 focus:outline-none rounded mb-6"
        placeholder="Pesquisar lembretes"
      />

      {filteredReminders.map((reminder) => (
        <p 
          key={reminder.id} 
          className="border border-gray-800 p-2 mb-2 rounded"
        >
          {reminder.text}
        </p>
      ))}
    </div>
  );
};