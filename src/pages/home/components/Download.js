import React from 'react';
import { Icon } from 'antd';
import Pic from '../../../statics/qrcode.png'
import { DownloadWrapper, DownloadInfo, DownloadInfoTitle, DownloadInfoDesc, DownloadFade } from '../style';

const Download = (props) => (
  <DownloadWrapper>
    <img src={Pic} alt="" />
    <DownloadInfo>
      <DownloadInfoTitle>
        下载简书手机App
          <Icon className='antd-icon' type="right" theme="outlined" />
      </DownloadInfoTitle>
      <DownloadInfoDesc>随时随地发现和创作内容</DownloadInfoDesc>
    </DownloadInfo>
    <DownloadFade className='fade'>
      <img src={Pic} alt="" />
    </DownloadFade>
  </DownloadWrapper>
)

export default Download;