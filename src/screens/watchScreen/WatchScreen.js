import React, { useEffect } from "react";
import "./_watchScreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import Comments from "../../components/comments/Comments";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRelatedVideos,
  getVideoById,
} from "../../redux/actions/videos.action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.selectedVideo);

  const { video, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getRelatedVideos(id));
  }, [id, dispatch]);

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={videos?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={videos} videoId={id} />
        ) : (
          <h1>Loading....</h1>
        )}

        <Comments
          videoId={id}
          totalComments={videos?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!loading ? (
          video
            ?.filter((vid) => vid.snippet)
            .map((vid) => <VideoHorizontal video={vid} key={vid.id.videoId} />)
        ) : (
          <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="130px" count={15} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

export default WatchScreen;
