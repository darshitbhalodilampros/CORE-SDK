import { SWAP_ROUTER_02_ADDRESSES } from './addresses'
import { ChainId } from './chains'

describe('addresses', () => {
  describe('swap router 02 addresses', () => {
    it('should return the correct address for bast', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.MODE)
      expect(address).toEqual('0x22dc8CA232debF877eFF0628FF9215519e8083f4')
    })
  })
})
