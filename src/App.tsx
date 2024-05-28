import { twc } from 'react-twc';
import { EmergencyResetButton } from './Components/LifeTrinket';
import { Play } from './Components/Views/Play';
import { GlobalSettingsProvider } from './Providers/GlobalSettingsProvider';
import { PlayersProvider } from './Providers/PlayersProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartMenu from './Components/Views/StartMenu/StartMenu';

const PlayWrapper = twc.div`relative z-0 max-w-fit max-h-fit portrait:rotate-90`;

const StartWrapper = twc.div`max-w-fit max-h-fit`;

const App = () => {
  return (
    <BrowserRouter>
      <PlayersProvider>
        <GlobalSettingsProvider>
          <Routes>
            <Route
              path="/"
              Component={() => (
                <StartWrapper>
                  <StartMenu />
                </StartWrapper>
              )}
            />
            <Route
              path="/play"
              Component={() => (
                <PlayWrapper>
                  <Play />
                  <EmergencyResetButton />
                </PlayWrapper>
              )}
            />
          </Routes>
        </GlobalSettingsProvider>
      </PlayersProvider>
    </BrowserRouter>
  );
};

export default App;
