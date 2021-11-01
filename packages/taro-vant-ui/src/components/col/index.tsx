import React from 'react'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { View } from '@tarojs/components'
import { RowContext } from '../row'
import { TvColProps } from '../../../types/col'

export default class TvCol extends React.Component<TvColProps> {
  public static defaultProps: TvColProps
  public static propeTypes: InferProps<TvColProps>

  public render(): JSX.Element {
    const { span, offset, className, customStyle } = this.props

    const classObject = {
      [`tv-col--${span}`]: span,
      [`tv-col--offset-${offset}`]: offset
    }

    return (
      <RowContext.Consumer>
        {({ gutter = 0 }) => (
          <View
            className={classNames('tv-col', classObject, className)}
            style={Object.assign({}, customStyle, {
              'padding-right': gutter / 2,
              'padding-left': gutter / 2
            })}
          >
            {this.props.children}
          </View>
        )}
      </RowContext.Consumer>
    )
  }
}

TvCol.defaultProps = {
  customStyle: {}
}

TvCol.propeTypes = {
  span: PropTypes.number,
  offset: PropTypes.number,
  className: PropTypes.string,
  customStyle: PropTypes.object,
  onClick: PropTypes.func
}
