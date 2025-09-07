export default function PostImg(props: { imgSrc: string }) {
  return (
    <>
      <img className="post_img" src={props.imgSrc} alt="post img" />
    </>
  );
}
