"use client"

import React, { useState } from 'react';
import { AddReminder, Reminder } from '@/componentes/AddReminder';
import { SearchReminders } from '@/componentes/SearchReminders';

const App = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
   
  ]);

  const handleAddReminder = (newReminder: Reminder) => {
    setReminders(prevReminders => [...prevReminders, newReminder]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Minhas Anotações</h1>
      <AddReminder onAdd={handleAddReminder} />
      <SearchReminders reminders={reminders} />
    </div>
  );
};

export default App;