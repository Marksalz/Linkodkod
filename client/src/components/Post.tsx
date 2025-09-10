import PostData from "./PostData";
import PostImg from "./PostImg";
import "../styles/viewPost.css";
export default function Post(props: {
  postInfo: React.ComponentState;
  likeUrl: string;
  onClick?: (id: any) => void;
  class: string;
}) {
  return (
    <div className={props.class} onClick={props.onClick}>
      <PostImg
        class={props.class === "single_post" ? "single_img" : "multi_img"}
        imgSrc={props.postInfo.imgSrc}
      />
      <PostData
        likes={props.postInfo.likes}
        description={props.postInfo.description}
        name={props.postInfo.name}
        timestamp={props.postInfo.timestamp}
        likeUrl={props.likeUrl}
      />
    </div>
  );
}
