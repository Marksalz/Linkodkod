export default function PostImg(props: { imgSrc: string; class: string }) {
  return (
    <>
      <img className={props.class} src={props.imgSrc} alt="post img" />
    </>
  );
}
