import Taro from '@tarojs/taro'

function requestAnimationFrame(cb: () => void) {
  const systemInfo = Taro.getSystemInfoSync()

  if (systemInfo.platform === 'devtools') {
    return setTimeout(() => {
      cb()
    }, 1000 / 30)
  }

  return Taro.createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(() => {
      cb()
    })
}

function objectToString(style: object | string): string {
  if (style && typeof style === 'object') {
    let styleStr = ''
    Object.keys(style).forEach(key => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      styleStr += `${lowerCaseKey}:${style[key]};`
    })
    return styleStr
  } else if (style && typeof style === 'string') {
    return style
  }
  return ''
}

function pxTransform(size: number): string {
  if (!size) return ''
  const designWidth = 750
  const deviceRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  }
  return `${size / deviceRatio[designWidth]}rpx`
}

/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */
function mergeStyle(
  style1: object | string,
  style2: object | string
): object | string {
  if (
    style1 &&
    typeof style1 === 'object' &&
    style2 &&
    typeof style2 === 'object'
  ) {
    return Object.assign({}, style1, style2)
  }

  return objectToString(style1) + objectToString(style2)
}

export { requestAnimationFrame, mergeStyle, pxTransform }
