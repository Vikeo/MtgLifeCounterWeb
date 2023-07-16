import * as S from './ExtraCounterBar.style';
import { CounterType, Player } from '../../Types/Player';
import ExtraCounter from '../Buttons/ExtraCounter';
import CommanderTaxIcon from '../../Icons/CommanderTaxIcon';
import EnergyIcon from '../../Icons/EnergyIcon';
import ExperienceIcon from '../../Icons/ExperienceIcon';
import PoisonIcon from '../../Icons/PoisonIcon';
import PartnerTaxIcon from '../../Icons/PartnerTaxIcon';

type ExtraCountersBarProps = {
  player: Player;
  onPlayerChange: (updatedPlayer: Player) => void;
};

const ExtraCountersBar = ({
  player,
  onPlayerChange,
}: ExtraCountersBarProps) => {
  const handleCounterChange = (
    updatedCounterTotal: number,
    type: CounterType
  ) => {
    const existingCounter = player.extraCounters.find(
      (counter) => counter.type === type
    );

    if (!existingCounter) {
      const newCounter = {
        type,
        value: updatedCounterTotal,
      };
      const updatedExtraCounters = [...player.extraCounters, newCounter];
      const updatedPlayer = { ...player, extraCounters: updatedExtraCounters };
      onPlayerChange(updatedPlayer);
      return;
    }

    const updatedExtraCounters = player.extraCounters.map((counter) => {
      if (counter.type === type) {
        return { ...counter, value: updatedCounterTotal };
      }
      return counter;
    });

    const updatedPlayer = { ...player, extraCounters: updatedExtraCounters };
    onPlayerChange(updatedPlayer);
  };

  return (
    <S.ExtraCountersGrid rotation={player.settings.rotation}>
      {player.settings.useCommanderDamage && (
        <ExtraCounter
          rotation={player.settings.rotation}
          Icon={<CommanderTaxIcon size="8vmin" />}
          type={CounterType.CommanderTax}
          counterTotal={
            player.extraCounters?.find(
              (counter) => counter.type === 'commanderTax'
            )?.value
          }
          setCounterTotal={handleCounterChange}
        />
      )}
      {Boolean(
        player.settings.useCommanderDamage && player.settings.usePartner
      ) && (
        <ExtraCounter
          rotation={player.settings.rotation}
          Icon={<PartnerTaxIcon size="8vmin" />}
          type={CounterType.PartnerTax}
          counterTotal={
            player.extraCounters?.find(
              (counter) => counter.type === 'partnerTax'
            )?.value
          }
          setCounterTotal={handleCounterChange}
        />
      )}
      {player.settings.usePoison && (
        <ExtraCounter
          rotation={player.settings.rotation}
          Icon={<PoisonIcon size="8vmin" />}
          type={CounterType.Poison}
          counterTotal={
            player.extraCounters?.find((counter) => counter.type === 'poison')
              ?.value
          }
          setCounterTotal={handleCounterChange}
        />
      )}
      {player.settings.useEnergy && (
        <ExtraCounter
          rotation={player.settings.rotation}
          Icon={<EnergyIcon size="8vmin" />}
          type={CounterType.Energy}
          counterTotal={
            player.extraCounters?.find((counter) => counter.type === 'energy')
              ?.value
          }
          setCounterTotal={handleCounterChange}
        />
      )}
      {player.settings.useExperience && (
        <ExtraCounter
          rotation={player.settings.rotation}
          Icon={<ExperienceIcon size="8vmin" />}
          type={CounterType.Experience}
          counterTotal={
            player.extraCounters?.find(
              (counter) => counter.type === 'experience'
            )?.value
          }
          setCounterTotal={handleCounterChange}
        />
      )}
    </S.ExtraCountersGrid>
  );
};

export default ExtraCountersBar;
