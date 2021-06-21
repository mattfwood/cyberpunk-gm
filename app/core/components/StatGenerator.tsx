import { Stat, useCharacterState } from '../atoms/roleAtom';
import { roles } from './roles';
import { STAT_LIST } from './roleStats';

function getRandomItem<Item>(items: Item[]) {
  const item = items[Math.floor(Math.random() * items.length)];
  return item!;
}

export function StatGenerator() {
  const [character, setCharacter] = useCharacterState();
  const userRole = character?.role ?? null;

  if (!userRole) {
    return <div>Please select a role first</div>;
  }

  function updateStat(statName: Stat, value: string) {
    setCharacter((prev) => ({
      ...prev,
      stats: {
        ...(character?.stats || {}),
        [statName]: value,
      },
    }));
  }

  return (
    <div className="flex flex-wrap space-x-2">
      {STAT_LIST.map((stat) => {
        return (
          <div key={stat} className="flex-col w-14 mb-2">
            <div className="py-2 bg-white font-semibold text-black mb-2 text-center">
              <h4>{stat.toUpperCase()}</h4>
            </div>
            <div>
              <input
                value={character?.stats?.[stat]}
                type="number"
                className="w-full bg-white py-2 px-3 text-black mb-2"
                onChange={(e) => updateStat(stat, e.target.value)}
              />
            </div>
            <div className="flex flex-col bg-white text-black">
              <button
                type="button"
                onClick={() => {
                  const statOptions = roles[userRole].stats[stat as Stat];

                  const statResult = getRandomItem<string>(statOptions);

                  updateStat(stat, statResult);
                }}
              >
                Roll
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
