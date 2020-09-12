import React, {memo} from 'react';
import ShareIcon from '../../images/share.svg';
import CopyIcon from '../../images/copy.svg';

const navigatorHasShare = navigator.share;

const URL = 'http://192.168.0.114:3000';

function Actions({post, subject}){
  const {id, title} = post;

  const shareInfo = () => {
    navigator.share({
      title: `React PWA - ${subject}`,
      text: title,
      url: URL
    });
  }

  const copyInfo = () => {
    navigator.clipboard.writeText(`${title} - *Learn more about in* ${URL}/${subject}/${id}`);
  }

  const renderActions = () => {
    const action = navigatorHasShare ? shareInfo : copyInfo;

    const icon = navigatorHasShare ? ShareIcon : CopyIcon;

    return (
      <img alt="icon" src={icon} className="share-icon" onClick={action} />
    )
  }

  return (
    <div className="share">
      {renderActions()}
    </div>
  )

}

export default memo(Actions);