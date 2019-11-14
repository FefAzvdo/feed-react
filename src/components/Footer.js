// @ts-nocheck
import React from "react";
// @ts-ignore
import like_icon from "../assets/like.png";
//@ts-ignore
import share_icon from "../assets/share.png";

import ReactionButton from "../components/ReactionButton";

const Footer = ({ likes, shares, likeClick, shareClick }) => {
	return (
		<div className="footer_wrapper">
			<div className="footer_indicators">
				<ReactionButton
					onClick={likeClick}
					reactionIcon={like_icon}
					reactionNumbers={likes}
					reactionText="curtidas"
				/>
				<ReactionButton
					onClick={shareClick}
					reactionIcon={share_icon}
					reactionNumbers={shares}
					reactionText="compartilhamentos"
				/>
			</div>
		</div>
	);
};

export default Footer;
