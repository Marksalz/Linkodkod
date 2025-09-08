import type PostInfo from "../interfaces/postDataType";
import PostData from "./PostData";
import PostImg from "./PostImg";

export default function Post(props: { postInfo: PostInfo }) {
  
  return (
    <div className="post_card">
      <PostImg imgSrc={props.postInfo.imgSrc} />
      <PostData
        likes={props.postInfo.likes}
        description={props.postInfo.description}
        name={props.postInfo.name}
        timestamp={props.postInfo.timestamp}
      />
    </div>
  );
}
