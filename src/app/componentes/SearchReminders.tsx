import React, { useState } from 'react';

interface Reminder {
  id: number;
  text: string;
}

interface SearchRemindersProps {
  reminders: Reminder[];
}

const SearchReminders: React.FC<SearchRemindersProps> = ({ reminders }) => {
  const [search, setSearch] = useState('');

  const filteredReminders = reminders.filter((reminder) =>
    reminder.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border border-gray-800 rounded mb-9"
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

export default SearchReminders;