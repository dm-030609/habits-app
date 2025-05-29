import { useState } from 'react';
import HabitList from '../components/HabitList';
import AddHabitModal from '../components/AddHabitModal';
import { useHabitStore } from '../stores/useHabitStore';

export default function HabitsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { habits } = useHabitStore();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Meus Hábitos</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          + Adicionar
        </button>
      </div>

      <HabitList habits={habits} />
      <AddHabitModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}