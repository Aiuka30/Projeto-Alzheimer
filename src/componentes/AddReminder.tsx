import React, { useState, KeyboardEvent } from 'react';

export interface Reminder {
  id: number;
  text: string;
}

interface AddReminderProps {
  onAdd: (reminder: Reminder) => void;
}

export const AddReminder: React.FC<AddReminderProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAddReminder = () => {
    if (text !== '') { // Adicione isso para prevenir a adição de lembretes vazios
      onAdd({ id: Date.now(), text }); 
      setText(''); 
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddReminder();
    }
  };

  return (
    <div className="flex gap-2 items-center p-4">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown} // Adicionado este atributo
        className="p-2 border border-red-400 rounded"
        placeholder="Insira um lembrete"
      />
      <button 
        onClick={handleAddReminder}
        className="p-2 bg-blue-500 text-black rounded"
      >
        Adicionar
      </button>
    </div>
  );
};