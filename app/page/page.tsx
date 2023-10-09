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
    <div className="p-8 flex flex-col items-center h-screen overflow-auto">
      <h1 className="text-2xl text-center text-blue-600 mb-2 mt-10 font-bold uppercase tracking-widest animate-pulse scale-150">
          Minhas Anotações
      </h1>
      <div className="mb-20">
        <AddReminder onAdd={handleAddReminder} />
      </div>
      <SearchReminders reminders={reminders} />
    </div>
  );
};

export default App;