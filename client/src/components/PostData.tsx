export default function PostData(props: {
  likes: number;
  description: string;
  name: string;
  timestamp: string;
  likeUrl: string;
}) {
  return (
    <div className="post_data">
      <section className="likes">
        <span>{props.likes}</span>
        <img className="like_img" src={props.likeUrl} alt="like img" />
      </section>

      <span>{props.name}</span>
      <p>{props.description}</p>
      <span>{props.timestamp.toLocaleString()}</span>
    </div>
  );
}
