import React from 'react';
import { useState } from 'react';
import AddReminder from '../../app/componentes/AddReminder';
import SearchReminders from '../../app/componentes/SearchReminders';
import CardBau from 'src/app/componentes/CardBau';
import Resgate from 'src/app/componentes/Resgate';

interface Reminder {
  id: number;
  text: string;
}

const App = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, text: 'Lembrete 1' },
    { id: 2, text: 'Lembrete 2' },
    { id: 3, text: 'Lembrete 3' },
  ]);

  const handleAddReminder = (newReminder: Reminder) => {
    setReminders(prevReminders => [...prevReminders, newReminder]);
  };

  return (
    <div className="p-8">
      <CardBau />
      <Resgate />
      <h1 className="text-2xl mb-4">Minhas Anotações</h1>
      <AddReminder onAdd={handleAddReminder} />
      <SearchReminders reminders={reminders} />
    </div>
  );
};

export default handleAddReminder;