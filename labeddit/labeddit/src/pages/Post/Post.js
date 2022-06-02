import React from "react";
import useProtectedPage from "../../hooks/UseProtectedPage";
import useRequestData from "../../hooks/UseRequestData";
import { URL_BASE} from "../../constants/Urls";
import { useParams } from "react-router-dom";
import { ContainerComments, ContainerPost } from "./Styled";
import CommentCard from "../../components/cardpost/commentCard";

const Post = (props) => {
  useProtectedPage();
  const params = useParams();

  const comments = useRequestData(
    [],
    `${URL_BASE}/posts/${params.id}/comments`
  );
  console.log("Comments", comments);

  const commentsCards = comments.map((comment) => {
    return <CommentCard comment={comment} />;
  });
  return (
    <ContainerPost>
      <h2>Comentários</h2>
      <ContainerComments>{commentsCards}</ContainerComments>
    </ContainerPost>
  );
};
export default Post;