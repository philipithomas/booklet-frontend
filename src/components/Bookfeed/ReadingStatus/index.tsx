/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { ReactEventHandler } from 'react';
import * as React from 'react';
import { colors } from '../../../styles/colors';
import ArrowDownIcon from '../../SVG/ArrowDown.svg';
import { BookFeedStyles } from '../styles';
import * as styles from './styles';
import { PostStatus } from '../../Post/Summary';

export interface ReadingStatusProps {
  status: PostStatus;
  onClickStatus?: ReactEventHandler;
}

export const ReadingStatus: React.FunctionComponent<ReadingStatusProps> = props => (
  <div css={BookFeedStyles.wrapper}>
    <div css={BookFeedStyles.label}>Status</div>
    <div css={styles.dropdown} onClick={props.onClickStatus}>
      <span>{props.status}</span>
      <ArrowDownIcon css={styles.arrowDownIcon} fill={colors.gray_20} />
    </div>
  </div>
);
