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
    <div className="flex flex-col justify-between h-screen">
      <div className="overflow-auto p-4">
        {filteredReminders.map((reminder) => (
          <p
            key={reminder.id}
            className="border border-gray-800 p-2 mb-2 rounded"
          >
            {reminder.text}
          </p>
        ))}
      </div>

      <div className="p-4 mb-4 w-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border-2 border-blue-400 focus:ring-2 focus:ring-blue-600 focus:outline-none rounded w-full"
          placeholder="Pesquisar lembretes"
        />
      </div>
    </div>
  );
};