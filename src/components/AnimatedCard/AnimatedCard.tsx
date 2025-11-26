import { CSSTransition } from "react-transition-group";
import React, { useRef } from "react";

interface Props {
	children: React.ReactNode;
	index: number;
}

export const AnimatedCard: React.FC<Props> = ({ children, index }) => {
	const nodeRef = useRef<HTMLDivElement | null>(null);

	return (
		<CSSTransition
			in={true}
			appear
			timeout={200 + index * 40}
			classNames="card-fade"
			nodeRef={nodeRef}
		>
			<div ref={nodeRef}>
				{children}
			</div>
		</CSSTransition>
	);
};
