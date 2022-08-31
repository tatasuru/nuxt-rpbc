import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
// import 'dayjs/locale/ja'

// dayjs.locale('ja')
dayjs.extend(advancedFormat)

export default ({ app }, inject) => {
  inject('dayjs', string => dayjs(string))
}
