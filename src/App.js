import React from "react";
import Post from "./components/Post";
// @ts-ignore
import profile from "./assets/perfil.jpg";
// @ts-ignore
import profile2 from "./assets/perfil2.jpg";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [
				{
					author: "Fernando Augusto Rodrigues de Almeida Azevedo",
					picture: profile,
					text:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id alias quo aspernatur, omnis vero eius impedit, nobis sint, odit mollitia consectetur tempora quaerat. Laborum harum deserunt autem non commodi. Libero porro laudantium nulla pariatur accusantium consectetur quisquam beatae eum perferendis incidunt et officia nihil est, hic, nobis praesentium? Voluptas facere ipsam, enim nihil aperiam, rem molestiae earum unde praesentium repellat esse reiciendis. Corporis sequi quos nobis praesentium tempora officia pariatur. Molestias, mollitia atque minima eaque beatae labore blanditiis corporis facere eius pariatur deserunt sunt, inventore molestiae? At ea ad vitae perspiciatis provident! Saepe, vel doloribus, pariatur quasi illum dolorem illo corporis accusamus rem aliquam magni? Voluptatibus, obcaecati. Rerum, accusantium doloribus in incidunt minus perspiciatis, modi esse sed debitis quod porro nostrum id quas quibusdam qui earum voluptas animi voluptate repellendus perferendis voluptatem magni illo. Distinctio, placeat. Voluptas, rem tempora deleniti possimus voluptates, aut quas quo officiis qui harum sint, quis quidem fugit tempore pariatur non rerum? Ducimus, obcaecati. Mollitia, iusto reprehenderit labore corporis tenetur architecto vel eum cum quae corrupti obcaecati nobis quis perferendis non omnis hic autem doloremque sapiente, eos quod, aliquid error quia in. Perspiciatis voluptate vel asperiores cum totam porro praesentium blanditiis amet, delectus, dolores libero.",
					time: 20,
					likes: 22,
					shares: 45
				},
				{
					author: "Victor Hugo Rodrigues de Almeida Azevedo",
					picture: profile,
					text:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis nulla non quis nisi iure praesentium numquam. Ab dolore officiis sequi illo mollitia, cum aliquid nihil in, ducimus rem placeat perspiciatis! Natus consequuntur quaerat totam saepe in at sequi vitae maiores ipsa perferendis minima reiciendis, enim quis officiis dignissimos id harum iste alias, repudiandae aliquid minus temporibus, optio pariatur! Molestias non debitis nisi, veritatis optio nostrum vel quod ratione nam dolorem. Repellat natus sequi, facere tempore molestiae, nisi magni ipsa aliquid quo eveniet placeat ut harum animi. Vero alias voluptatibus autem quo facilis aliquid voluptas hic laborum quasi, officia accusantium? Nam aliquam eaque, magnam possimus aut ab corporis assumenda iure libero quibusdam optio ipsam, exercitationem nemo aperiam quis, tempore commodi in non est. Sequi fugiat in id unde maxime inventore similique ratione delectus repudiandae aut laboriosam repellendus, eius itaque consequatur ullam placeat voluptate aspernatur ipsam consectetur. Officia laborum quisquam excepturi omnis maiores dicta ipsa? Perferendis tenetur quis nulla repudiandae aliquam tempora dolores eum obcaecati exercitationem voluptates labore alias omnis quos, ab maxime numquam perspiciatis consequatur laborum deserunt. Mollitia, unde! Aspernatur pariatur iusto vitae deleniti aut nisi sed architecto esse? Perspiciatis nam in facilis perferendis reprehenderit dolores nihil corrupti dolorem doloribus, veritatis corporis consequatur incidunt tempora itaque cumque ea est voluptatum?",
					time: 15,
					likes: 74,
					shares: 95
				},
				{
					author: "Ana Carolina Rodrigues de Almeida Azevedo",
					picture: profile2,
					text:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id alias quo aspernatur, omnis vero eius impedit, nobis sint, odit mollitia consectetur tempora quaerat. Laborum harum deserunt autem non commodi. Libero porro laudantium nulla pariatur accusantium consectetur quisquam beatae eum perferendis incidunt et officia nihil est, hic, nobis praesentium? Voluptas facere ipsam, enim nihil aperiam, rem molestiae earum unde praesentium repellat esse reiciendis. Corporis sequi quos nobis praesentium tempora officia pariatur. Molestias, mollitia atque minima eaque beatae labore blanditiis corporis facere eius pariatur deserunt sunt, inventore molestiae? At ea ad vitae perspiciatis provident! Saepe, vel doloribus, pariatur quasi illum dolorem illo corporis accusamus rem aliquam magni? Voluptatibus, obcaecati. Rerum, accusantium doloribus in incidunt minus perspiciatis, modi esse sed debitis quod porro nostrum id quas quibusdam qui earum voluptas animi voluptate repellendus perferendis voluptatem magni illo. Distinctio, placeat. Voluptas, rem tempora deleniti possimus voluptates, aut quas quo officiis qui harum sint, quis quidem fugit tempore pariatur non rerum? Ducimus, obcaecati. Mollitia, iusto reprehenderit labore corporis tenetur architecto vel eum cum quae corrupti obcaecati nobis quis perferendis non omnis hic autem doloremque sapiente, eos quod, aliquid error quia in. Perspiciatis voluptate vel asperiores cum totam porro praesentium blanditiis amet, delectus, dolores libero.",
					time: 5,
					likes: 38,
					shares: 12
				}
			]
		};
	}

	render() {
		const updateLike = (index) => {
			const array = this.state.posts;
			array[index] = { ...array[index], likes: this.state.posts[index].likes + 1 };
			this.setState({ array });
		};

		const updateShare = (index) => {
			const array = this.state.posts;
			array[index] = { ...array[index], shares: this.state.posts[index].shares + 1 };
			this.setState({ array });
		};

		return (
			<div>
				{this.state.posts.map((post, index) => (
					<Post
						picture={post.picture}
						author={post.author}
						time={post.time}
						text={post.text}
						likes={post.likes}
						shares={post.shares}
						likeClick={() => updateLike(index)}
						shareClick={() => updateShare(index)}
						key={index}
					/>
				))}
			</div>
		);
	}
}
