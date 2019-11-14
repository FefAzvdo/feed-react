import React from "react";

const ReactionButton = ({ onClick, reactionNumbers, reactionText, reactionIcon }) => {
	return (
		<div className="footer_reaction_icon">
			<button onClick={onClick}>
				<img src={reactionIcon} alt="Icone do botão" className="footer_icon" />
			</button>
			<p>
				{reactionNumbers} {reactionText}
			</p>
		</div>
	);
};

export default ReactionButton;
