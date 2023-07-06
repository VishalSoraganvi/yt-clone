import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../../redux/actions/videos.action";
import { Container } from "react-bootstrap";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function SubscriptionScreen() {
  const dispatch = useDispatch();

  const { videos, loading } = useSelector(
    (state) => state.subscriptionsChannel
  );

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id} subScreen />
        ))
      ) : (
        <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
}

export default SubscriptionScreen;
