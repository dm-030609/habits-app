import { useState } from 'react';
import { useHabitStore } from '../stores/useHabitStore';

export default function AddHabitModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const { addHabit } = useHabitStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit({ name, frequency: 'daily' });
    setName('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Adicionar Hábito</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do hábito"
            className="w-full p-2 border rounded mb-4"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}