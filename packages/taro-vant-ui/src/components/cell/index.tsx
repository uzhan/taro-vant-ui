import React from 'react'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { View, Navigator } from '@tarojs/components'
import TvIcon from '../icon/index'
import { TvCellProps } from '../../../types/cell'

export default class TvCell extends React.Component<TvCellProps> {
  public static defaultProps: TvCellProps
  public static propTypes: InferProps<TvCellProps>

  public render(): JSX.Element {
    const {
      size,
      center,
      title,
      value,
      label,
      icon,
      titleWidth,
      border,
      url,
      required,
      linkType,
      isLink,
      clickable,
      arrowDirection,
      titleStyle,
      onClick
    } = this.props
    const classObject = {
      [`tv-cell--${size}`]: size,
      'tv-cell--center': center,
      'tv-cell--required': required,
      'tv-cell--clickable': clickable || isLink,
      'tv-cell--borderless': !border
    }

    const slot = (
      <React.Fragment>
        {icon ? (
          <View className='tv-cell__left-icon tv-cell__left-icon-wrap'>
            <TvIcon name={icon} />
          </View>
        ) : null}
        <View
          style={{ minWidth: titleWidth, maxWidth: titleWidth, ...titleStyle }}
          className='tv-cell__title title-class'
        >
          {title}
          {label ? (
            <View className='tv-cell__label label-class'>{label}</View>
          ) : null}
        </View>
        {value || value === 0 ? (
          <View className='tv-cell__value value-class'>{value}</View>
        ) : null}
        {isLink ? (
          <View className='tv-cell__right-icon-wrap right-icon-class tv-cell__right-icon'>
            <TvIcon
              name={arrowDirection ? `arrow-${arrowDirection}` : 'arrow'}
            />
          </View>
        ) : null}
      </React.Fragment>
    )

    return url ? (
      <Navigator
        className={classNames('tv-cell', classObject)}
        hoverClass='tv-cell--hover hover-class'
        hoverStayTime={70}
        openType={linkType}
        url={url}
      >
        {slot}
      </Navigator>
    ) : (
      <View
        className={classNames('tv-cell', classObject)}
        hoverClass='tv-cell--hover hover-class'
        hoverStayTime={70}
        onClick={onClick}
      >
        {slot}
      </View>
    )
  }
}

TvCell.defaultProps = {
  center: false,
  title: '',
  label: '',
  icon: '',
  border: true,
  url: '',
  required: false,
  linkType: 'navigate',
  isLink: false
}

TvCell.propTypes = {
  size: PropTypes.oneOf(['large']),
  center: PropTypes.bool,
  title: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  titleWidth: PropTypes.string,
  titleStyle: PropTypes.object,
  border: PropTypes.bool,
  url: PropTypes.string,
  required: PropTypes.bool,
  linkType: PropTypes.oneOf(['navigate', 'redirect', 'switchTab', 'reLaunch']),
  isLink: PropTypes.bool,
  arrowDirection: PropTypes.oneOf(['left', 'up', 'down']),
  onClick: PropTypes.func
}
