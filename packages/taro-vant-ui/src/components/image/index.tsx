import React from 'react'
import classNames from 'classnames'
import PropType, { InferProps } from 'prop-types'
import { View, Image, CommonEvent } from '@tarojs/components'
import { mergeStyle } from '../../common/utils'
import TvIcon from '../icon'
import { TvImageProps, TvImageState } from '../../../types/image.d'

const FIT_MODE_MAP = {
  none: 'center',
  fill: 'scaleToFill',
  cover: 'aspectFill',
  contain: 'aspectFit',
  widthFix: 'widthFix',
  heightFix: 'heightFix'
}

export default class TvImage extends React.Component<
  TvImageProps,
  TvImageState
> {
  public static defaultProps: TvImageProps
  public static propTypes: InferProps<TvImageProps>

  constructor(props: TvImageProps) {
    super(props)
    this.state = {
      loading: true,
      error: false
    }
  }

  private onLoad(event: CommonEvent) {
    this.setState({
      loading: false
    })
    this.props.onLoad && this.props.onLoad(event)
  }

  private onError(event: CommonEvent) {
    this.setState({
      loading: false,
      error: true
    })
    this.props.onError && this.props.onError(event)
  }

  public render(): JSX.Element {
    const {
      src,
      fit,
      width,
      height,
      radius,
      round,
      lazyLoad,
      showLoading,
      loadingContent,
      errorContent,
      showError,
      className,
      customStyle,
      showMenuByLongpress,
      onClick
    } = this.props
    const { error, loading } = this.state
    const rootClassName = 'tv-image'
    const classObject = {
      [`${rootClassName}--round`]: round
    }

    return (
      <View
        style={mergeStyle(
          {
            width,
            height,
            borderRadius: radius || '',
            overflow: radius ? 'hidden' : ''
          },
          customStyle as object
        )}
        onClick={onClick}
        className={classNames(rootClassName, classObject, className)}
      >
        {!error ? (
          <Image
            src={src}
            mode={FIT_MODE_MAP[fit as string]}
            lazyLoad={lazyLoad}
            className='image-class tv-image__img'
            showMenuByLongpress={showMenuByLongpress}
            onLoad={this.onLoad.bind(this)}
            onError={this.onError.bind(this)}
          />
        ) : null}
        {loading && showLoading ? (
          <View className='loading-class tv-image__loading'>
            {loadingContent || (
              <TvIcon name='photo' className='tv-image__loading-icon' />
            )}
          </View>
        ) : null}
        {error && showError ? (
          <View className='error-class tv-image__error'>
            {errorContent || (
              <TvIcon name='photo-fail' className='tv-image__error-icon' />
            )}
          </View>
        ) : null}
      </View>
    )
  }
}

TvImage.defaultProps = {
  src: '',
  fit: 'fill',
  radius: 0,
  round: false,
  lazyLoad: false,
  showError: true,
  showLoading: true,
  showMenuByLongpress: false,
  customStyle: {}
}

TvImage.propTypes = {
  src: PropType.string,
  fit: PropType.oneOf([
    'fill',
    'contain',
    'cover',
    'widthFix',
    'heightFix',
    'none'
  ]),
  alt: PropType.string,
  width: PropType.oneOfType([PropType.string, PropType.number]),
  height: PropType.oneOfType([PropType.string, PropType.number]),
  radius: PropType.oneOfType([PropType.string, PropType.number]),
  round: PropType.bool,
  lazyLoad: PropType.bool,
  showMenuByLongpress: PropType.bool,
  showError: PropType.bool,
  showLoading: PropType.bool,
  customStyle: PropType.object,
  className: PropType.string,
  errorContent: PropType.oneOfType([PropType.element, PropType.string]),
  loadingContent: PropType.oneOfType([PropType.element, PropType.string]),
  onClick: PropType.func,
  onError: PropType.func,
  onLoad: PropType.func
}
