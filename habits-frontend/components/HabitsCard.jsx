import DailyCheck from "./Dailycheck";

export default function HabitCard({habit}){
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
                <h3 className="font-medium text-lg">{habit.name}</h3>
                <DailyCheck habitId={habit.id}/>
            </div>
            <p className="text-gray-500 text-sm">{habit.frequency}</p>
        </div>
    );
}