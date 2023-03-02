import { App } from 'vue'
import { Button } from '@mz-ui/components'

export { Button }

export default {
  install: (
    app: App,
    options?: {
      namespace: string
      locale: {
        locale: string
      }
    }
  ) => {
    app.component(`${options?.namespace || 'mz'}-button`, Button)
  }
}
