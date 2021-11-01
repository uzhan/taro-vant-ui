import React, { createContext } from 'react'
import classNames from 'classnames'
import PropeTypes, { InferProps } from 'prop-types'
import { View } from '@tarojs/components'
import { TvRowProps } from '../../../types/row'

export const RowContext = createContext<{ gutter?: number }>({
  gutter: 0
})

export default class TvRow extends React.Component<TvRowProps> {
  public static defaultProps: TvRowProps
  public static propeTypes: InferProps<TvRowProps>

  public render(): JSX.Element {
    const { gutter, align, justify, wrap } = this.props

    const classObject = {
      [`tv-row--align-${align}`]: align,
      [`tv-row--justify-${justify}`]: justify,
      'tv-row--nowrap': !wrap
    }

    return (
      <View
        className={classNames('tv-row', classObject)}
        style={
          gutter
            ? { marginLeft: (gutter / 2) * -1, marginRight: (gutter / 2) * -1 }
            : {}
        }
      >
        <RowContext.Provider value={{ gutter }}>
          {this.props.children}
        </RowContext.Provider>
      </View>
    )
  }
}

TvRow.defaultProps = {
  gutter: 0,
  align: 'top',
  justify: 'start',
  wrap: false
}

TvRow.propeTypes = {
  gutter: PropeTypes.number,
  align: PropeTypes.oneOf(['top', 'center', 'bottom']),
  justify: PropeTypes.oneOf([
    'start',
    'end',
    'center',
    'space-around',
    'space-between'
  ]),
  wrap: PropeTypes.bool,
  onClick: PropeTypes.func
}
