import React from 'react';
import PropTypes from 'prop-types';

const CommentCount = ({ commentCount }) => {
  const appendS = commentCount !== 1 && 's';
  const countColor = commentCount > 0 ? 'text-danger' : 'text-muted';
  return (
    <div>
      <small className={countColor}>{commentCount}</small>
      <small className="text-muted"> comment{appendS}</small>
    </div>
  );
};

CommentCount.propTypes = {
  commentCount: PropTypes.number.isRequired,
};

export default CommentCount;
