import { createI18n } from 'vue-i18n'
import en from '@/i18n/en.json'
import zhCN from '@/i18n/zh-CN.json'


const messages = {
  'en': { message: en },
  'zh-CN': { message: zhCN },
}

export default createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages,
})
