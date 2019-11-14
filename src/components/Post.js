import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Post = ({ picture, author, time, text, likes, shares, likeClick, shareClick }) => (
	<div className="post_wrapper">
		<Header picture={picture} author={author} time={time} />
		<div className="text_container">
			<p>{text}</p>
		</div>
		<Footer likes={likes} shares={shares} likeClick={likeClick} shareClick={shareClick} />
	</div>
);

export default Post;
