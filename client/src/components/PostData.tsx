export default function PostData(props: {
  likes: number;
  description: string;
  name: string;
  timestamp: string;
}) {
  return (
    <div className="post_data">
      <span>{props.likes}</span>
      <section>
        <span>{props.name}</span>
        <p>{props.description}</p>
      </section>
      <span>{props.timestamp.toLocaleString()}</span>
    </div>
  );
}
