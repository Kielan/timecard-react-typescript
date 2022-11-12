import React, { useCallback, useContext, useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import ReactDOM from 'react-dom';

export interface Context {
  addOrUpdate(id: string): void;
  remove(id: string): void;
  getStaggerPixels(id: string): number;
}

export const ModalContext = React.createContext({} as Context);

export enum ModalTransition {
  NONE = 'NONE',
  SCALE = 'SCALE',
  TOP_DOWN = 'TOP_DOWN',
  BOTTOM_UP = 'BOTTOM_UP',
}

const ModalTransitionConfig: { [key in ModalTransition]: object } = {
  NONE: {
    from: { transform: 'scale(1)' },
    enter: { transform: 'scale(1)' },
    leave: { transform: 'scale(1)' },
  },
  SCALE: {
    from: { transform: 'scale(0)', opacity: 0 },
    enter: { transform: 'scale(1)', opacity: 1 },
    leave: { transform: 'scale(0)', opacity: 0 },
    config: { tension: 800, friction: 25 },
  },
  TOP_DOWN: {
    from: { transform: 'translateY(-150%)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(-150%)' },
    config: { tension: 500, friction: 25 },
  },
  BOTTOM_UP: {
    from: { transform: 'translateY(100%)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(100%)' },
    config: { tension: 500, friction: 25 },
  },
};

export const useModalTransition = (
  transition: ModalTransition = ModalTransition.SCALE,
  isOpen: boolean
) => {
  return useTransition(isOpen, null, ModalTransitionConfig[transition]);
};

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};

export const useModalContext = () => useContext<Context>(ModalContext);

export interface ModalProps {
  id: string;
  isOpen: boolean;
  onBackdropClick?: () => void;
  footer?: React.ReactNode;
  transition?: ModalTransition;
  transformDistanceOffset?: number;
  modalClassName?: string;
  modalZIndex?: number;
}

function hasDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

export const Modal: React.FC<ModalProps> = modal => {
  const { addOrUpdate, remove, getStaggerPixels } = useModalContext();
  const {
    id,
    isOpen,
    transformDistanceOffsetX,
    transformDistanceOffsetY
  } = modal;
  const container = hasDOM()
    ? document.getElementById('react-simple-modal-container')
    : null;
  const transformDistanceX = transformDistanceOffsetX ? getStaggerPixels(id) + transformDistanceOffsetX : getStaggerPixels(id);
  const transformDistanceY = transformDistanceOffsetY ? getStaggerPixels(id) + transformDistanceOffsetY : getStaggerPixels(id);

  useEffect(() => {
    isOpen ? addOrUpdate(id) : remove(id);
    return () => remove(id);
  }, [id, isOpen]);

  return container
    ? ReactDOM.createPortal(
        <ModalContainer
	    transformDistanceX={transformDistanceX}
	    transformDistanceY={transformDistanceY} {...modal} />,
        container
    ) : null;
};

interface ModalContainerProps {
  transformDistanceX: number;
  transformDistanceY: number;
}

export const ModalContainer: React.FC<ModalProps & ModalContainerProps> = ({
  children,
  isOpen,
  footer,
  transition,
  onBackdropClick,
  transformDistanceX,
  transformDistanceY,
  modalClassName,
  modalZIndex,
}) => {
  const modalTransitions = useModalTransition(transition, isOpen);

  return (
    <>
      {modalTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="rsm-fixed rsm-inset-0 rsm-flex rsm-justify-center rsm-items-center rsm-z-40"
              onClick={onBackdropClick}
            >
              <div
                className={`bg-gray-900 rsm-rounded-md rsm-overflow-auto rsm-max-h-full rsm-w-full md:rsm-w-12 xl:rsm-w-2 rsm-opactiy-100 rsm-shadow-lg rsm-z-40 rsm-border rsm-border-gray-200 rsm-flex rsm-flex-col ${modalClassName ??
                  ''}`}
                style={{
                  minHeight: '100%',
                  transition:
                    transition === ModalTransition.NONE
                      ? ''
                      : 'transform ease-in-out .2s',
                  transform: `translate(${transformDistanceX}px, ${transformDistanceY}px)`,
                  transformOrigin: 'center',
                  zIndex: modalZIndex,
                }}
                onClick={e => e.stopPropagation()}
              >
                <div className="rsm-flex-1">{children}</div>
                {!footer ? null : (
                  <div className="rsm-bg-gray-200 rsm-p-4">{footer}</div>
                )}
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export interface ModalProviderProps {
  backdropClassName?: string;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
  backdropClassName,
}) => {
  const [openModals, setOpenModals] = useState<string[]>([]);

  const addOrUpdate = useCallback((_id: string) => {
    setOpenModals(prev => {
      const exists = prev.some(id => id === _id);
      return exists ? prev : [...prev, _id];
    });
  }, []);

  const remove = useCallback((_id: string) => {
    setOpenModals(prev => prev.filter(id => id !== _id));
  }, []);

  const modalOpen = openModals.length > 0;

  const getStaggerPixels = useCallback(
    (_id: string) => {
      const index = openModals.findIndex(id => id === _id);
      return openModals.length * 8 - (index + 1) * 8;
    },
    [openModals]
  );

  return (
    <ModalContext.Provider value={{ addOrUpdate, remove, getStaggerPixels }}>
      {children}
      {!modalOpen ? null : (
        <div
          className={
            'rsm-fixed rsm-inset-0 rsm-opacity-50 rsm-z-40 rsm-bg-gray-700 ' +
              backdropClassName || ''
          }
        />
      )}
      <div id="react-simple-modal-container" />
    </ModalContext.Provider>
  );
};

