import React from 'react';

import {
  CirclePlus,
  Circle,
  CircleHalf,
  CircleFull,
  CircleArrowLeft,
  CircleArrowRight,
  CircleX,
  Square,
  PencilPage,
  DownloadIcon,
  LockIcon,
  SearchIcon,
  SquareHalf,
  SquareFull,
  SquareLeftArrow,
  SquareRightArrow,
  SquareX,
  Diamond,
  DiamondHalf,
  DiamondFull,
  DiamondLeft,
  DiamondRight,
  DiamondX,
  Minus,
  DollarBill,
  Astrick,
  Exclamation1,
  Exclamation2,
  Exclamation3,
  QuestionMark,
  InitNote,
} from '../../../../Components/icons';
import { useJournalRefs } from '../../../../Services/Reference';

const iconComponents = {
  'bullet-init-note': InitNote,
  'circle-init-task': Circle,
  'circle-started-task': CircleHalf,
  'circle-completed-task': CircleFull,
  'circle-migrated-task': CircleArrowLeft,
  'circle-delegated-task': CircleArrowRight,
  'circle-cancelled-task': CircleX,
  'square-init-event': Square,
  'square-started-event': SquareHalf,
  'square-completed-event': SquareFull,
  'square-migrated-event': SquareLeftArrow,
  'square-delegated-event': SquareRightArrow,
  'square-cancelled-event': SquareX,
  'diamond-init-appointment': Diamond,
  'diamond-started-appointment': DiamondHalf,
  'diamond-completed-appointment': DiamondFull,
  'diamond-migrated-appointment': DiamondLeft,
  'diamond-delegated-appointment': DiamondRight,
  'diamond-cancelled-appointment': DiamondX,
  'no context': Astrick,
  reminder: Exclamation1,
  important: Exclamation3,
  question: QuestionMark,
  money: DollarBill,
  PencilPage,
  DownloadIcon,
  LockIcon,
  SearchIcon,
  Minus,
  Exclamation2,
};

export const getIconComponent = (iconName, styles) => {
  const IconComponent = iconComponents[iconName];
  return <IconComponent styles={styles} />;
};

export const FloatingMenu = ({ floatingMenuPosition, closeMenu, selectIcon, refName, getIconName }) => {
  const { data } = useJournalRefs(refName);

  return (
    <div
      className="absolute z-20 flex flex-col w-56 p-2 bg-gray-100 border border-gray-400 rounded"
      style={{
        top: `${floatingMenuPosition.y + 30}px`,
        left: `${floatingMenuPosition.x + 12}px`,
      }}
    >
      <button onClick={closeMenu} className="self-end text-lg p-1">
        &times;
      </button>
      <p className="pb-2 mx-auto text-sm">ADD A TAG</p>
      <div className="flex flex-col items-start mt-2">
        {data &&
          data?.map((ref, idx) => {
            return (
              <button
                key={`icon_button_${idx}`}
                onClick={() => {
                  selectIcon(ref.id);
                }}
                className="icon_button"
              >
                {getIconComponent(getIconName(ref), 'h-4')}
                <span className="pl-2 text-left">{getIconName(ref)}</span>
              </button>
            );
          })}
      </div>
    </div>
  );
};
