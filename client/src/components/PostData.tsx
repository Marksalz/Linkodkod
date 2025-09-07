export default function PostData(props: {
  likes: number;
  description: string;
  name: string;
  timestamp: string;
}) {
  return (
    <div className="post_data">
      <section>
        <span>{props.likes}</span>
        <img
          className="like_img"
          src="https://lh5.googleusercontent.com/proxy/yKF3xtQ_jplnFBlc8A5kz8CQyfxUJtOAC1zGf5zL7UP4_bN1nsB-TFYiHyh_i9YWJhIfoVhheiRUQ97qSDmFEjU78dJwoIyLlgvv8coMhre7CQ"
          alt="like img"
        />
      </section>

      <span>{props.name}</span>
      <p>{props.description}</p>
      <span>{props.timestamp.toLocaleString()}</span>
    </div>
  );
}
