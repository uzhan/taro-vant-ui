import React from 'react'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { View, Image } from '@tarojs/components'
import { TvIconProps } from '../../../types/icon'

export default class TvIcon extends React.Component<TvIconProps> {
  public static defaultProps: TvIconProps
  public static propTypes: InferProps<TvIconProps>

  public render(): JSX.Element {
    const { name, color, size, classPrefix, customStyle, className, onClick } =
      this.props
    return (
      <View
        className={classNames(
          name?.indexOf('/') !== -1
            ? `${classPrefix} van-icon--image`
            : `${classPrefix} ${classPrefix}-${name}`,
          className
        )}
        style={{ color, fontSize: size, ...customStyle }}
        onClick={onClick}
      >
        {name?.indexOf('/') !== -1 ? (
          <Image
            mode='aspectFit'
            src={name as string}
            className='van-icon__image'
          />
        ) : null}
      </View>
    )
  }
}

TvIcon.defaultProps = {
  name: '',
  dot: false,
  info: '',
  color: 'inherit',
  size: 'inherit',
  customStyle: {},
  classPrefix: 'van-icon'
}

TvIcon.propTypes = {
  name: PropTypes.string,
  dot: PropTypes.bool,
  info: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  customStyle: PropTypes.object,
  classPrefix: PropTypes.string,
  onClick: PropTypes.func
}
