import ElementPlus from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import { App } from 'vue'

export default {
  install (app:App) {
    app.use(ElementPlus, {
      size: 'small',
      zIndex: 3000,
      locale: zhCn
    })
  }
}
