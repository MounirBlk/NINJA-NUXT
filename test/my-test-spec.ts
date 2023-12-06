import { describe, test } from 'vitest'
import { setup, $fetch, url } from '@nuxt/test-utils'

describe('My test', async () => {
  await setup({
    // test context options
  })

  test('my test', async () => {
    const html = await fetch('/')
    const { body, headers } = html
    const pageUrl = url('/about')
  })
})
