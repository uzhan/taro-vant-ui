import React from 'react'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { View } from '@tarojs/components'
import { TvCellGroupProps } from '../../../types/cell-group'

export default class TvCellGroup extends React.Component<TvCellGroupProps> {
  public static defalutProps: TvCellGroupProps
  public static propTypes: InferProps<TvCellGroupProps>

  public render() {
    const { title, inset, border } = this.props
    return (
      <React.Fragment>
        {title ? (
          <View
            className={classNames('tv-cell-group__title', {
              'tv-cell-group__title--inset': inset
            })}
          >
            {title}
          </View>
        ) : null}
        <View
          className={classNames('tv-cell-group', {
            'tv-cell-group__inset': inset,
            'tv-hairline--top-bottom': border
          })}
        >
          {this.props.children}
        </View>
      </React.Fragment>
    )
  }
}

TvCellGroup.defalutProps = {
  title: '',
  border: true,
  inset: false
}

TvCellGroup.propTypes = {
  title: PropTypes.string,
  inset: PropTypes.bool,
  border: PropTypes.bool
}
