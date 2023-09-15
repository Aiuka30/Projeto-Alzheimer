import React, { useState } from 'react';

interface Reminder {
  id: number;
  text: string;
}

interface AddReminderProps {
  onAdd: (reminder: Reminder) => void;
}

const AddReminder: React.FC<AddReminderProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAddReminder = () => {
    onAdd({ id: Date.now(), text }); 
    setText(''); 
  };

  return (
    <div className="flex gap-2 items-center">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        className="p-2 border border-gray-400 rounded"
        placeholder="Insira um lembrete"
      />
      <button 
        onClick={handleAddReminder}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddReminder;