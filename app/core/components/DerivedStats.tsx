import { Character, useCharacterState } from '../atoms/roleAtom';

function calcHP(stats: Character['stats']) {
  // from Cyberpunk Red Core Book:
  // Hit Points equal to 10 + (5[BODY and WILL averaged, rounding up])
  const average = Math.round(
    (parseInt(stats?.body!) + parseInt(stats?.will!)) / 2
  );

  return 5 * average + 10;
}

export function DerivedStats() {
  const [character] = useCharacterState();

  const stats = character?.stats!;

  const hitpoints = calcHP(stats);

  if (!stats) return null;

  const derivedStats = {
    hitpoints,
    // Seriously Wounded Wound Threshold is half of total HP (rounded up).
    'seriously wounded': Math.round(hitpoints / 2),
    // Death Save is equal to BODY Statistic
    'death save': stats?.body,
    // Humanity is empathy times 10
    humanity: parseInt(stats?.emp!) * 10,
  };

  return (
    <div>
      <table className="capitalize">
        <thead className="border-b">
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(derivedStats).map(([stat, value]) => (
            <tr>
              <td>{stat}</td>
              <td className="text-center">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
