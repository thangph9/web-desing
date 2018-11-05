import React, { PureComponent } from 'react';
import { FormattedMessage, formatMessage } from 'umi/locale';
import { Spin, Tag, Menu, Icon, Dropdown, Avatar, Tooltip } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import SelectLang from '../SelectLang';
import styles from './index.less';

export default class GlobalHeaderRight extends PureComponent {
 
  render() {
    const {
      currentUser,
      onMenuClick,
      onNoticeClear,
      theme,
    } = this.props;
    
    
    return (
      <div>
            
      </div>
    );
  }
}
