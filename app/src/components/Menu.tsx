import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

type MenuState = 'opened' | 'closed';

interface MenuProps {
	state: MenuState
	onChange(m: MenuState): any
	children?: React.ReactNode
}

export default ({state, onChange, children}: MenuProps) => {
	const closeMenu = () => onChange('closed');

	const [mouseClose, setMouseClose] = useState<number | undefined>();
	const [mouseDelta, setMouseDelta] = useState(0);
	const [mouseOrientation, setMouseOrientation] = useState(0);
	const [touchStartX, setTouchStartX] = useState(0);

	const isMouseActive = mouseClose != undefined;
	const navMaxWidth = window.innerWidth * 10 / 12;
	const navWidth = navMaxWidth - mouseDelta;
	const opacity = 0.75 * navWidth / navMaxWidth;

	const startMouseClose = () => {
		setMouseDelta(0);
		setMouseClose(0);
		setMouseOrientation(0);
	};
	
	const moveMouseClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (!isMouseActive) return;
		
		e.preventDefault();
		const movementX = e.movementX;
		setMouseOrientation(movementX);
		setMouseDelta(delta => Math.max(0, delta - movementX));
	};

	const endMouseClose = () => {
		if (!isMouseActive) return;

		if (mouseOrientation < 0) closeMenu();
		setMouseClose(undefined);
		setMouseDelta(0);
		setMouseOrientation(0);
	};

	
	const startTouchClose = (e: React.TouchEvent<HTMLElement>) => {
		setMouseDelta(0);
		setMouseClose(e.changedTouches[0].identifier);
		setTouchStartX(e.changedTouches[0].clientX);
		setMouseOrientation(0);
	}
	const moveTouchClose = (e: React.TouchEvent<HTMLElement>) => {
		if (!isMouseActive) return;
		
		const t: React.Touch = [].find.call(e.changedTouches, (t: React.Touch) => t.identifier == mouseClose)!;
		const delta = Math.max(0, touchStartX - t.clientX);
		setMouseDelta(delta);
		setMouseOrientation(mouseDelta - delta);
	}
	
	const startOpenTouchClose = (e: React.TouchEvent<HTMLElement>) => {
		const navWidth = window.innerWidth * 10/12;
		setMouseDelta(navWidth);
		setMouseClose(e.changedTouches[0].identifier);
		setTouchStartX(e.changedTouches[0].clientX + navWidth);
		setMouseOrientation(0);
		onChange('opened');
	}

	// console.log(isMouseActive, opacity, navWidth, navMaxWidth);
	return (
		<Transition in={state == 'opened'} timeout={500}>
			{state =>
				<>
					<div
						className="fixed z-20 inset-y-0 left-0 w-2"
						onTouchStart={startOpenTouchClose}
						onTouchMove={moveTouchClose}
						onTouchEnd={endMouseClose}>
					</div>
					<div
						data-state={state}
						className={'fixed z-20 inset-0 bg-black ease-in-out'  + (isMouseActive ? '' : ' transition-opacity duration-500')}
						style={{opacity: state.startsWith('enter') ? opacity : 0, right: state == 'exited' ? 'auto' : 0}}
						onClick={closeMenu}>
					</div>
					<nav
						onMouseDown={startMouseClose}
						onMouseMove={moveMouseClose}
						onMouseLeave={endMouseClose}
						onMouseUp={endMouseClose}

						onTouchStart={startTouchClose}
						onTouchMove={moveTouchClose}
						onTouchEnd={endMouseClose}

						className={'flex flex-col fixed z-20 inset-y-0 left-0 w-10/12 bg-white shadow-md select-none ease-in-out' + (isMouseActive ? '' : ' transition-transform duration-500')}
						style={{transform: 'translateX(' + (state.startsWith('exit') ? '-100%' : 'calc(' + navWidth + 'px - 100%)') + ')'}}
						>
						{children}
					</nav>
				</>
			}
		</Transition>
	);
}
