import { Button, FormControl, FormLabel, Switch } from '@mui/material';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GridTemplateAreas } from '../../../Data/GridTemplateAreas';
import {
  InitialSettings,
  createInitialPlayers,
} from '../../../Data/getInitialPlayers';
import { theme } from '../../../Data/theme';
import { useAnalytics } from '../../../Hooks/useAnalytics';
import { Info } from '../../../Icons/generated';
import { Player } from '../../../Types/Player';
import { InfoModal } from '../../Misc/InfoModal';
import { SupportMe } from '../../Misc/SupportMe';
import { H2, Paragraph } from '../../Misc/TextComponents';
import LayoutOptions from './LayoutOptions';

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-bottom: 58px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const StartButtonFooter = styled.div`
  position: fixed;
  bottom: 1rem;
  translate: -50%, -50%;
`;

const playerMarks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
];

const healthMarks = [
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 60,
    label: '60',
  },
];

type StartProps = {
  setInitialGameSettings: (options: InitialSettings) => void;
  setPlayers: (updatedPlayer: Player[]) => void;
  initialGameSettings: InitialSettings | null;
};

const Start = ({
  initialGameSettings,
  setPlayers,
  setInitialGameSettings,
}: StartProps) => {
  const analytics = useAnalytics();
  const [openModal, setOpenModal] = useState(false);
  const [playerOptions, setPlayerOptions] = useState<InitialSettings>(
    initialGameSettings || {
      numberOfPlayers: 4,
      startingLifeTotal: 40,
      useCommanderDamage: true,
      gridAreas: GridTemplateAreas.FourPlayers,
    }
  );

  const doStartGame = () => {
    if (!initialGameSettings) {
      return;
    }

    analytics.trackEvent('game_started', { ...initialGameSettings });

    try {
      document.documentElement.requestFullscreen();
    } catch (error) {
      console.error(error);
    }
    setInitialGameSettings(initialGameSettings);
    setPlayers(createInitialPlayers(initialGameSettings));
  };

  useEffect(() => {
    setInitialGameSettings(playerOptions);
  }, [playerOptions, setInitialGameSettings]);

  const valuetext = (value: number) => {
    return `${value}`;
  };

  const getDefaultLayout = (numberOfPlayers: number) => {
    switch (numberOfPlayers) {
      case 1:
        return GridTemplateAreas.OnePlayerLandscape;
      case 2:
        return GridTemplateAreas.TwoPlayersOppositeLandscape;
      case 3:
        return GridTemplateAreas.ThreePlayers;
      case 4:
        return GridTemplateAreas.FourPlayers;
      case 5:
        return GridTemplateAreas.FivePlayers;
      case 6:
        return GridTemplateAreas.SixPlayers;
      default:
        return GridTemplateAreas.FourPlayers;
    }
  };

  useEffect(() => {
    const defaultLayout = getDefaultLayout(playerOptions.numberOfPlayers);

    setPlayerOptions({
      ...playerOptions,
      gridAreas: defaultLayout,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerOptions.numberOfPlayers]);

  return (
    <MainWrapper>
      <Info
        color={theme.palette.primary.light}
        size="2rem"
        style={{ position: 'absolute', top: '1rem', left: '1rem' }}
        onClick={() => {
          setOpenModal(!openModal);
        }}
      />

      <InfoModal
        closeModal={() => {
          setOpenModal(false);
        }}
        isOpen={openModal}
      />

      <SupportMe />

      <H2>Life Trinket</H2>
      <FormControl focused={false} style={{ width: '80vw' }}>
        <FormLabel>Number of Players</FormLabel>
        <Slider
          title="Number of Players"
          max={6}
          min={1}
          aria-label="Custom marks"
          defaultValue={initialGameSettings?.numberOfPlayers ?? 4}
          getAriaValueText={valuetext}
          step={null}
          marks={playerMarks}
          onChange={(_e, value) => {
            setPlayerOptions({
              ...playerOptions,
              numberOfPlayers: value as number,
            });
          }}
        />
        <FormLabel>Starting Health</FormLabel>
        <Slider
          title="Starting Health"
          max={60}
          min={20}
          aria-label="Custom marks"
          defaultValue={initialGameSettings?.startingLifeTotal ?? 40}
          getAriaValueText={valuetext}
          step={10}
          marks={healthMarks}
          onChange={(_e, value) =>
            setPlayerOptions({
              ...playerOptions,
              startingLifeTotal: value as number,
            })
          }
        />
        <FormLabel>Commander</FormLabel>
        <Switch
          checked={playerOptions.useCommanderDamage}
          defaultChecked={initialGameSettings?.useCommanderDamage ?? true}
          onChange={(_e, value) =>
            setPlayerOptions({
              ...playerOptions,
              useCommanderDamage: value,
            })
          }
        />

        <FormLabel>Layout</FormLabel>

        <LayoutOptions
          numberOfPlayers={playerOptions.numberOfPlayers}
          gridAreas={playerOptions.gridAreas}
          onChange={(gridAreas) =>
            setPlayerOptions({ ...playerOptions, gridAreas })
          }
        />
      </FormControl>

      <Paragraph style={{ textAlign: 'center', maxWidth: '75%' }}>
        If you're on iOS, this page works better if you{' '}
        <strong>hide the toolbar</strong> or{' '}
        <strong>add the app to your home screen</strong>.
      </Paragraph>
      <StartButtonFooter>
        <Button
          size="large"
          variant="contained"
          onClick={doStartGame}
          style={{ width: '90dvw' }}
        >
          START GAME
        </Button>
      </StartButtonFooter>
    </MainWrapper>
  );
};

export default Start;
