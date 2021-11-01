import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { TvLoadingProps } from '../../../types/loading'

export default class TvLoading extends React.Component<TvLoadingProps> {
  public static defaultProps: TvLoadingProps
  public static propTypes: InferProps<TvLoadingProps>

  public render(): JSX.Element {
    const { color, type, size, textSize, vertical, className, customStyle } =
      this.props
    const ringStyle = {
      color,
      width: size,
      height: size,
      ...customStyle
    }
    const rootClassName = 'tv-loading'

    return (
      <View
        className={classNames(
          rootClassName,
          {
            [`${rootClassName}--vertical`]: vertical
          },
          className
        )}
      >
        <View
          className={`tv-loading__spinner tv-loading__spinner--${type}`}
          style={ringStyle}
        >
          {type === 'spinner'
            ? Array.from({ length: 12 }).map((item: number) => (
                <View key={item} className='tv-loading__dot' />
              ))
            : null}
          <View className='tv-loading__text' style={{ fontSize: textSize }}>
            {this.props.children}
          </View>
        </View>
      </View>
    )
  }
}

TvLoading.defaultProps = {
  size: 30,
  color: '#c9c9c9',
  type: 'circular',
  textSize: 14,
  vertical: false
}

TvLoading.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  type: PropTypes.oneOf(['spinner', 'circular']),
  textSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  vertical: PropTypes.bool
}
