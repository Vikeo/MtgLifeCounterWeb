import { useRef, useState } from 'react';
import { TwcComponentProps, twc } from 'react-twc';
import { lifeLongPressMultiplier } from '../../Data/constants';
import { Rotation } from '../../Types/Player';
import { MAX_TAP_MOVE_DISTANCE } from './CommanderDamage';

type RotationButtonProps = TwcComponentProps<'div'> & {
  $align?: string;
  $rotation?: number;
};

const LifeCounterButtonTwc = twc.button`
  h-full
  w-full
  flex
  text-lifeCounter-text
  font-semibold
  bg-transparent
  border-none
  outline-none
  cursor-pointer
  justify-center
  items-center
  select-none
  webkit-user-select-none
  `;

const TextContainer = twc.div<RotationButtonProps>((props) => [
  'relative',
  props.$rotation === Rotation.SideFlipped || props.$rotation === Rotation.Side
    ? props.$align === 'right'
      ? '-rotate-90 bottom-1/4 top-auto'
      : '-rotate-90 top-1/4'
    : 'top-auto',
  props.$rotation === Rotation.Flipped || props.$rotation === Rotation.Normal
    ? props.$align === 'right'
      ? 'left-1/4'
      : 'right-1/4'
    : '',
]);

type LifeCounterButtonProps = {
  lifeTotal: number;
  setLifeTotal: (lifeTotal: number) => void;
  rotation: number;
  operation: 'add' | 'subtract';
  increment: number;
};

const LifeCounterButton = ({
  lifeTotal,
  setLifeTotal,
  rotation,
  operation,
  increment,
}: LifeCounterButtonProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [timeoutFinished, setTimeoutFinished] = useState(false);
  const [hasPressedDown, setHasPressedDown] = useState(false);
  const downPositionRef = useRef({ x: 0, y: 0 });

  const handleLifeChange = (increment: number) => {
    setLifeTotal(lifeTotal + increment);
  };

  const handleDownInput = (event: React.PointerEvent<HTMLButtonElement>) => {
    downPositionRef.current = { x: event.clientX, y: event.clientY };
    setTimeoutFinished(false);
    setHasPressedDown(true);
    timeoutRef.current = setTimeout(() => {
      handleLifeChange(increment * lifeLongPressMultiplier);
      setTimeoutFinished(true);
    }, 500);
  };

  const handleUpInput = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!(hasPressedDown && !timeoutFinished)) {
      return;
    }

    const upPosition = { x: event.clientX, y: event.clientY };

    const hasMoved =
      Math.abs(upPosition.x - downPositionRef.current.x) >
        MAX_TAP_MOVE_DISTANCE ||
      Math.abs(upPosition.y - downPositionRef.current.y) >
        MAX_TAP_MOVE_DISTANCE;

    if (hasMoved) {
      return;
    }

    clearTimeout(timeoutRef.current);
    handleLifeChange(operation === 'add' ? 1 : -1);
    setHasPressedDown(false);
  };

  const handleLeaveInput = () => {
    setTimeoutFinished(true);
    clearTimeout(timeoutRef.current);
    setHasPressedDown(false);
  };

  const fontSize =
    rotation === Rotation.SideFlipped || rotation === Rotation.Side
      ? '8vmax'
      : '12vmin';

  return (
    <LifeCounterButtonTwc
      onPointerDown={handleDownInput}
      onPointerUp={handleUpInput}
      onPointerLeave={handleLeaveInput}
      onContextMenu={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
      }}
      style={{ fontSize }}
      aria-label={`${operation === 'add' ? 'Add' : 'Subtract'} life`}
    >
      <TextContainer
        $rotation={rotation}
        $align={operation === 'add' ? 'right' : 'left'}
      >
        {operation === 'add' ? '\u002B' : '\u2212'}
      </TextContainer>
    </LifeCounterButtonTwc>
  );
};

export default LifeCounterButton;
