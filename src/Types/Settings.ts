import { GridTemplateAreas } from '../Data/GridTemplateAreas';

export type Settings = {
  keepAwake: boolean;
  showStartingPlayer: boolean;
  goFullscreenOnStart: boolean;
};

export type InitialGameSettings = {
  startingLifeTotal: number;
  useCommanderDamage: boolean;
  gameFormat: GameFormat;
  numberOfPlayers: number;
  gridAreas: GridTemplateAreas;
};

export enum GameFormat {
  Commander = 'commander',
  Standard = 'standard',
  TwoHeadedGiant = 'two-headed-giant',
}
