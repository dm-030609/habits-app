import{useHabitStore} from "../stores/useHabitStore";

export default function DailyCheck({habitId}){
    const {toggleComplete} = useHabitStore();

    return(
        <button
            onClick={() => toggleComplete(habitId)}
            className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justfy-center">
                {/* icone de check pode ser adicionado aqui quando completo */}
            </button>
    );
}