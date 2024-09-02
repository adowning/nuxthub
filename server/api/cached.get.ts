// Example of a cached event handler
// Learn more on https://nitro.unjs.io/guide/cache
import type { H3Event } from 'h3'

export default cachedEventHandler(() => {
  return {
    now: Date.now(),
    success: true,
    date: new Date().toISOString()
  }
}, {
  maxAge: 60 * 60, // 5 seconds
  getKey: (event: H3Event) => event.path

});
