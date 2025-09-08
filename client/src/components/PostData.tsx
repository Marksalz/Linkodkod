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
        <img className="like_img" src="src/assets/likeImg.png" alt="like img" />
      </section>

      <span>{props.name}</span>
      <p>{props.description}</p>
      <span>{props.timestamp.toLocaleString()}</span>
    </div>
  );
}
