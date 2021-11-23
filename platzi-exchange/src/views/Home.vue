<template>
  <div>
    <px-assets-table
      :assets="assets"
    /><!-- XXX HACK : escribir :assets es lo mismo que v-bind:assets -->
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  name: 'Home',
  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
    }
  },

  created() {
    api.getAssets().then((assets) => (this.assets = assets))
  },
}
</script>
